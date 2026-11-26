# Wortgarten — ألماني من الصفر

تطبيق أندرويد مجاني بالكامل لتعليم الألمانية لمتحدثي العربية، من تحت الصفر حتى A2. بدون إعلانات، بدون حسابات، ويشتغل بدون إنترنت.

## المميزات (v2.4)
- 🐣 مسار "ابدأ من الصفر": الحروف والأصوات بالصوت، الضمائر، der/die/das، الأرقام، أول جمل — شرح + اختبار لكل نقطة
- 🎬 6 دروس فيديو مصممة بجرافيك متحرك وتعليق صوتي (شرح عربي + نطق ألماني)، تشتغل أوفلاين
- 🎤 تدريب نطق بالميكروفون: التطبيق يسمع نطقك ويقيّمه من 100 ويصححلك
- 28 وحدة (A1 + A2 + A2 المكمل) — أكتر من 380 كلمة وجملة
- 9 محادثات حقيقية بتشغيل ولعب أدوار، 24 فعل مصرف، قواعد A1 وA2 بالعربي المصري
- مراجعة ذكية بنظام Leitner، اختبار تحديد مستوى، قاموس، شهادات، إحصائيات وسلسلة أيام
- صوت ألماني واضح + استماع بطيء 🐢، ووضع ليلي

## البناء
شوفي `build-apk.sh` — JDK17 + Android SDK 34. التوقيع بـ `keystore.jks` (متجاهل في git) وكلمة السر في متغير `KS_PASS`.

## توليد الفيديوهات والصوت
سكربتات `tools/`: تعليق صوتي مولّد بأصوات Piper العصبية (thorsten الألماني + kareem العربي)، وشرائح مصممة بـ PIL ومونتاج بـ ffmpeg.

## الخصوصية
كل البيانات على الجهاز فقط (localStorage). الأذونات: الميكروفون لتدريب النطق فقط، والإنترنت لخدمة التعرف على الكلام في بعض الأجهزة.

## v2.3
- Language switch (🌐 on the top bar and in Settings): Arabic, English, German. Lesson and UI text is translated; the 6 video lessons stay Arabic narration + German.
- Optional AI tutor: you paste your own free Google AI Studio (Gemini) key in Settings. The key is stored on the phone only (no-backup app storage) and requests are made natively, so JavaScript never sees it. The app works fully without it.

## v2.4
- Pronunciation notes under every word (unit cards, dictionary, quiz corrections, speaking practice), in Arabic/English/German. Rule-based guidance with a small exceptions list for loanwords.
- 20 new pronunciation videos (vowels, long/short, umlauts, ei/ie/eu/au, ch, sch/sp/st, R, S/Z, V/W/F/J, G/K/Q/X, H, word endings, clusters, stress, melody, loanwords, long words, numbers, common mistakes). Total 26 videos.
- New design pass: vector icons replace emoji, consistent spacing, shadows and motion.
