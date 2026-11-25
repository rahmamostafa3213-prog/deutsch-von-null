// وحدات المستوى التاني A2 — [de, ar, hint]
const UNITS2=[
{id:13,icon:"🍽️",t:"في المطعم والقهوة",g:"Ich hätte gern = عايزة بطريقة مهذبة (أحسن من ich will). Die Rechnung, bitte = الحساب لو سمحت. البقشيش اسمه Trinkgeld.",
w:[["das Restaurant","مطعم",""],["das Café","قهوة / كافيه",""],["die Speisekarte","قائمة الأكل",""],["der Kellner","الجرسون",""],["bestellen","يطلب (أكل)",""],["bezahlen","يدفع",""],["die Rechnung","الحساب",""],["das Trinkgeld","البقشيش",""],["schmecken","يكون طعمه",""],["das Frühstück","الفطار",""],["das Abendessen","العشاء",""],["hungrig","جعان",""]],
p:[["Ich hätte gern einen Kaffee","عايزة قهوة لو سمحت"],["Die Rechnung, bitte","الحساب لو سمحت"],["Das schmeckt sehr lecker","ده طعمه جميل جداً"],["Kann ich mit Karte zahlen?","ممكن أدفع بالكارت؟"]]},
{id:14,icon:"✈️",t:"السفر والفندق",g:"abfahren = يتحرك (مواصلات)، ankommen = يوصل. الأفعال دي منفصلة: Der Zug fährt um 8 ab (القطر هيتحرك 8).",
w:[["der Bahnhof","محطة القطر",""],["der Flughafen","المطار",""],["das Ticket","التذكرة",""],["der Zug","القطر",""],["das Flugzeug","الطيارة",""],["die Reservierung","الحجز",""],["das Einzelzimmer","أوضة لفرد",""],["das Doppelzimmer","أوضة لفردين",""],["der Koffer","شنطة السفر",""],["die Verspätung","التأخير",""],["abfahren","يتحرك / يقلع",""],["ankommen","يوصل",""]],
p:[["Ich habe ein Zimmer reserviert","أنا حاجزة أوضة"],["Wann fährt der Zug ab?","القطر هيتحرك الساعة كام؟"],["Ein Ticket nach Berlin, bitte","تذكرة لبرلين لو سمحت"],["Der Zug hat Verspätung","القطر متأخر"]]},
{id:15,icon:"🏥",t:"الصحة والجسم",g:"Mir tut der Kopf weh = راسي بتوجعني. Gute Besserung = ألف سلامة عليك. الميعاد عند الدكتور: der Termin.",
w:[["der Kopf","الراس",""],["der Bauch","البطن",""],["der Schmerz","الألم",""],["krank","عيان",""],["gesund","صحي / سليم",""],["der Arzt","الدكتور",""],["die Ärztin","الدكتورة",""],["die Apotheke","الصيدلية",""],["das Medikament","الدوا",""],["das Fieber","السخونية",""],["der Termin","الميعاد",""],["die Grippe","الإنفلونزا",""]],
p:[["Mir tut der Kopf weh","راسي بتوجعني"],["Ich habe Fieber","عندي سخونية"],["Ich brauche einen Termin","محتاجة ميعاد"],["Gute Besserung!","ألف سلامة عليك!"]]},
{id:16,icon:"💼",t:"الشغل والدراسة",g:"Ich arbeite als = أنا شغالة في مهنة... Ich studiere = أنا بذاكر في الجامعة. die Prüfung = الامتحان.",
w:[["die Arbeit","الشغل",""],["der Beruf","المهنة",""],["das Büro","المكتب",""],["der Kollege","الزميل",""],["die Kollegin","الزميلة",""],["der Chef","المدير",""],["die Bewerbung","طلب التوظيف",""],["das Gehalt","المرتب",""],["die Universität","الجامعة",""],["die Prüfung","الامتحان",""],["der Kurs","الكورس",""],["der Feierabend","نهاية الدوام",""]],
p:[["Ich arbeite als Lehrerin","أنا شغالة مدرسة"],["Ich habe morgen eine Prüfung","عندي امتحان بكرة"],["Ich bewerbe mich um den Job","بقدم على الشغلانة"],["Wo arbeitest du?","إنتي شغالة فين؟"]]},
{id:17,icon:"⚽",t:"الهوايات والرياضة",g:"gern بعد الفعل معناها بحب أعمله: Ich spiele gern Fußball = بحب ألعب كورة.",
w:[["das Hobby","الهواية",""],["der Sport","الرياضة",""],["der Fußball","الكورة",""],["schwimmen","يعوم",""],["das Buch","الكتاب",""],["die Musik","المزيكا",""],["der Film","الفيلم",""],["das Spiel","اللعبة / الماتش",""],["spazieren gehen","يتمشى",""],["tanzen","يرقص",""],["malen","يرسم",""],["das Fahrrad","العجلة",""]],
p:[["Was machst du gern?","بتحبي تعملي إيه؟"],["Ich spiele gern Fußball","بحب ألعب كورة"],["Ich höre gern Musik","بحب أسمع مزيكا"],["Am Wochenende fahre ich Fahrrad","في الويك إند بركب العجلة"]]},
{id:18,icon:"🌦️",t:"الطقس والفصول",g:"Es regnet = بتمطر. Es ist sonnig = الجو مشمس. Mir ist kalt = حاسة بالبرد. الفصول كلها der.",
w:[["das Wetter","الجو",""],["die Sonne","الشمس",""],["der Regen","المطر",""],["der Schnee","التلج",""],["der Wind","الهوا",""],["die Wolke","السحابة",""],["heiß","حار",""],["kalt","ساقع",""],["warm","دافي",""],["der Frühling","الربيع",""],["der Sommer","الصيف",""],["der Winter","الشتاء",""]],
p:[["Wie ist das Wetter heute?","الجو عامل إيه النهارده؟"],["Es regnet heute","بتمطر النهارده"],["Im Sommer ist es heiß","في الصيف الجو حار"],["Mir ist kalt","أنا حاسة بالبرد"]]},
{id:19,icon:"👕",t:"الملابس",g:"anziehen = يلبس (فعل منفصل): Ich ziehe die Jacke an. gefallen = يعجب: Das Kleid gefällt mir (الفستان عجبني).",
w:[["das Hemd","القميص",""],["die Hose","البنطلون",""],["das Kleid","الفستان",""],["der Schuh","الجزمة",""],["die Jacke","الجاكيت",""],["die Mütze","الطاقية",""],["der Rock","الجيبة",""],["die Tasche","شنطة اليد",""],["anziehen","يلبس",""],["die Größe","المقاس",""],["passen","يكون المقاس مظبوط",""],["elegant","شيك",""]],
p:[["Was ziehst du heute an?","هتلبسي إيه النهارده؟"],["Das Kleid gefällt mir","الفستان عجبني"],["Welche Größe hast du?","مقاسك كام؟"],["Die Hose passt mir nicht","البنطلون مش مظبوط عليا"]]},
{id:20,icon:"😊",t:"المشاعر والعلاقات",g:"sich freuen = يتبسط: Ich freue mich. vermissen = يفتقد: Ich vermisse dich = وحشتيني.",
w:[["glücklich","مبسوط",""],["traurig","زعلان",""],["müde","تعبان",""],["aufgeregt","متحمس / متوتر",""],["verliebt","واقع في الحب",""],["der Freund","الصاحب / الحبيب",""],["die Freundin","الصاحبة / الحبيبة",""],["die Liebe","الحب",""],["vermissen","يفتقد",""],["lachen","يضحك",""],["weinen","يعيط",""],["das Geschenk","الهدية",""]],
p:[["Ich freue mich sehr","أنا مبسوطة جداً"],["Ich vermisse dich","وحشتيني"],["Warum bist du traurig?","إنتي زعلانة ليه؟"],["Das ist ein schönes Geschenk","دي هدية حلوة"]]}];

