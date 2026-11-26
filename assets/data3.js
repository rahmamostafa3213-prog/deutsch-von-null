// وحدات A2 المكملة — [de, ar, hint]
const UNITS3=[
{id:21,icon:"🛒",t:"السوبرماركت",g:"an der Kasse = عند الكاشير. die Packung = العبوة. في ألمانيا بترجّعي الزجاجات الفاضية وبتاخدي فلوسها: اسمه der Pfand.",
w:[["der Supermarkt","السوبرماركت","m"],["der Einkauf","المشتريات","m"],["das Gemüse","الخضار","n"],["das Obst","الفاكهة","n"],["die Kartoffel","البطاطس","f"],["die Tomate","الطماطم","f"],["der Joghurt","الزبادي","m"],["der Saft","العصير","m"],["das Salz","الملح","n"],["der Zucker","السكر","m"],["die Flasche","الزجاجة","f"],["der Liter","اللتر","m"],["das Kilo","الكيلو","n"],["frisch","طازة",""]],
p:[["Wo finde ich die Milch?","فين اللبن؟"],["Ein Kilo Tomaten, bitte","كيلو طماطم لو سمحت"],["Zahlen Sie bar oder mit Karte?","كاش ولا كارت؟"]]},
{id:22,icon:"🏛️",t:"البنك والبريد والمصالح",g:"der Termin = ميعاد رسمي. في المصالح الألمانية غالباً لازم ميعاد مسبق. unterschreiben = يمضي.",
w:[["die Bank","البنك","f"],["das Konto","الحساب البنكي","n"],["die Post","البريد","f"],["der Brief","الخطاب","m"],["das Paket","الطرد","n"],["das Amt","المصلحة الحكومية","n"],["das Formular","الاستمارة","n"],["der Ausweis","البطاقة الشخصية","m"],["die Adresse","العنوان","f"],["unterschreiben","يمضي",""],["abholen","يستلم",""],["die Versicherung","التأمين","f"],["der Schein","ورقة الفلوس","m"],["die Münze","العملة المعدنية","f"]],
p:[["Ich möchte ein Konto eröffnen","عايزة أفتح حساب بنكي"],["Ich möchte das Paket abholen","عايزة أستلم الطرد"],["Wo muss ich unterschreiben?","أمضي فين؟"]]},
{id:23,icon:"📱",t:"الموبايل والتكنولوجيا",g:"anrufen فعل منفصل: Ich rufe dich an = هكلمك. aufladen = يشحن: Ich lade mein Handy auf.",
w:[["das Handy","الموبايل","n"],["das Internet","النت","n"],["das Passwort","الباسورد","n"],["die Nachricht","الرسالة","f"],["anrufen","يكلم في التليفون",""],["schicken","يبعت",""],["das WLAN","الواي فاي","n"],["der Akku","البطارية","m"],["der Bildschirm","الشاشة","m"],["die App","التطبيق","f"],["aufladen","يشحن",""],["herunterladen","ينزّل",""],["der Drucker","الطابعة","m"],["kaputt","بايظ",""]],
p:[["Mein Handy ist kaputt","موبايلي بايظ"],["Ich rufe dich später an","هكلمك بعدين"],["Wie ist das WLAN-Passwort?","باسورد الواي فاي إيه؟"]]},
{id:24,icon:"🧳",t:"الإجازة والسفر",g:"in den Urlaub fahren = يروح أجازة. sich erholen = يستجم. die Sehenswürdigkeit = المزارة السياحية.",
w:[["der Urlaub","الأجازة","m"],["das Meer","البحر","n"],["der Strand","الشط","m"],["das Hotel","الفندق","n"],["die Sehenswürdigkeit","المزارة السياحية","f"],["das Souvenir","السوفنير","n"],["die Landschaft","المناظر الطبيعية","f"],["wandern","يمشي في الجبال",""],["sich entspannen","يستريح ويروّق",""],["der Pass","الباسبور","m"],["die Grenze","الحدود","f"],["die Reise","الرحلة","f"],["buchen","يحجز",""],["der Ausflug","المشوار","m"]],
p:[["Wir fahren in den Urlaub","رايحين أجازة"],["Ich habe das Hotel gebucht","حجزت الفندق"],["Das Meer ist wunderschön","البحر تحفة"]]},
{id:25,icon:"👷",t:"المهن",g:"المهنة المذكرة بـ der والمؤنثة بـ die + نهاية -in: der Lehrer ← die Lehrerin. وبعد sein بنقول المهنة من غير artikel: Ich bin Lehrerin.",
w:[["der Lehrer / die Lehrerin","المدرس / المدرسة",""],["der Ingenieur / die Ingenieurin","المهندس / المهندسة",""],["der Koch / die Köchin","الشيف / الشيف ست",""],["der Verkäufer / die Verkäuferin","البياع / البياعة",""],["der Krankenpfleger / die Krankenschwester","الممرض / الممرضة",""],["der Friseur / die Friseurin","الكوافير",""],["der Polizist / die Polizistin","البوليسي / البوليسية",""],["der Fahrer / die Fahrerin","السواق / السواقة",""],["der Student / die Studentin","الطالب الجامعي / الطالبة",""],["der Beruf","المهنة","m"],["arbeitslos","مش شغال",""],["die Stelle","الوظيفة","f"]],
p:[["Ich bin Lehrerin von Beruf","شغلتي مدرسة"],["Er arbeitet als Ingenieur","هو شغال مهندس"],["Sie sucht eine neue Stelle","بتدور على وظيفة جديدة"]]},
{id:26,icon:"🛋️",t:"الأثاث والشقة",g:"die Miete = الإيجار. mieten = يستأجر (أنا اللي هسكن)، vermieten = يأجّر (صاحب الشقة). der Vermieter = صاحب العقار.",
w:[["die Miete","الإيجار","f"],["mieten","يستأجر",""],["vermieten","يأجّر",""],["der Vermieter","صاحب الشقة","m"],["das Sofa","الكنبة","n"],["der Schrank","الدولاب","m"],["der Teppich","السجادة","m"],["der Spiegel","المراية","m"],["die Waschmaschine","الغسالة","f"],["der Kühlschrank","التلاجة","m"],["der Herd","البوتاجاز","m"],["der Balkon","البلكونة","m"],["die Treppe","السلم","f"],["der Garten","الجنينة","m"]],
p:[["Ich suche eine Wohnung","بدور على شقة"],["Wie hoch ist die Miete?","الإيجار كام؟"],["Der Kühlschrank ist kaputt","التلاجة بايظة"]]},
{id:27,icon:"🌅",t:"الروتين اليومي",g:"الأفعال الراجعة لنفسها بتاخد sich: Ich ziehe mich an = بلبس. وaufstehen فعل منفصل: Ich stehe um 7 auf = بصحى الساعة 7.",
w:[["aufstehen","يصحى",""],["sich anziehen","يلبس",""],["duschen","يستحمى",""],["sich die Zähne putzen","يغسل سنانه",""],["frühstücken","يفطر",""],["der Wecker","المنبه","m"],["der Morgen","الصبح","m"],["der Mittag","الضهر","m"],["der Abend","الليل","m"],["kochen","يطبخ",""],["putzen","ينضف",""],["fernsehen","يتفرج على التلفزيون",""],["einschlafen","يغفى",""],["der Alltag","الروتين اليومي","m"]],
p:[["Ich stehe um sieben Uhr auf","بصحى الساعة 7"],["Ich dusche morgens","بستحمى الصبح"],["Abends sehe ich fern","بالليل بتفرج على التلفزيون"]]},
{id:28,icon:"🎂",t:"المناسبات والأعياد",g:"Alles Gute zum Geburtstag = كل سنة وإنتي طيبة. einladen فعل منفصل: Ich lade dich ein = هعزمك. gratulieren + Dativ: Ich gratuliere dir = بباركلك.",
w:[["der Geburtstag","عيد الميلاد","m"],["die Einladung","العزومة","f"],["einladen","يعزم",""],["die Überraschung","المفاجأة","f"],["feiern","يحتفل",""],["die Kerze","الشمعة","f"],["die Hochzeit","الفرح","f"],["das Fest","المناسبة الكبيرة","n"],["der Feiertag","الأجازة الرسمية","m"],["Weihnachten","الكريسماس","n"],["gratulieren","يبارك",""],["anstoßen","يشرب نخب",""],["die Dekoration","الزينة","f"],["der Gast","الضيف","m"]],
p:[["Alles Gute zum Geburtstag!","كل سنة وإنتي طيبة!"],["Ich lade dich zu meiner Party ein","هعزمك على حفلتي"],["Wir feiern heute Abend","بنحتفل النهارده بالليل"]]}];

