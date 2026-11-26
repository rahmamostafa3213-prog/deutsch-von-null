import json, io, wave, os, subprocess, sys
import numpy as np
from piper import PiperVoice

VOICES = {
    "de": PiperVoice.load(os.path.expanduser("~/voices/de_DE-thorsten-high.onnx"),
                          os.path.expanduser("~/voices/de_DE-thorsten-high.onnx.json")),
    "ar": PiperVoice.load(os.path.expanduser("~/voices/ar_JO-kareem-medium.onnx"),
                          os.path.expanduser("~/voices/ar_JO-kareem-medium.onnx.json")),
}

def synth(voice_key, text):
    v = VOICES[voice_key]
    chunks = list(v.synthesize(text))
    pcm = b"".join(c.audio_int16_bytes for c in chunks)
    return np.frombuffer(pcm, dtype=np.int16), chunks[0].sample_rate

TARGET_SR = 22050

def to_sr(pcm, sr):
    if sr == TARGET_SR:
        return pcm
    x = np.arange(len(pcm))
    xi = np.linspace(0, len(pcm) - 1, int(len(pcm) * TARGET_SR / sr))
    return np.interp(xi, x, pcm.astype(np.float64)).astype(np.int16)

def main():
    slides = json.load(open("/tmp/narr.json"))
    outdir = os.path.expanduser("~/wortgarten/assets/audio")
    os.makedirs(outdir, exist_ok=True)
    pause = np.zeros(int(TARGET_SR * 0.45), dtype=np.int16)
    for item in slides:
        parts = []
        for voice, text in item["segs"]:
            pcm, sr = synth(voice, text)
            parts.append(to_sr(pcm, sr))
            parts.append(pause)
        full = np.concatenate(parts)
        wav_path = f"/tmp/{item['file']}.wav"
        with wave.open(wav_path, "wb") as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(TARGET_SR)
            w.writeframes(full.tobytes())
        mp3_path = os.path.join(outdir, item["file"] + ".mp3")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav_path,
                        "-codec:a", "libmp3lame", "-q:a", "5", mp3_path], check=True)
        print(item["file"], f"{len(full)/TARGET_SR:.1f}s", os.path.getsize(mp3_path)//1024, "KB")
    print("TOTAL audio bytes:", sum(os.path.getsize(os.path.join(outdir,f)) for f in os.listdir(outdir)))

main()