// محادثات حقيقية — [الجملة بالألماني, المعنى, المتحدث: 0 الطرف التاني / 1 إنتي]
const DIALOGS=[
{icon:"🙋",t:"التعارف",lines:[["Hallo! Ich heiße Lena. Und du?","أهلاً! أنا لينا. وإنتي؟",0],["Ich heiße Sara. Freut mich!","أنا سارة. اتشرفت!",1],["Woher kommst du, Sara?","إنتي منين يا سارة؟",0],["Ich komme aus Ägypten. Und du?","أنا من مصر. وإنتي؟",1],["Ich komme aus Deutschland, aus Berlin.","أنا من ألمانيا، من برلين.",0],["Berlin ist schön! Ich lerne Deutsch.","برلين حلوة! أنا بتعلم ألماني.",1],["Dein Deutsch ist sehr gut!","ألمانيتك حلوة جداً!",0],["Danke, das ist nett!","شكراً، ده لطيف منك!",1]]},
{icon:"☕",t:"في الكافيه",lines:[["Guten Tag! Was hätten Sie gern?","نهارك سعيد! تحبي تطلبي إيه؟",0],["Ich hätte gern einen Kaffee und ein Wasser.","عايزة قهوة وماية.",1],["Gern. Möchten Sie auch etwas essen?","حاضر. تحبي تاكلي حاجة كمان؟",0],["Ja, ein Stück Kuchen, bitte.","أيوه، قطمة جاتوه لو سمحت.",1],["Kommt sofort!","حالاً!",0],["Die Rechnung, bitte.","الحساب لو سمحت.",1],["Zusammen sind das 8,50 Euro.","كله مع بعضه 8.50 يورو.",0],["Hier, bitte. Stimmt so.","اتفضل. كده تمام (الباقي بقشيش).",1]]},
{icon:"🛍️",t:"في السوق",lines:[["Entschuldigung, was kostet das?","لو سمحت، ده بكام؟",1],["Das kostet zwei Euro.","ده بـ 2 يورو.",0],["Und die Tomaten?","والطماطم؟",1],["Ein Kilo kostet drei Euro.","الكيلو بـ 3 يورو.",0],["Okay, ich nehme ein Kilo, bitte.","تمام، هاخد كيلو لو سمحت.",1],["Sonst noch etwas?","حاجة تانية؟",0],["Nein, danke. Das ist alles.","لأ شكراً، كده كفاية.",1],["Das macht fünf Euro zusammen.","كده كله 5 يورو.",0]]},
{icon:"🗺️",t:"السؤال عن الطريق",lines:[["Entschuldigung, wo ist der Bahnhof?","لو سمحت، محطة القطر فين؟",1],["Der Bahnhof? Gehen Sie geradeaus.","محطة القطر؟ امشي على طول.",0],["Und dann?","وبعدين؟",1],["Dann links an der Ampel.","بعدين شمال عند الإشارة.",0],["Ist es weit von hier?","ده بعيد من هنا؟",1],["Nein, nur fünf Minuten zu Fuß.","لأ، 5 دقايق ماشي بس.",0],["Vielen Dank für Ihre Hilfe!","متشكرة جداً على مساعدتك!",1],["Gern geschehen! Viel Glück!","العفو! حظ سعيد!",0]]},
{icon:"🏥",t:"عند الدكتور",lines:[["Guten Morgen. Was fehlt Ihnen?","صباح الخير. بتعاني من إيه؟",0],["Ich habe Fieber und Kopfschmerzen.","عندي سخونية وصداع.",1],["Seit wann haben Sie das?","بقالك قد إيه كده؟",0],["Seit zwei Tagen.","من يومين.",1],["Haben Sie auch Husten?","عندك كحة كمان؟",0],["Nein, nur Fieber.","لأ، سخونية بس.",1],["Nehmen Sie dieses Medikament dreimal am Tag.","خودي الدوا ده 3 مرات في اليوم.",0],["Danke, Herr Doktor.","شكراً يا دكتور.",1]]},
{icon:"📞",t:"حجز أوضة في فندق",lines:[["Hotel Sonne, guten Tag!","فندق الشمس، نهارك سعيد!",0],["Guten Tag. Ich möchte ein Zimmer reservieren.","نهارك سعيد. عايزة أحجز أوضة.",1],["Für wie viele Nächte?","لعدد كام ليلة؟",0],["Für drei Nächte, bitte.","تلات ليالي لو سمحت.",1],["Einzelzimmer oder Doppelzimmer?","أوضة لفرد ولا لفردين؟",0],["Ein Doppelzimmer, bitte.","أوضة لفردين لو سمحت.",1],["Okay, das kostet 90 Euro pro Nacht.","تمام، دي بـ 90 يورو في الليلة.",0],["Perfekt, vielen Dank!","تمام، متشكرة جداً!",1]]}];