// محادثات جديدة — [الجملة بالألماني, المعنى, المتحدث: 0 الطرف التاني / 1 إنتي]
const DIALOGS3=[
{icon:"💼",t:"مقابلة شغل",lines:[["Guten Tag! Setzen Sie sich, bitte.","نهارك سعيد! اتفضلي اقعدي.",0],["Danke schön. Ich freue mich über die Einladung.","متشكرة جداً. مبسوطة بالعزومة.",1],["Erzählen Sie mir von sich. Was machen Sie beruflich?","احكيلي عن نفسك. بتشتغلي إيه؟",0],["Ich bin Lehrerin und lerne jetzt Deutsch.","أنا مدرسة وبتعلم ألماني دلوقتي.",1],["Warum möchten Sie bei uns arbeiten?","عايزة تشتغلي عندنا ليه؟",0],["Ich liebe die Arbeit mit Kindern und Menschen.","بحب الشغل مع الأطفال والناس.",1],["Sehr gut. Wann können Sie anfangen?","جميل جداً. تقدري تبدأي إمتى؟",0],["Ich kann ab nächster Woche anfangen.","أقدر أبدأ من الأسبوع الجاي.",1]]},
{icon:"🏠",t:"شقة للإيجار",lines:[["Hallo, Müller hier.","أهلاً، معاك مستر مولر.",0],["Guten Tag. Ich rufe wegen der Wohnung an.","نهارك سعيد. بكلمك عشان الشقة.",1],["Ja, die Wohnung ist noch frei.","أيوه، الشقة لسه فاضية.",0],["Wie hoch ist die Miete, bitte?","الإيجار كام لو سمحت؟",1],["650 Euro warm im Monat.","650 يورو في الشهر شامل المرافق.",0],["Das klingt gut. Kann ich die Wohnung besichtigen?","ده كويس. ينفع أعاين الشقة؟",1],["Gern. Geht es morgen um 15 Uhr?","حاضر. ينفع بكرة الساعة 3 الضهر؟",0],["Ja, das passt mir. Vielen Dank!","أيوه، يناسبني. متشكرة جداً!",1]]},
{icon:"🚆",t:"في محطة القطر",lines:[["Entschuldigung, ein Ticket nach München, bitte.","لو سمحت، تذكرة لميونخ.",1],["Einfach oder hin und zurück?","رايح بس ولا رايح جاي؟",0],["Hin und zurück, bitte.","رايح جاي لو سمحت.",1],["Das kostet 58 Euro. Gleis 4.","كده 58 يورو. رصيف 4.",0],["Wann fährt der nächste Zug ab?","أقرب قطر هيتحرك إمتى؟",1],["In zwanzig Minuten, aber er hat zehn Minuten Verspätung.","بعد 20 دقيقة، بس متأخر 10 دقايق.",0],["Ach so. Bleibt es bei Gleis 4?","أها. الرصيف 4 هيفضل زي ما هو؟",1],["Ja, Gleis 4 bleibt. Gute Fahrt!","أيوه، رصيف 4. رحلة سعيدة!",0]]}];

