package com.deutsch.vonnull;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.speech.tts.TextToSpeech;
import android.util.Base64;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.Locale;

public class MainActivity extends Activity {
    private WebView wv;
    private TextToSpeech tts;
    private boolean ttsOk = false;
    private String pendingImage = null;
    private String pendingName = null;

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
                tts.setLanguage(Locale.GERMAN);
                tts.setSpeechRate(0.85f);
                ttsOk = true;
            }
        });
    }

    class Js {
        @JavascriptInterface
        public void speak(final String t) {
            if (ttsOk) tts.speak(t, TextToSpeech.QUEUE_FLUSH, null, "utt");
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
            runOnUiThread(() -> Toast.makeText(this, "اتحفظت في الصور ✅", Toast.LENGTH_LONG).show());
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
        pendingImage = null;
        pendingName = null;
    }

    @Override
    public void onBackPressed() {
        wv.evaluateJavascript("window.appBack ? appBack() : false", v -> {
            if (!"true".equals(v)) MainActivity.super.onBackPressed();
        });
    }

    @Override
    protected void onDestroy() {
        if (tts != null) tts.shutdown();
        super.onDestroy();
    }
}
