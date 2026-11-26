// مسار "ابدأ من الصفر" — دروس تفاعلية من تحت الصفر
// step: {k:'info', h, b, say?} أو {k:'mcq', q, audio?, show?, opts, ans, fb?}
const ZLESSONS=[
{icon:"🐣",t:"الحروف الألمانية",g:"أسماء الحروف ونطقها",steps:[
{k:'info',h:"الأبجدية الألمانية",b:"الألماني بيستخدم نفس حروف الإنجليزي (26 حرف) <b>+ 4 حروف زيادة</b>: <span class='de'>ä ö ü ß</span><br>وأحلى حاجة: الألماني بيتنطق زي ما بيتكتب تقريباً، فلو اتعلمتي نطق الحروف هتقدري تقري أي كلمة."},
{k:'info',h:"الحروف من A لـ G",say:"A, Be, Ze, De, E, Eff, Ge",b:"<span class='de'>A B C D E F G</span><br>بالألماني: آ، بي، تسي، دي، إي، إف، جي.<br>خدي بالك: <span class='de'>C</span> اسمها (تسي) و<span class='de'>G</span> اسمها (جي)."},
{k:'info',h:"من H لـ N",say:"Ha, I, Jott, Ka, Ell, Emm, Enn",b:"<span class='de'>H I J K L M N</span><br>ها، إي، يوت، كا، إل، إم، إن.<br>حرف <span class='de'>J</span> اسمه (يوت) وبينطق زي الياء: <span class='de'>ja</span> = أيوه."},
{k:'info',h:"من O لـ U",say:"O, Pe, Ku, Err, Ess, Te, U",b:"<span class='de'>O P Q R S T U</span><br>أو، بي، كو، إر، إس، تي، أو.<br>حرف <span class='de'>R</span> بينطق من الحلق، خفيف في أول الكلمة."},
{k:'info',h:"من V لـ Z",say:"Vau, We, Iks, Ypsilon, Zett",b:"<span class='de'>V W X Y Z</span><br>فاو، ڤي، إكس، إبسيلون، تسيت.<br>أهم خدعة: <span class='de'>W</span> بينطق زي V الإنجليزي، و<span class='de'>V</span> غالباً بينطق ف!"},
{k:'info',h:"الحروف الزيادة",say:"Äpfel, Öl, über, Straße",b:"<span class='de'>Ä Ö Ü ß</span><br>ä زي (إيه): <span class='de'>Äpfel</span><br>ö شفايفك مدورة: <span class='de'>Öl</span><br>ü زي (إي) بشفايف مدورة: <span class='de'>über</span><br>ß سين مشددة زي ss: <span class='de'>Straße</span>"},
{k:'mcq',q:"اسمعي واختاري الحرف",audio:"Be",opts:["B","P","D","G"],ans:0,fb:"Be = حرف B. Pe = P وDe = D."},
{k:'mcq',q:"اسمعي واختاري الحرف",audio:"Ess",opts:["S","F","R","Z"],ans:0,fb:"Ess = حرف S."},
{k:'mcq',q:"اسم الحرف ده إيه بالألماني؟",show:"J",opts:["Jott","Ypsilon","Ha","Ka"],ans:0,fb:"J اسمها Jott وبينطق زي الياء."},
{k:'mcq',q:"الألماني فيه كام حرف زيادة عن الإنجليزي؟",opts:["2","3","4","6"],ans:2,fb:"أربعة: ä ö ü ß"}]},
{icon:"🔊",t:"الأصوات الخاصة",g:"ch وsch وsp وst وei",steps:[
{k:'info',h:"صوت sch = ش",say:"Schule, schön, Tschüss",b:"<span class='de'>sch</span> بينطق زي الشين بالظبط:<br><span class='de'>Schule</span> = مدرسة (شوله)<br><span class='de'>schön</span> = حلو (شون)"},
{k:'info',h:"sp و st في أول الكلمة",say:"sprechen, Sport, Stein, Stadt",b:"في أول الكلمة:<br><span class='de'>sp</span> = شب: <span class='de'>sprechen</span> (شبرشن) = يتكلم<br><span class='de'>st</span> = شت: <span class='de'>Stein</span> (شتاين) = حجر"},
{k:'info',h:"صوت ch",say:"ich, nicht, Buch, Nacht",b:"<span class='de'>ch</span> ليها نطقين:<br>بعد i/e: هسهسة خفيفة زي (هـ) مهموسة: <span class='de'>ich</span> = أنا<br>بعد a/o/u: زي الخاء: <span class='de'>Buch</span> = كتاب (بوخ)"},
{k:'info',h:"ei و ie و eu",say:"nein, Liebe, neu",b:"<span class='de'>ei</span> = آي: <span class='de'>nein</span> (ناين) = لأ<br><span class='de'>ie</span> = إي طويلة: <span class='de'>Liebe</span> (ليبه) = حب<br><span class='de'>eu / äu</span> = أوي: <span class='de'>neu</span> (نوي) = جديد"},
{k:'info',h:"حروف سهلة بس غدارّة",say:"wir, Vater, ja, Zeit",b:"<span class='de'>w</span> = ڤ: <span class='de'>wir</span> (ڤير) = إحنا<br><span class='de'>v</span> = ف: <span class='de'>Vater</span> (فاتر) = أب<br><span class='de'>j</span> = ي: <span class='de'>ja</span> (يا) = أيوه<br><span class='de'>z</span> = تس: <span class='de'>Zeit</span> (تسايت) = وقت"},
{k:'mcq',q:"كلمة schön فيها صوت إيه؟",audio:"schön",opts:["ش","س","خ","ج"],ans:0,fb:"sch = ش، فبتتنطق (شون)."},
{k:'mcq',q:"اسمعي: nein — تركيبة ei بتتنطق إزاي؟",audio:"nein",opts:["آي","إي","أوي","أو"],ans:0,fb:"ei = آي، زي ناين."},
{k:'mcq',q:"حرف z بينطق إزاي؟",audio:"Zeit",opts:["تس","ز","ذ","س"],ans:0,fb:"z = تس، Zeit = تسايت."},
{k:'mcq',q:"في كلمة Buch الصوت الأخير ch بيتنطق:",audio:"Buch",opts:["خ","هـ خفيفة","ك","ش"],ans:0,fb:"بعد حرف u بيتنطق خ: بوخ."}]},
{icon:"🧍",t:"الضمائر الشخصية",g:"ich وdu وwir — أول لبنة",steps:[
{k:'info',h:"ضمائر المفرد",say:"ich, du, er, sie, es",b:"<span class='de'>ich</span> = أنا<br><span class='de'>du</span> = إنت / إنتي<br><span class='de'>er</span> = هو<br><span class='de'>sie</span> = هي<br><span class='de'>es</span> = هو/هي للجماد (زي: الطفل <span class='de'>das Kind</span>)"},
{k:'info',h:"ضمائر الجمع",say:"wir, ihr, sie, Sie",b:"<span class='de'>wir</span> = إحنا<br><span class='de'>ihr</span> = إنتو<br><span class='de'>sie</span> = هما<br><span class='de'>Sie</span> (بحرف كبير دايماً) = حضرتك/حضرتكم — صيغة الاحترام الرسمية"},
{k:'info',h:"مثال حي",say:"Ich bin Sara. Du bist Lena. Wir sind Freunde.",b:"<span class='de'>Ich bin Sara.</span> = أنا سارة<br><span class='de'>Du bist Lena.</span> = إنتي لينا<br><span class='de'>Wir sind Freunde.</span> = إحنا أصحاب<br>لاحظي إن الفعل بيتغير مع كل ضمير — ده اللي هنتعلمه في الدرس الجاي."},
{k:'mcq',q:"wir معناها إيه؟",audio:"wir",opts:["إحنا","إنتو","هما","أنا"],ans:0,fb:"wir = إحنا."},
{k:'mcq',q:"إزاي تقولي (هي)؟",opts:["sie","er","es","ich"],ans:0,fb:"sie = هي. وبنفس الكلمة sie = هما — السياق بيوضح."},
{k:'mcq',q:"Sie بحرف S كبير معناها:",opts:["حضرتك (باحترام)","هي","إحنا","إنت"],ans:0,fb:"Sie الرسمية بتتكتب بحرف كبير دايماً، حتى في نص الجملة."},
{k:'mcq',q:"الضمير المناسب لكلمة das Kind (الطفل):",opts:["es","er","sie","du"],ans:0,fb:"das Kind محايد، فبنستخدم es."}]},
{icon:"🗣️",t:"أول جمل ليكي",g:"عرفي بنفسك في 5 جمل",steps:[
{k:'info',h:"اسمك",say:"Ich heiße Sara.",b:"<span class='de'>Ich heiße Sara.</span> = اسمي سارة<br>حطي اسمك مكان سارة. heißen = يتسمى."},
{k:'info',h:"حالتك / شغلتك",say:"Ich bin Studentin.",b:"<span class='de'>Ich bin Studentin.</span> = أنا طالبة<br><span class='de'>Ich bin müde.</span> = أنا تعبانة<br>بعد bin تحطي صفة أو مهنة من غير artikel."},
{k:'info',h:"بلدك",say:"Ich komme aus Ägypten.",b:"<span class='de'>Ich komme aus Ägypten.</span> = أنا من مصر<br>kommen aus + بلد = جي من..."},
{k:'info',h:"ساكنة فين",say:"Ich wohne in Kairo.",b:"<span class='de'>Ich wohne in Kairo.</span> = أنا ساكنة في القاهرة<br>wohnen in + مدينة = ساكن في..."},
{k:'info',h:"إنتي بتعملي إيه دلوقتي 😉",say:"Ich lerne Deutsch.",b:"<span class='de'>Ich lerne Deutsch.</span> = أنا بتعلم ألماني<br>ودي حقيقة! قوليها بفخر."},
{k:'mcq',q:"إزاي تقولي (أنا من مصر)؟",opts:["Ich komme aus Ägypten.","Ich wohne in Ägypten.","Ich heiße Ägypten."],ans:0,fb:"kommen aus + بلد."},
{k:'mcq',q:"Ich bin Studentin معناها:",audio:"Ich bin Studentin.",opts:["أنا طالبة","أنا مدرسة","أنا تعبانة"],ans:0,fb:"Studentin = طالبة جامعة."},
{k:'mcq',q:"إزاي تقولي (أنا بتعلم ألماني)؟",opts:["Ich lerne Deutsch.","Ich spreche Deutsch.","Ich bin Deutsch."],ans:0,fb:"lernen = يتعلم، sprechen = يتكلم."}]},
{icon:"🎁",t:"der die das",g:"سر الـ artikel الألماني",steps:[
{k:'info',h:"ليه تلات أدوات؟",b:"الإنجليزي عنده the بس، لكن الألماني عنده 3:<br><span class='de'>der</span> للمذكر، <span class='de'>die</span> للمؤنث، <span class='de'>das</span> للمحايد.<br>مفيش قاعدة منطقية دايماً — السر إنك <b>تحفظي الكلمة مع الأداة بتاعتها</b> من أول يوم."},
{k:'info',h:"der — المذكر",say:"der Vater, der Tisch, der Apfel",b:"الرجالة والمهن المذكرة وأيام الأسبوع والشهور:<br><span class='de'>der Vater</span> الأب، <span class='de'>der Montag</span> الإثنين، <span class='de'>der Tisch</span> الترابيزة"},
{k:'info',h:"die — المؤنث",say:"die Mutter, die Lampe, die Küche",b:"الستات والمهن المؤنثة وأغلب الكلمات المنتهية بـ -e:<br><span class='de'>die Mutter</span> الأم، <span class='de'>die Lampe</span> اللمبة، <span class='de'>die Küche</span> المطبخ"},
{k:'info',h:"das — المحايد",say:"das Haus, das Kind, das Wasser",b:"الجماد غالباً والكلمات المنتهية بـ -chen:<br><span class='de'>das Haus</span> البيت، <span class='de'>das Kind</span> الطفل، <span class='de'>das Wasser</span> المية"},
{k:'info',h:"والجمع؟ سهل!",say:"die Tische, die Lampen, die Häuser",b:"الجمع كله <span class='de'>die</span> مهما كان المفرد:<br>der Tisch ← die Tische<br>das Haus ← die Häuser"},
{k:'mcq',q:"___ Mutter",opts:["die","der","das"],ans:0,fb:"الأم مؤنث: die Mutter."},
{k:'mcq',q:"___ Haus",opts:["das","der","die"],ans:0,fb:"البيت محايد: das Haus."},
{k:'mcq',q:"___ Tisch",opts:["der","die","das"],ans:0,fb:"الترابيزة مذكر: der Tisch."},
{k:'mcq',q:"جمع der Apfel هو die Äpfel — الجمع في الألماني دايماً:",opts:["die","der","das"],ans:0,fb:"الجمع كله die."}]},
{icon:"🔢",t:"الأرقام بالصوت",g:"من 1 لـ 20 بنطق صح",steps:[
{k:'info',h:"من 1 لـ 5",say:"eins, zwei, drei, vier, fünf",b:"<span class='de'>eins</span> آينس = 1<br><span class='de'>zwei</span> تسڤاي = 2<br><span class='de'>drei</span> دراي = 3<br><span class='de'>vier</span> فير = 4<br><span class='de'>fünf</span> فونف = 5"},
{k:'info',h:"من 6 لـ 10",say:"sechs, sieben, acht, neun, zehn",b:"<span class='de'>sechs</span> زيكس = 6<br><span class='de'>sieben</span> زيبن = 7<br><span class='de'>acht</span> اخت = 8<br><span class='de'>neun</span> نوين = 9<br><span class='de'>zehn</span> تسين = 10"},
{k:'info',h:"من 11 لـ 20",say:"elf, zwölf, dreizehn, zwanzig",b:"<span class='de'>elf</span> = 11، <span class='de'>zwölf</span> = 12 (احفظيهم لوحدهم)<br>من 13: الرقم + zehn: <span class='de'>dreizehn</span> = 13 (تلاتة-عشر)<br><span class='de'>zwanzig</span> = 20"},
{k:'mcq',q:"اسمعي واختاري الرقم",audio:"sieben",opts:["7","9","5","10"],ans:0,fb:"sieben = 7."},
{k:'mcq',q:"اسمعي واختاري الرقم",audio:"zwölf",opts:["12","2","20","11"],ans:0,fb:"zwölf = 12."},
{k:'mcq',q:"إزاي تقولي (تلاتة)؟",opts:["drei","dreißig","dreizehn","vier"],ans:0,fb:"drei = 3، dreizehn = 13."},
{k:'mcq',q:"اسمعي: Das kostet fünf Euro. الكلمة دي بكام؟",audio:"Das kostet fünf Euro.",opts:["5 يورو","15 يورو","50 يورو","2 يورو"],ans:0,fb:"fünf = 5."}]},
{icon:"💬",t:"أول محادثة",g:"Hallo! Wie heißt du?",steps:[
{k:'info',h:"السلام",say:"Hallo! Wie heißt du?",b:"أول جملتين في أي تعارف:<br><span class='de'>Hallo!</span> = أهلاً!<br><span class='de'>Wie heißt du?</span> = اسمك إيه؟"},
{k:'info',h:"الرد",say:"Ich heiße Sara. Und du?",b:"<span class='de'>Ich heiße Sara.</span> = اسمي سارة<br><span class='de'>Und du?</span> = وإنتي؟"},
{k:'info',h:"منين؟",say:"Woher kommst du? Ich komme aus Ägypten.",b:"<span class='de'>Woher kommst du?</span> = إنتي منين؟<br><span class='de'>Ich komme aus Ägypten.</span> = أنا من مصر"},
{k:'info',h:"ختام لطيف",say:"Freut mich! Tschüss!",b:"<span class='de'>Freut mich!</span> = اتشرفت!<br><span class='de'>Tschüss!</span> = مع السلامة!<br>وبكده إنتي عملتي أول محادثة ألمانية كاملة 🎉"},
{k:'mcq',q:"حد قالك: Wie heißt du؟ — تردي بإيه؟",audio:"Wie heißt du?",opts:["Ich heiße Sara.","Ich komme aus Ägypten.","Mir geht es gut."],ans:0,fb:"السؤال عن الاسم، فالرد: Ich heiße..."},
{k:'mcq',q:"حد قالك: Woher kommst du؟ — تردي بإيه؟",audio:"Woher kommst du?",opts:["Ich komme aus Ägypten.","Ich heiße Sara.","Freut mich!"],ans:0,fb:"Woher = منين، فالرد: Ich komme aus..."},
{k:'mcq',q:"Freut mich! معناها:",audio:"Freut mich!",opts:["اتشرفت!","مع السلامة!","صباح الخير!"],ans:0,fb:"بتتقال عند التعارف الأول."}]}];