// تصريفات أفعال إضافية
const VERBS3=[
["nehmen","ياخد",["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],["Ich nehme den Bus.","بركب الأتوبيس."]],
["geben","يدي",["gebe","gibst","gibt","geben","gebt","geben"],["Geben Sie mir bitte die Rechnung.","اديني الحساب لو سمحت."]],
["sehen","يشوف",["sehe","siehst","sieht","sehen","seht","sehen"],["Ich sehe den Zug.","شايفة القطر."]],
["wissen","يعرف",["weiß","weißt","weiß","wissen","wisst","wissen"],["Ich weiß es nicht.","مش عارفة."]],
["schlafen","ينام",["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"],["Ich schlafe acht Stunden.","بنام 8 ساعات."]],
["finden","يلاقي",["finde","findest","findet","finden","findet","finden"],["Ich finde Deutsch schön.","شايفة الألماني حلو."]],
["bleiben","يفضل / يقعد",["bleibe","bleibst","bleibt","bleiben","bleibt","bleiben"],["Ich bleibe heute zu Hause.","هفضل في البيت النهارده."]],
["verstehen","يفهم",["verstehe","verstehst","versteht","verstehen","versteht","verstehen"],["Verstehst du mich?","فاهمني؟"]]];

// قواعد إضافية
const GRAM3=[
["الأفعال الراجعة لنفسها (Reflexiv)","أفعال زي sich freuen (يتبسط) و sich anziehen (يلبس) بتاخد ضمير راجع: ich ← mich، du ← dich، er/sie ← sich. مثال: Ich freue mich (أنا مبسوطة)، Ziehst du dich an? (بتلبسي؟). الضمير الراجع بيبقى بعد الفعل مباشرة."],
["صيغة الأمر (Imperativ)","للأمر مع حد واحد: جذر الفعل بس: Komm! (تعالى!)، Sprich! (اتكلمي!). وبشكل مهذب مع Sie: Kommen Sie! (اتفضلي!). وللجمع: Kommt! (تعالوا!)."]];

DIALOGS.push(...DIALOGS3);
VERBS.push(...VERBS3);
GRAM2.push(...GRAM3);