// تصريف الأفعال — {المصدر, المعنى, التصريف في المضارع, مثال}
const VERBS=[
["sein","يكون",["bin","bist","ist","sind","seid","sind"],["Ich bin müde.","أنا تعبانة."]],
["haben","يكون عنده",["habe","hast","hat","haben","habt","haben"],["Ich habe ein Auto.","عندي عربية."]],
["können","يقدر",["kann","kannst","kann","können","könnt","können"],["Ich kann schwimmen.","بقدر أعوم."]],
["müssen","يكون مضطر / لازم",["muss","musst","muss","müssen","müsst","müssen"],["Ich muss lernen.","لازم أذاكر."]],
["wollen","عايز",["will","willst","will","wollen","wollt","wollen"],["Ich will nach Deutschland.","عايزة أروح ألمانيا."]],
["dürfen","يكون مسموح له",["darf","darfst","darf","dürfen","dürft","dürfen"],["Hier darf man nicht rauchen.","ممنوع التدخين هنا."]],
["sollen","المفروض",["soll","sollst","soll","sollen","sollt","sollen"],["Ich soll mehr Wasser trinken.","المفروض أشرب ماية أكتر."]],
["mögen","يحب",["mag","magst","mag","mögen","mögt","mögen"],["Ich mag Kaffee.","بحب القهوة."]],
["kommen","يجي",["komme","kommst","kommt","kommen","kommt","kommen"],["Ich komme aus Ägypten.","أنا من مصر."]],
["gehen","يمشي / يروح",["gehe","gehst","geht","gehen","geht","gehen"],["Ich gehe nach Hause.","رايحة البيت."]],
["machen","يعمل",["mache","machst","macht","machen","macht","machen"],["Was machst du?","بتعملي إيه؟"]],
["lernen","يتعلم / يذاكر",["lerne","lernst","lernt","lernen","lernt","lernen"],["Ich lerne Deutsch.","بتعلم ألماني."]],
["essen","ياكل",["esse","isst","isst","essen","esst","essen"],["Ich esse Brot.","باكل عيش."]],
["fahren","يركب / يسوق",["fahre","fährst","fährt","fahren","fahrt","fahren"],["Ich fahre mit dem Zug.","بركب القطر."]],
["sprechen","يتكلم",["spreche","sprichst","spricht","sprechen","sprecht","sprechen"],["Ich spreche Arabisch.","بتكلم عربي."]],
["arbeiten","يشتغل",["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"],["Ich arbeite heute.","شغالة النهارده."]]];