// دروس الفيديو — شرائح متحركة + تعليق صوتي مسجل
// slide: {h, b, de?, n:[[صوت ar/de, النص]...]}
const VLESSONS=[
{icon:"🔤",t:"الأبجدية والأصوات",d:"أسماء الحروف والحروف الزيادة بنطق صح",slides:[
{h:"أهلاً بيكي في أول درس 🎬",b:"هنتعلم النهارده الحروف الألمانية وأسماءها. الألماني بيتنطق زي ما بيتكتب تقريباً، فده أهم درس في البداية.",n:[["ar","أهلاً بيكي في أول درس. النهارده هنتعلم الحروف الألمانية ونطقها الصحيح."]]},
{h:"من A لـ G",de:"A B C D E F G",b:"آ، بي، تسي، دي، إي، إف، جي",n:[["ar","اسمعي أسماء الحروف من A ليه G:"],["de","A, Be, Ze, De, E, Eff, Ge"],["ar","لاحظي إن C اسمها تسي، وG اسمها جي."]]},
{h:"من H لـ N",de:"H I J K L M N",b:"ها، إي، يوت، كا، إل، إم، إن",n:[["ar","ومن H ليه N:"],["de","Ha, I, Jott, Ka, Ell, Emm, Enn"],["ar","حرف J اسمه يوت وبيتنطق زي الياء."]]},
{h:"من O لـ U",de:"O P Q R S T U",b:"أو، بي، كو، إر، إس، تي، أو",n:[["ar","ومن O ليه U:"],["de","O, Pe, Ku, Err, Ess, Te, U"]]},
{h:"من V لـ Z",de:"V W X Y Z",b:"فاو، ڤي، إكس، إبسيلون، تسيت",n:[["ar","وآخر مجموعة:"],["de","Vau, We, Iks, Ypsilon, Zett"],["ar","افتكري: W بتتنطق ڤي، وV بتتنطق ف غالباً."]]},
{h:"الحروف الزيادة",de:"Ä Ö Ü ß",b:"مش موجودة في الإنجليزي — اسمعيها في كلمات",n:[["ar","الألماني فيه أربع حروف زيادة. اسمعيهم جوه كلمات:"],["de","Äpfel. Öl. über. Straße."],["ar","ä زي إيه، ö بشفايف مدورة، ü زي إي بشفايف مدورة، وß سين مشددة."]]},
{h:"برافو! 🎉",b:"خلصتي أول درس. راجعي الحروف من أدوات ← النطق والحروف، وجربي تقري أي كلمة ألمانية تقابلك.",n:[["ar","برافو، خلصتي أول درس. راجعي الحروف لوحدك وجربي تنطقيها بصوت عالي."]]}]},
{icon:"🧍",t:"الضمائر وفعل sein",d:"أهم فعل في اللغة مع كل الضمائر",slides:[
{h:"الضمائر المفردة",de:"ich du er sie es",b:"أنا، إنتي، هو، هي، الجماد",n:[["ar","أول حاجة الضمائر المفردة. اسمعي:"],["de","ich. du. er. sie. es."],["ar","ich يعني أنا، du يعني إنتي، er هو، sie هي، وes للجماد."]]},
{h:"ضمائر الجمع",de:"wir ihr sie Sie",b:"إحنا، إنتو، هما، حضرتك",n:[["ar","ودلوقتي الجمع:"],["de","wir. ihr. sie. Sie."],["ar","wir إحنا، ihr إنتو، sie هما. وSie بحرف كبير يعني حضرتك باحترام."]]},
{h:"فعل sein — يكون",de:"ich bin, du bist, er ist",b:"أهم فعل في اللغة كلها — وشاذ، لازم يتحفظ",n:[["ar","فعل sein يعني يكون، وده أهم فعل في اللغة. تصريفه شاذ فلازم يتحفظ:"],["de","ich bin. du bist. er ist. sie ist."],["ar","ich bin أنا أكون، du bist إنتي بتكوني، er ist هو يكون."]]},
{h:"sein مع الجمع",de:"wir sind, ihr seid, sie sind",b:"إحنا نكون، إنتو تكونوا، هما يكونوا",n:[["ar","ومع الجمع:"],["de","wir sind. ihr seid. sie sind."],["ar","wir sind إحنا بنكون، ihr seid إنتو، sie sind هما."]]},
{h:"أمثلة من الحياة",de:"Ich bin müde. Du bist nett. Wir sind Freunde.",b:"أنا تعبانة. إنتي لطيفة. إحنا أصحاب.",n:[["ar","اسمعي الأمثلة دي وكرري ورايا:"],["de","Ich bin müde. Du bist nett. Wir sind Freunde."],["ar","أنا تعبانة. إنتي لطيفة. إحنا أصحاب."]]},
{h:"خلصتي! ✅",b:"جربي تصرفي sein مع كل ضمير بصوت عالي. هتلاقي التصريفات في أدوات ← تصريف الأفعال.",n:[["ar","جميل جداً. جربي تصرفي sein مع كل ضمير بصوت عالي. بالتوفيق!"]]}]},
{icon:"👋",t:"التحيات والتعارف",d:"أول محادثة ليكي بالألماني",slides:[
{h:"التحيات",de:"Hallo! Guten Morgen! Guten Tag!",b:"أهلاً، صباح الخير، نهارك سعيد",n:[["ar","أهلاً بيكي في درس التحيات والتعارف. اسمعي:"],["de","Hallo! Guten Morgen! Guten Tag! Guten Abend!"],["ar","Hallo أهلاً، Guten Morgen صباح الخير، Guten Tag نهارك سعيد، Guten Abend مساء الخير."]]},
{h:"اسمك إيه؟",de:"Wie heißt du? Ich heiße Sara.",b:"اسمك إيه؟ — اسمي سارة",n:[["ar","أول سؤال في أي تعارف:"],["de","Wie heißt du?"],["ar","يعني اسمك إيه؟ والرد:"],["de","Ich heiße Sara. Und du?"],["ar","اسمي سارة. وإنتي؟"]]},
{h:"إنتي منين؟",de:"Woher kommst du? Ich komme aus Ägypten.",b:"إنتي منين؟ — أنا من مصر",n:[["ar","تاني سؤال مهم:"],["de","Woher kommst du?"],["ar","يعني إنتي منين؟ والرد:"],["de","Ich komme aus Ägypten."],["ar","أنا من مصر."]]},
{h:"اتشرفت!",de:"Freut mich! Tschüss! Bis bald!",b:"اتشرفت، مع السلامة، أشوفك قريب",n:[["ar","وفي آخر التعارف بنقول:"],["de","Freut mich!"],["ar","اتشرفت. ولما بنسيب بعض:"],["de","Tschüss! Bis bald!"],["ar","مع السلامة، أشوفك قريب."]]},
{h:"محادثة كاملة 🎭",de:"Hallo! Ich heiße Lena. Woher kommst du?",b:"اسمعي المحادثة كاملة وبعدين جربيها بنفسك",n:[["ar","اسمعي محادثة كاملة:"],["de","Hallo! Ich heiße Lena. Und du?"],["de","Ich heiße Sara. Freut mich!"],["de","Woher kommst du, Sara?"],["de","Ich komme aus Ägypten."],["ar","برافو! دي أول محادثة كاملة. جربيها بصوت عالي."]]}]},
{icon:"🎁",t:"der die das",d:"إزاي تعرفي جنس الكلمة وتحفظيه",slides:[
{h:"ليه 3 أدوات؟",b:"الألماني بيقسم الأسماء لمذكر ومؤنث ومحايد. مفيش قاعدة ثابتة دايماً، فالسر: احفظي الكلمة مع الأداة من أول يوم.",n:[["ar","الألماني عنده تلات أدوات: der وdie وdas. والسر إنك تحفظي كل كلمة مع الأداة بتاعتها من أول يوم."]]},
{h:"der — المذكر",de:"der Vater, der Tisch, der Montag",b:"الرجالة، أيام الأسبوع، الشهور",n:[["ar","der للمذكر، زي:"],["de","der Vater. der Tisch. der Montag."],["ar","الأب، الترابيزة، يوم الإثنين."]]},
{h:"die — المؤنث",de:"die Mutter, die Lampe, die Küche",b:"الستات، وأغلب الكلمات المنتهية بـ e",n:[["ar","die للمؤنث، زي:"],["de","die Mutter. die Lampe. die Küche."],["ar","الأم، اللمبة، المطبخ. خدي بالك: أغلب الكلمات المنتهية بحرف e مؤنثة."]]},
{h:"das — المحايد",de:"das Haus, das Kind, das Wasser",b:"الجماد غالباً والكلمات المنتهية بـ chen",n:[["ar","das للمحايد، زي:"],["de","das Haus. das Kind. das Wasser."],["ar","البيت، الطفل، المية."]]},
{h:"الجمع أسهل حاجة",de:"der Tisch ← die Tische",b:"الجمع كله die مهما كان المفرد",n:[["ar","وأحلى خبر: الجمع كله die مهما كان المفرد."],["de","der Tisch, die Tische. das Haus, die Häuser."]]},
{h:"نصيحة الدرس 💡",b:"من النهارده: أي كلمة جديدة تحفظيها، احفظيها بالأداة. مش Haus، لكن das Haus.",n:[["ar","نصيحة الدرس: أي كلمة جديدة تحفظيها بالأداة بتاعتها. وكده der die das مش هتقف في طريقك أبداً."]]}]},
{icon:"🔢",t:"الأرقام والساعة",d:"عدّي وسألي عن الوقت بثقة",slides:[
{h:"من 1 لـ 10",de:"eins zwei drei vier fünf sechs sieben acht neun zehn",b:"اسمعي ورددي",n:[["ar","هنعد من واحد لعشرة. رددي ورايا:"],["de","eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn."]]},
{h:"من 11 لـ 20",de:"elf zwölf dreizehn zwanzig",b:"11 و12 لازم يتحفظوا — الباقي رقم + zehn",n:[["ar","من حداشر لعشرين:"],["de","elf. zwölf. dreizehn. vierzehn. zwanzig."],["ar","elf وzwölf احفظيهم لوحدهم. من تلتاشر: الرقم زايد تسين. dreizehn يعني تلاتة عشر."]]},
{h:"العشرات",de:"zwanzig dreißig vierzig fünfzig",b:"20 30 40 50 — لاحظي dreißig بالـ ß",n:[["ar","والعشرات:"],["de","zwanzig. dreißig. vierzig. fünfzig."],["ar","عشرين، تلاتين، أربعين، خمسين."]]},
{h:"الساعة كام؟",de:"Wie spät ist es? Es ist drei Uhr.",b:"السؤال عن الوقت والرد",n:[["ar","عشان تسألي عن الوقت:"],["de","Wie spät ist es?"],["ar","الساعة كام؟ والرد:"],["de","Es ist drei Uhr."],["ar","الساعة تلاتة."]]},
{h:"ونص وربع",de:"Es ist halb vier. Es ist Viertel nach drei.",b:"خدعة: halb vier يعني تلاتة ونص مش أربعة ونص!",n:[["ar","أشهر خدعة في الألماني:"],["de","Es ist halb vier."],["ar","halb vier معناها تلاتة ونص، مش أربعة ونص! لأن الألماني بيقول نص الساعة الرابعة."]]}]},
{icon:"🧱",t:"ترتيب الجملة",d:"القاعدة الذهبية: الفعل تاني عنصر",slides:[
{h:"القاعدة الذهبية",b:"في الجملة الألمانية العادية، الفعل بيبقى دايماً <b>تاني عنصر</b>. دي أهم قاعدة في اللغة كلها.",n:[["ar","القاعدة الذهبية في الألماني: الفعل دايماً تاني عنصر في الجملة. دي أهم قاعدة هتتعلميها."]]},
{h:"مثال",de:"Ich lerne heute Deutsch.",b:"أنا بتعلم ألماني النهارده — الفعل lerne تاني كلمة",n:[["ar","مثال:"],["de","Ich lerne heute Deutsch."],["ar","أنا بتعلم ألماني النهارده. الفعل lerne جه تاني عنصر."]]},
{h:"نفس الجملة بطريقة تانية",de:"Heute lerne ich Deutsch.",b:"النهارده بتعلم ألماني — الفعل لسه تاني عنصر حتى لو الجملة بدأت بالزمن",n:[["ar","ولو بدأنا الجملة بالزمن:"],["de","Heute lerne ich Deutsch."],["ar","الفعل لسه تاني عنصر! والفاعل راح بعده."]]},
{h:"السؤال",de:"Lernst du Deutsch? Wo wohnst du?",b:"سؤال أيوه/لأ: الفعل أول الجملة. سؤال بكلمة سؤال: الكلمة الأول والفعل تاني",n:[["ar","في سؤال أيوه ولا لأ، الفعل بيبقى أول الجملة:"],["de","Lernst du Deutsch?"],["ar","بتتعلمي ألماني؟ ولو فيه كلمة سؤال زي Wo:"],["de","Wo wohnst du?"],["ar","ساكنة فين؟"]]},
{h:"النفي",de:"Ich komme nicht. Ich habe kein Auto.",b:"nicht للأفعال والصفات — kein للأسماء",n:[["ar","وللنفي بنستخدم nicht مع الأفعال والصفات:"],["de","Ich komme nicht."],["ar","أنا مش جاية. وkein مع الأسماء:"],["de","Ich habe kein Auto."],["ar","ماعنديش عربية."]]},
{h:"تمرين ذهني 🧠",b:"رتبي دي لوحدك: Deutsch / ich / lerne — الصح: Ich lerne Deutsch. الفعل في مكانه الصح دايماً.",n:[["ar","خلصتي! افتكري القاعدة الذهبية: الفعل تاني عنصر، وباقي الجملة بيتظبط لوحده."]]}]}];
