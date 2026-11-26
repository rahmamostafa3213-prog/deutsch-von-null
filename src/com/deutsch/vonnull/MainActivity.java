package com.deutsch.vonnull;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.provider.MediaStore;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.speech.tts.TextToSpeech;
import android.speech.tts.Voice;
import android.util.Base64;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.json.JSONObject;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Set;

public class MainActivity extends Activity {
    private WebView wv;
    private TextToSpeech tts;
    private boolean ttsOk = false;
    private boolean germanVoice = false;
    private String pendingImage = null;
    private String pendingName = null;
    private SpeechRecognizer rec = null;
    private boolean listening = false;
    private String uiLang = "ar";
    private final Handler ui = new Handler(Looper.getMainLooper());

    @Override
    public void onCreate(Bundle b) {
        super.onCreate(b);
        wv = new WebView(this);
        WebSettings s = wv.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(true);
        wv.setWebViewClient(new WebViewClient());
        wv.addJavascriptInterface(new Js(), "Android");
        getWindow().setStatusBarColor(Color.parseColor("#0f9d8a"));
        getWindow().setNavigationBarColor(Color.parseColor("#0f9d8a"));
        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        setContentView(wv);
        wv.loadUrl("file:///android_asset/index.html");
        tts = new TextToSpeech(this, st -> {
            if (st == TextToSpeech.SUCCESS) {
                int r = tts.setLanguage(Locale.GERMAN);
                germanVoice = r != TextToSpeech.LANG_MISSING_DATA && r != TextToSpeech.LANG_NOT_SUPPORTED;
                pickGermanVoice();
                tts.setSpeechRate(0.85f);
                ttsOk = true;
            }
        });
    }

    private void pickGermanVoice() {
        try {
            Set<Voice> vs = tts.getVoices();
            if (vs == null) return;
            Voice best = null;
            for (Voice v : vs) {
                if (v.getLocale() == null || !"de".equals(v.getLocale().getLanguage())) continue;
                if (best == null) { best = v; continue; }
                if (!v.isNetworkConnectionRequired() && best.isNetworkConnectionRequired()) { best = v; continue; }
                if (v.isNetworkConnectionRequired() == best.isNetworkConnectionRequired()
                        && v.getQuality() > best.getQuality()) best = v;
            }
            if (best != null) tts.setVoice(best);
        } catch (Exception ignored) {}
    }

    private void jsCallback(final String fn, final String arg) {
        final String esc = arg == null ? "" : arg.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ");
        wv.post(() -> wv.evaluateJavascript("window." + fn + " && window." + fn + "('" + esc + "')", null));
    }

    class Js {
        @JavascriptInterface
        public void speak(final String t) {
            if (ttsOk) tts.speak(t, TextToSpeech.QUEUE_FLUSH, null, "utt");
        }

        @JavascriptInterface
        public void speakRate(final String t, final float r) {
            ui.post(() -> {
                if (!ttsOk) return;
                tts.setSpeechRate(r);
                tts.speak(t, TextToSpeech.QUEUE_FLUSH, null, "utts");
                ui.postDelayed(() -> tts.setSpeechRate(0.85f), 300);
            });
        }

        @JavascriptInterface
        public String voiceStatus() {
            if (!ttsOk) return "no-tts";
            return germanVoice ? "de" : "missing";
        }

        @JavascriptInterface
        public void openTtsSettings() {
            try {
                startActivity(new Intent("com.android.settings.TTS_SETTINGS"));
            } catch (Exception e) {
                try { startActivity(new Intent(android.provider.Settings.ACTION_SETTINGS)); } catch (Exception ignored) {}
            }
        }

        @JavascriptInterface
        public boolean speechAvailable() {
            return SpeechRecognizer.isRecognitionAvailable(MainActivity.this);
        }

        @JavascriptInterface
        public void startListening() {
            ui.post(() -> startListeningUi());
        }

        @JavascriptInterface
        public void stopListening() {
            ui.post(() -> {
                try { if (rec != null && listening) rec.stopListening(); } catch (Exception ignored) {}
            });
        }


