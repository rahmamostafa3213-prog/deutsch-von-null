import json, os, re, subprocess, math
from PIL import Image, ImageDraw, ImageFont
DRAW = None

W, H = 720, 1280
F = os.path.expanduser("~/fonts")
AR_B = ImageFont.truetype(F + "/NotoNaskhArabic-Bold.ttf", 64)
AR_R = ImageFont.truetype(F + "/NotoNaskhArabic-Regular.ttf", 44)
AR_S = ImageFont.truetype(F + "/NotoNaskhArabic-Regular.ttf", 36)
DE_B = ImageFont.truetype(F + "/Poppins-Bold.ttf", 56)
BRAND = ImageFont.truetype(F + "/Poppins-Bold.ttf", 34)
EMOJI = re.compile("[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F\u2B50\u2190-\u21FF\u2705\u274C\u23F0-\u23FF]")

def ar(t):
    return EMOJI.sub("", t)

def wrap_ar(text, font, maxw):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if DRAW.textlength(ar(trial), font=font, direction="rtl") <= maxw:
            cur = trial
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def wrap_de(text, font, maxw):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if font.getlength(trial) <= maxw:
            cur = trial
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def slide_img(lesson, si, nlessons, out):
    s = lesson["slides"][si]
    img = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(img)
    global DRAW; DRAW = d
    for y in range(H):
        t = y / H
        r = int(15 + (11 - 15) * t); g = int(157 + (122 - 157) * t); b = int(138 + (107 - 138) * t)
        d.line([(0, y), (W, y)], fill=(r, g, b))
    d.ellipse([-140, -140, 220, 220], fill=(13, 138, 121))
    d.ellipse([560, 1080, 900, 1420], fill=(13, 138, 121))
    d.ellipse([600, 60, 690, 150], outline=(255, 176, 32), width=6)
    # brand
    d.ellipse([28, 34, 86, 92], fill=(255, 176, 32))
    d.text((57, 49), "W", font=BRAND, fill=(11, 90, 78), anchor="mm")
    d.text((104, 44), "Wortgarten", font=BRAND, fill=(255, 255, 255))
    # lesson chip
    chip = ar(f"الدرس {lesson['n']} من {nlessons}، مشهد {si+1} من {len(lesson['slides'])}")
    d.text((W - 30, 130), chip, font=AR_S, fill=(210, 235, 230), anchor="ra", direction="rtl", language="ar")
    y = 300
    # heading (right aligned)
    for line in wrap_ar(s["h"], AR_B, W - 120):
        d.text((W - 60, y), ar(line), font=AR_B, fill=(255, 255, 255), anchor="ra", direction="rtl", language="ar")
        y += 92
    y += 20
    # german block
    if s.get("de"):
        lines = wrap_de(s["de"], DE_B, W - 140)
        bh = len(lines) * 78 + 56
        d.rounded_rectangle([50, y, W - 50, y + bh], radius=26, fill=(255, 255, 255))
        yy = y + 34
        for line in lines:
            d.text((W // 2, yy), line, font=DE_B, fill=(11, 90, 78), anchor="ma")
            yy += 78
        y += bh + 44
    # body
    for line in wrap_ar(EMOJI.sub("", s["b"]), AR_R, W - 140):
        d.text((W - 70, y), ar(line), font=AR_R, fill=(226, 242, 239), anchor="ra", direction="rtl", language="ar")
        y += 66
    # dots
    n = len(lesson["slides"])
    total = n * 22
    x0 = W // 2 - total // 2
    for i in range(n):
        col = (255, 176, 32) if i == si else (255, 255, 255, 90)
        d.ellipse([x0 + i * 22, H - 70, x0 + i * 22 + 12, H - 58], fill=col if i == si else (70, 160, 148))
    img.save(out)

def dur_of(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                        "-of", "csv=p=0", path], capture_output=True, text=True)
    return float(r.stdout.strip())

def main():
    lessons = json.load(open("/tmp/vlessons.json"))
    for k, l in enumerate(lessons): l["n"] = k + 1
    os.makedirs("/tmp/vid", exist_ok=True)
    vdir = os.path.expanduser("~/wortgarten/assets/videos")
    os.makedirs(vdir, exist_ok=True)
    for k, lesson in enumerate(lessons):
        segs = []
        for si in range(len(lesson["slides"])):
            png = f"/tmp/vid/l{k}s{si}.png"
            slide_img(lesson, si, len(lessons), png)
            mp3 = os.path.expanduser(f"~/wortgarten/assets/audio/vl{k}s{si}.mp3")
            d = dur_of(mp3) + 0.35
            seg = f"/tmp/vid/seg{k}_{si}.mp4"
            frames = int(d * 25)
            vf = (f"zoompan=z='min(1+0.35*on/{frames},1.14)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s=720x1280:fps=25,"
                  f"fade=t=in:st=0:d=0.35,fade=t=out:st={d-0.35:.2f}:d=0.35,format=yuv420p")
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-loop", "1", "-i", png,
                            "-i", mp3, "-vf", vf, "-t", f"{d:.2f}", "-c:v", "libx264",
                            "-preset", "veryfast", "-crf", "28", "-c:a", "aac", "-b:a", "80k",
                            "-shortest", seg], check=True)
            segs.append(seg)
        lst = f"/tmp/vid/list{k}.txt"
        with open(lst, "w") as f:
            for s_ in segs: f.write(f"file '{s_}'\n")
        out = f"{vdir}/vl{k}.mp4"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0",
                        "-i", lst, "-c", "copy", out], check=True)
        # poster
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", f"/tmp/vid/l{k}s0.png",
                        "-q:v", "4", f"{vdir}/vl{k}.jpg"], check=True)
        print("vl%d" % k, f"{dur_of(out):.0f}s", os.path.getsize(out) // 1024, "KB")
    print("TOTAL", sum(os.path.getsize(os.path.join(vdir, f)) for f in os.listdir(vdir)) // 1024, "KB")

main()