// قواعد المستوى التاني
const GRAM2=[
["الأفعال المودالية","können (يقدر)، müssen (لازم)، wollen (عايز)، dürfen (مسموح)، sollen (المفروض)، mögen (بيحب). الفعل المودالي بيبقى تاني عنصر في الجملة والفعل الأساسي بيروح الآخر في المصدر: Ich will Deutsch lernen (أنا عايزة أتعلم ألماني)."],
["الأفعال المنفصلة","أفعال زي ankommen و abfahren و anziehen بتتقسم لما تتصرف: الجزء الأول بيروح آخر الجملة. Der Zug kommt um 9 an (القطر بيوصل 9). في المصدر بترجع كلمة واحدة."],
["weil و dass","بعد weil (عشان) و dass (إن) الفعل بيروح آخر الجملة: Ich lerne Deutsch, weil ich in Deutschland arbeiten will (بتعلم ألماني عشان عايزة أشتغل في ألمانيا)."],
["ماضي sein و haben","في الكلام اليومي: war (كان): ich war، du warst، er war، wir waren. و hatte (كان عنده): ich hatte، du hattest. مع باقي الأفعال استخدمي الـ Perfekt: Ich habe gelernt."],
["المقارنة","schnell ← schneller ← am schnellsten. gut ← besser ← am besten. viel ← mehr ← am meisten. وبنستخدم als زي (من) في المقارنة: Ich bin älter als du (أنا أكبر منك)."],
["حروف الجر المهمة","مع Akkusativ دايماً: für, ohne, gegen, durch. مع Dativ دايماً: mit, zu, bei, von, nach, aus. واللي على الحالتين: in, an, auf — سألي (فين؟) Dativ و(لفين؟) Akkusativ: Ich bin in der Schule / Ich gehe in die Schule."]];