        @JavascriptInterface
        public void setLang(String l) { if ("en".equals(l) || "de".equals(l) || "ar".equals(l)) uiLang = l; }

        @JavascriptInterface
        public void openUrl(String u) {
            try {
                if (u != null && u.startsWith("https://aistudio.google.com/")) {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(u)));
                }
            } catch (Exception ignored) {}
        }

        @JavascriptInterface
        public boolean tutorHasKey() { return readKey() != null; }

        @JavascriptInterface
        public void tutorSaveKey(String k) {
            try {
                File f = new File(getNoBackupFilesDir(), "tk");
                FileOutputStream o = new FileOutputStream(f);
                o.write(k.trim().getBytes("UTF-8"));
                o.close();
            } catch (Exception ignored) {}
        }

        @JavascriptInterface
        public void tutorClearKey() {
            try { new File(getNoBackupFilesDir(), "tk").delete(); } catch (Exception ignored) {}
        }

        // The key never reaches JavaScript: the request is made here and only the response is returned.
        @JavascriptInterface
        public void tutorHttp(final String id, final String method, final String path, final String body) {
            new Thread(() -> {
                int code = -1;
                String resp = "";
                try {
                    String key = readKey();
                    if (key == null || path == null || !path.startsWith("/v1beta/models")) throw new Exception("bad");
                    HttpURLConnection c = (HttpURLConnection) new URL("https://generativelanguage.googleapis.com" + path).openConnection();
                    c.setConnectTimeout(15000);
                    c.setReadTimeout(60000);
                    c.setRequestMethod("POST".equals(method) ? "POST" : "GET");
                    c.setRequestProperty("x-goog-api-key", key);
                    c.setRequestProperty("Content-Type", "application/json");
                    if ("POST".equals(method)) {
                        c.setDoOutput(true);
                        OutputStream o = c.getOutputStream();
                        o.write(body.getBytes("UTF-8"));
                        o.close();
                    }
                    code = c.getResponseCode();
                    InputStream in = code >= 400 ? c.getErrorStream() : c.getInputStream();
                    if (in != null) {
                        BufferedReader r = new BufferedReader(new InputStreamReader(in, "UTF-8"));
                        StringBuilder sb = new StringBuilder();
                        String ln;
                        while ((ln = r.readLine()) != null) sb.append(ln).append('\n');
                        resp = sb.toString();
                    }
                } catch (Exception e) {
                    code = -1;
                }
                try {
                    JSONObject j = new JSONObject();
                    j.put("id", id);
                    j.put("code", code);
                    j.put("body", resp);
                    jsCallback("onTutorResult", j.toString());
                } catch (Exception ignored) {}
            }).start();
        }

        @JavascriptInterface
        public void shareText(String t) {
            Intent i = new Intent(Intent.ACTION_SEND);
            i.setType("text/plain");
            i.putExtra(Intent.EXTRA_TEXT, t);
            startActivity(Intent.createChooser(i, null));
        }

        @JavascriptInterface
        public String saveImage(String dataUrl, String name) {
            if (Build.VERSION.SDK_INT <= 28
                    && checkSelfPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                pendingImage = dataUrl;
                pendingName = name;
                requestPermissions(new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE}, 7);
                return "ASK";
            }
            return doSave(dataUrl, name);
        }
    }

    private String readKey() {
        try {
            File f = new File(getNoBackupFilesDir(), "tk");
            if (!f.exists()) return null;
            java.io.FileInputStream in = new java.io.FileInputStream(f);
            byte[] b = new byte[(int) f.length()];
            int n = in.read(b);
            in.close();
            String k = new String(b, 0, Math.max(n, 0), "UTF-8").trim();
            return k.length() > 10 ? k : null;
        } catch (Exception e) { return null; }
    }

    private void startListeningUi() {
        if (checkSelfPermission(android.Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{android.Manifest.permission.RECORD_AUDIO}, 9);
            return;
        }
        if (!SpeechRecognizer.isRecognitionAvailable(this)) {
            jsCallback("onSpeechError", "no-service");
            return;
        }
        try {
            if (rec == null) {
                rec = SpeechRecognizer.createSpeechRecognizer(this);
                rec.setRecognitionListener(new RecListener());
            }
            Intent i = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
            i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
            i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "de-DE");
            i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, "de-DE");
            i.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true);
            i.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 3);
            rec.startListening(i);
        } catch (Exception e) {
            jsCallback("onSpeechError", "start-failed");
        }
    }

    class RecListener implements RecognitionListener {
        @Override public void onReadyForSpeech(Bundle params) { listening = true; jsCallback("onSpeechState", "listening"); }
        @Override public void onBeginningOfSpeech() {}
        @Override public void onRmsChanged(float rmsdB) {}
        @Override public void onBufferReceived(byte[] buffer) {}
        @Override public void onEndOfSpeech() { listening = false; jsCallback("onSpeechState", "processing"); }
        @Override public void onError(int error) { listening = false; jsCallback("onSpeechError", String.valueOf(error)); }
        @Override public void onResults(Bundle results) {
            listening = false;
            ArrayList<String> res = results.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
            jsCallback("onSpeechResult", res != null && !res.isEmpty() ? res.get(0) : "");
        }
        @Override public void onPartialResults(Bundle partialResults) {
            ArrayList<String> res = partialResults.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
            if (res != null && !res.isEmpty()) jsCallback("onSpeechPartial", res.get(0));
        }
        @Override public void onEvent(int eventType, Bundle params) {}
    }

    private String doSave(String dataUrl, String name) {
        try {
            byte[] bytes = Base64.decode(dataUrl.substring(dataUrl.indexOf(',') + 1), Base64.DEFAULT);
            if (Build.VERSION.SDK_INT >= 29) {
                ContentValues v = new ContentValues();
                v.put(MediaStore.Images.Media.DISPLAY_NAME, name);
                v.put(MediaStore.Images.Media.MIME_TYPE, "image/png");
                v.put(MediaStore.Images.Media.RELATIVE_PATH, "Pictures/DeutschVonNull");
                Uri uri = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, v);
                OutputStream o = getContentResolver().openOutputStream(uri);
                o.write(bytes);
                o.close();
            } else {
                File dir = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_PICTURES);
                File f = new File(dir, name);
                FileOutputStream o = new FileOutputStream(f);
                o.write(bytes);
                o.close();
                android.media.MediaScannerConnection.scanFile(this, new String[]{f.getPath()}, null, null);
            }
            runOnUiThread(() -> Toast.makeText(this, "en".equals(uiLang) ? "Saved to Photos ✅" : "de".equals(uiLang) ? "In den Fotos gespeichert ✅" : "اتحفظت في الصور ✅", Toast.LENGTH_LONG).show());
            return "OK";
        } catch (Exception e) {
            return "ERR:" + e.getMessage();
        }
    }

    @Override
    public void onRequestPermissionsResult(int req, String[] perms, int[] grants) {
        if (req == 7 && pendingImage != null && grants.length > 0 && grants[0] == PackageManager.PERMISSION_GRANTED) {
            doSave(pendingImage, pendingName);
        }
        if (req == 9) {
            jsCallback("onMicPermission", grants.length > 0 && grants[0] == PackageManager.PERMISSION_GRANTED ? "1" : "0");
        }
        pendingImage = null;
        pendingName = null;
    }

    @Override
    public void onBackPressed() {
        if (rec != null && listening) { try { rec.cancel(); } catch (Exception ignored) {} listening = false; }
        wv.evaluateJavascript("window.appBack ? appBack() : false", v -> {
            if (!"true".equals(v)) MainActivity.super.onBackPressed();
        });
    }

    @Override
    protected void onDestroy() {
        if (rec != null) { try { rec.destroy(); } catch (Exception ignored) {} }
        if (tts != null) tts.shutdown();
        super.onDestroy();
    }
}
