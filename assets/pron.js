// Rule-based pronunciation notes (guidance, not a dictionary). Trilingual: ar / en / de.
(function(){
var LG=function(){return(typeof LANG!=='undefined'&&(LANG==='en'||LANG==='de'))?LANG:'ar'};
var V='aeiouäöüy';
// rule: [key, test(word)->fragment|null, {ar,en,de}]
var R=[];
function r(k,f,ar,en,de,extra){R.push({k:k,f:f,t:{ar:ar,en:en,de:de},x:extra||{}})}
function m(re){return function(w){var x=re.exec(w);return x?x[0]:null}}
var SOFTPRE='eiäöülnr';
var LOANV={vase:1,video:1,klavier:1,november:1,universität:1,privat:1,vitamin:1,visum:1,vokal:1,service:1,interview:1,variante:1,vulkan:1,villa:1,virus:1,violine:1,veranda:1,vegetarier:1,vegan:1,vanille:1,souvenir:1,reservierung:1,reservieren:1,servieren:1,vers:0};
var EXC={
 ingenieur:{ar:'<b class="w">Ingenieur</b> بتتنطق «إنجينيور»: الـ g جيم فرنساوي ناعمة، وeu بتتنطق زي ö (مش أوي).',en:'<b class="w">Ingenieur</b>: the g is a soft French "zh" and eu is the ö sound (not "oy").',de:'<b class="w">Ingenieur</b>: g klingt weich wie sch, eu wie ö.'},
 ingenieurin:{ar:'<b class="w">Ingenieurin</b> بتتنطق «إنجينيورين»: الـ g جيم فرنساوي ناعمة، وeu زي ö.',en:'<b class="w">Ingenieurin</b>: soft French "zh" for g, and eu is the ö sound.',de:'<b class="w">Ingenieurin</b>: g klingt weich wie sch, eu wie ö.'},
 friseur:{ar:'<b class="w">Friseur</b> بتتنطق «فريزور»: eu هنا زي ö، والـ s ز.',en:'<b class="w">Friseur</b>: eu is the ö sound here, s is voiced "z".',de:'<b class="w">Friseur</b>: eu klingt wie ö, s ist stimmhaft.'},
 friseurin:{ar:'<b class="w">Friseurin</b> بتتنطق «فريزورين»: eu هنا زي ö، والـ s ز.',en:'<b class="w">Friseurin</b>: eu is the ö sound here, s is voiced "z".',de:'<b class="w">Friseurin</b>: eu klingt wie ö, s ist stimmhaft.'},
 wlan:{ar:'<b class="w">WLAN</b> بتتنطق «ڤي لان»: W بتتنطق ڤي في اسم الحرف.',en:'<b class="w">WLAN</b> is said "vay-lahn": the letter W is called "vay".',de:'<b class="w">WLAN</b> spricht man "We-Lan".'},
 orange:{ar:'<b class="w">Orange</b> بتتنطق «أورانجه»: الجيم فرنساوي ناعمة، والـ ng مش نون ألمانية.',en:'<b class="w">Orange</b> is said "oh-RAHN-zhuh", with a soft French "zh" sound.',de:'<b class="w">Orange</b> spricht man "Orãsche" mit französischem Nasal und weichem sch.'},
 familie:{ar:'<b class="w">Familie</b> بتتنطق «فاميليه»: ie في الآخر بتتنطق ي + e، مش ي طويلة.',en:'<b class="w">Familie</b> is said "fa-MEE-lee-uh": the final ie is two sounds.',de:'<b class="w">Familie</b>: das ie am Ende spricht man als i + e.'},
 chef:{ar:'<b class="w">Chef</b> بتتنطق «شيف»: في الكلمات الفرنساوي ch بتبقى ش.',en:'<b class="w">Chef</b> is said "shef": in French loanwords ch sounds like sh.',de:'<b class="w">Chef</b> spricht man "Schef": in französischen Wörtern klingt ch wie sch.'},
 restaurant:{ar:'<b class="w">Restaurant</b> بتتنطق «ريستورانغ»: النهاية من الأنف زي الفرنساوي، والنبرة على الآخر.',en:'<b class="w">Restaurant</b> ends with a nasal French sound, stress on the last syllable.',de:'<b class="w">Restaurant</b> endet mit französischem Nasal, Betonung hinten.'},
 computer:{ar:'<b class="w">Computer</b> بتتنطق «كومبيوتا»: er في الآخر ألف خفيفة، والنبرة على pu.',en:'<b class="w">Computer</b>: the final er is a soft "a", stress on pu.',de:'<b class="w">Computer</b>: das End-er klingt wie ein kurzes a, Betonung auf pu.'},
 job:{ar:'<b class="w">Job</b> بتتنطق «دجوب»: j هنا زي الإنجليزي لأنها كلمة مستعارة.',en:'<b class="w">Job</b> keeps the English "j" sound (dj) because it is a loanword.',de:'<b class="w">Job</b> behält das englische "dsch", weil es ein Lehnwort ist.'},
 handy:{ar:'<b class="w">Handy</b> بتتنطق «هندي»: النبرة على أول مقطع، والـ y ياء.',en:'<b class="w">Handy</b>: stress on the first syllable, final y is "i".',de:'<b class="w">Handy</b>: Betonung vorne, das y klingt wie i.'},
 baby:{ar:'<b class="w">Baby</b> بتتنطق «بيبي»: كلمة إنجليزي بنطق ألماني.',en:'<b class="w">Baby</b> is said "BAY-bee", an English loanword.',de:'<b class="w">Baby</b> spricht man "Bebi", ein englisches Lehnwort.'},
 café:{ar:'<b class="w">Café</b> بتتنطق «كافيه»: النبرة على الآخر.',en:'<b class="w">Café</b>: stress on the last syllable.',de:'<b class="w">Café</b>: Betonung auf der letzten Silbe.'},
 chor:{ar:'<b class="w">Chor</b> بتتنطق «كور»: ch هنا زي k.',en:'<b class="w">Chor</b> is said "kor": ch sounds like k here.',de:'<b class="w">Chor</b> spricht man "Kor": ch klingt wie k.'}
};
r('tsch',m(/tsch/),'<b class="w">{x}</b> بتتنطق «تش» زي في «تشاو».','<b class="w">{x}</b> sounds like "ch" in "chat".','<b class="w">{x}</b> ist ein einziger Laut, wie "tsch" in Tschüss.');
r('sch',function(w){var x=/sch/.exec(w.replace('tsch','tsc'));return x?x[0]:null},'<b class="w">{x}</b> بتتنطق «ش».','<b class="w">{x}</b> sounds like English "sh".','<b class="w">{x}</b> klingt wie das arabische ش (sch).');
r('sp',function(w){var x=/^(ver|be|er|ent|zer)?sp/.exec(w);return x?'sp':null},'<b class="w">{x}</b> في أول الكلمة بتتنطق «شب» مش «سب».','At the start of a word <b class="w">{x}</b> is said "shp", not "sp".','Am Wortanfang spricht man <b class="w">{x}</b> als "schp".');
r('st',function(w){var x=/^(ver|be|er|ent|zer)?st/.exec(w);return x?'st':null},'<b class="w">{x}</b> في أول الكلمة بتتنطق «شت» مش «ست».','At the start of a word <b class="w">{x}</b> is said "sht", not "st".','Am Wortanfang spricht man <b class="w">{x}</b> als "scht".');
r('chs',m(/chs/),'<b class="w">{x}</b> بتتنطق «كس».','<b class="w">{x}</b> sounds like "ks".','<b class="w">{x}</b> klingt wie "ks".');
r('chhard',function(w){var x=/(au|a|o|u)ch(?!s)/.exec(w);return x?w:null},'الـ ch في <b class="w">{x}</b> بعد a/o/u: صوت خشن زي الخاء.','In <b class="w">{x}</b> ch follows a/o/u: a rough sound, like Arabic خ.','In <b class="w">{x}</b> folgt ch auf a/o/u: ein rauer Laut (ach-Laut).');
r('chsoft',function(w){var x=new RegExp('(['+SOFTPRE+']ch(?!s))').exec(w);return(x||/[^aou]chen$/.test(w)&&!/(au)chen$/.test(w))?w:null},'الـ ch في <b class="w">{x}</b>: صوت ناعم، هوا خفيف بين اللسان وسقف الحلق (مش خاء).','The ch in <b class="w">{x}</b> is soft: light air between tongue and palate (not a rough kh).','Das ch in <b class="w">{x}</b> ist weich (ich-Laut): leiser Luftstrom, nicht rau.');
r('ig',function(w){return /ig$/.test(w)?'ig':null},'<b class="w">{x}</b> في آخر الكلمة بتتنطق «إيش» ناعمة.','Word-final <b class="w">{x}</b> is said like "ich" (soft).','Am Wortende klingt <b class="w">{x}</b> wie "ich".');
r('ie',function(w){return /ien$|ie$/.test(w)?null:(/ie/.exec(w)||[null])[0]},'<b class="w">{x}</b> بتتنطق «ي» طويلة، والـ e بس علامة مد.','<b class="w">{x}</b> is one long "ee" sound; the e only marks length.','<b class="w">{x}</b> ist ein langes i; das e dehnt nur.');
r('ei',function(w){return(/ei/.exec(w)||[null])[0]},'<b class="w">{x}</b> بتتنطق «آي».','<b class="w">{x}</b> sounds like English "eye".','<b class="w">{x}</b> klingt wie "ai".');
r('eu',function(w){return(/eu|äu/.exec(w)||[null])[0]},'<b class="w">{x}</b> بتتنطق «أوي» (زي oy).','<b class="w">{x}</b> sounds like "oy" in "boy".','<b class="w">{x}</b> klingt wie "oi".');
r('au',function(w){return(/au/.exec(w)||[null])[0]},'<b class="w">{x}</b> بتتنطق «آو».','<b class="w">{x}</b> sounds like "ow" in "cow".','<b class="w">{x}</b> klingt wie "au" in Haus.');
r('ae',m(/ä(?!u)/),'<b class="w">{x}</b> بتتنطق «إي» مفتوحة، زي e.','<b class="w">{x}</b> sounds like a short "e" (as in bed).','<b class="w">{x}</b> klingt wie ein offenes e.');
r('oe',m(/ö/),'<b class="w">{x}</b> مش موجودة في العربي: قولي e وشفايفك مدورة.','<b class="w">{x}</b>: say "e" with rounded lips.','<b class="w">{x}</b>: sprich e mit gerundeten Lippen.');
r('ue',m(/ü/),'<b class="w">{x}</b> مش موجودة في العربي: قولي i وشفايفك مدورة لقدام.','<b class="w">{x}</b>: say "ee" with rounded lips.','<b class="w">{x}</b>: sprich i mit gerundeten Lippen.');
r('sz',m(/ß/),'<b class="w">{x}</b> بتتنطق «س» قوية، والصوت اللي قبلها طويل.','<b class="w">{x}</b> is a sharp "s" and the vowel before it is long.','<b class="w">{x}</b> ist ein scharfes s, der Vokal davor ist lang.');
r('ss',m(/ss/),'<b class="w">{x}</b> بتتنطق «س»، والحرف المتحرك اللي قبلها قصير.','<b class="w">{x}</b> is a sharp "s" and the vowel before it is short.','<b class="w">{x}</b> ist ein scharfes s, der Vokal davor ist kurz.');
r('z',function(w){return(/tz|z/.exec(w)||[null])[0]},'<b class="w">{x}</b> بتتنطق «تس».','<b class="w">{x}</b> sounds like "ts".','<b class="w">{x}</b> klingt wie "ts".');
r('sv',function(w){var x=new RegExp('(^|['+V+'])s(?=['+V+'])').exec(w);return x?'s':null},'الـ <b class="w">{x}</b> قبل حرف متحرك بتتنطق «ز».','<b class="w">{x}</b> before a vowel is voiced, like "z".','<b class="w">{x}</b> vor einem Vokal ist stimmhaft, wie in "Sonne".');
r('w',m(/w/),'<b class="w">{x}</b> بتتنطق «ڤ» مش «و».','<b class="w">{x}</b> sounds like English "v".','<b class="w">{x}</b> klingt wie das weiche w (wie "v" im Englischen).');
r('vloan',function(w){return LOANV[w]?'v':null},'الـ <b class="w">{x}</b> هنا في كلمة أجنبية بتتنطق «ڤ».','In this loanword <b class="w">{x}</b> sounds like "v".','In diesem Fremdwort klingt <b class="w">{x}</b> wie w.');
r('v',function(w){return(!LOANV[w]&&/v/.test(w))?'v':null},'الـ <b class="w">{x}</b> في الكلمات الألمانية بتتنطق «ف».','In German words <b class="w">{x}</b> sounds like "f".','In deutschen Wörtern klingt <b class="w">{x}</b> wie f.');
r('j',m(/j/),'<b class="w">{x}</b> بتتنطق «ي» مش «جيم».','<b class="w">{x}</b> sounds like English "y".','<b class="w">{x}</b> klingt wie das arabische ي.');
r('qu',m(/qu/),'<b class="w">{x}</b> بتتنطق «كڤ».','<b class="w">{x}</b> sounds like "kv".','<b class="w">{x}</b> klingt wie "kw".');
r('x',m(/x/),'<b class="w">{x}</b> بتتنطق «كس».','<b class="w">{x}</b> sounds like "ks".','<b class="w">{x}</b> klingt wie "ks".');
r('ck',m(/ck/),'<b class="w">{x}</b> بتتنطق «ك» قصيرة، والصوت اللي قبلها قصير.','<b class="w">{x}</b> is a short "k" and the vowel before it is short.','<b class="w">{x}</b> klingt wie ein kurzes k; der Vokal davor ist kurz.');
r('th',m(/th/),'<b class="w">{x}</b> بتتنطق «ت» بس، مش زي الإنجليزي.','<b class="w">{x}</b> is just "t", not the English th.','<b class="w">{x}</b> klingt nur wie t.');
r('ph',m(/ph/),'<b class="w">{x}</b> بتتنطق «ف».','<b class="w">{x}</b> sounds like "f".','<b class="w">{x}</b> klingt wie f.');
r('dt',m(/dt/),'<b class="w">{x}</b> بتتنطق «ت».','<b class="w">{x}</b> sounds like "t".','<b class="w">{x}</b> klingt wie t.');
r('pf',m(/pf/),'<b class="w">{x}</b> انطقي p وf مع بعض بسرعة.','<b class="w">{x}</b>: say p and f together, quickly.','<b class="w">{x}</b>: p und f schnell zusammen sprechen.');
r('ng',m(/ng/),'<b class="w">{x}</b> نون من الأنف من غير جيم.','<b class="w">{x}</b> is a nasal "ng" with no separate g.','<b class="w">{x}</b> ist ein Nasallaut, ohne eigenes g.');
r('nk',m(/nk/),'<b class="w">{x}</b> نون من الأنف وبعدها ك.','<b class="w">{x}</b> is a nasal n followed by k.','<b class="w">{x}</b> ist ein Nasal-n plus k.');
r('hsil',function(w){var x=new RegExp('['+V+']h(?=[^'+V+']|$|en)').exec(w);return x?w:null},'الـ h في <b class="w">{x}</b> ما بتتنطقش، لكن بتطوّل الصوت اللي قبلها.','The h in <b class="w">{x}</b> is silent; it makes the vowel long.','Das h in <b class="w">{x}</b> ist stumm; es dehnt den Vokal.');
r('hini',function(w){return /^h[aeiouäöüy]/.test(w)?'h':null},'<b class="w">{x}</b> في أول الكلمة بتتنطق هاء خفيفة.','Word-initial <b class="w">{x}</b> is a light breath, like English "h".','Am Wortanfang ist <b class="w">{x}</b> ein leichter Hauchlaut.');
r('vow2',m(/aa|ee|oo/),'<b class="w">{x}</b> حرفين متحركين زي بعض = صوت واحد طويل.','<b class="w">{x}</b>: a doubled vowel is one long sound.','<b class="w">{x}</b>: ein doppelter Vokal ist ein langer Laut.');
r('fin',function(w){return(w.length>2&&/[bdg]$/.test(w)&&!/ng$/.test(w)&&!/ig$/.test(w))?w.slice(-1):null},'الـ <b class="w">{x}</b> في آخر الكلمة بتتنطق قوية: {y}.','Word-final <b class="w">{x}</b> is said hard: {y}.','Am Wortende klingt <b class="w">{x}</b> hart: {y}.',{y:{b:['p','p'],d:['t','t'],g:['k','k']}});
r('dbl',function(w){var x=/([bdfgklmnprtz])\1/.exec(w);return x?x[0]:null},'<b class="w">{x}</b> حرف مضاعف: الحرف المتحرك اللي قبله قصير.','<b class="w">{x}</b> doubled consonant: the vowel before it is short.','<b class="w">{x}</b> Doppelkonsonant: der Vokal davor ist kurz.');
r('tion',m(/tion/),'<b class="w">{x}</b> بتتنطق «تسيون» والنبرة عليها.','<b class="w">{x}</b> is said "tsyohn" with the stress on it.','<b class="w">{x}</b> spricht man "tsion"; die Betonung liegt darauf.');
r('ieren',m(/ieren$/),'<b class="w">{x}</b> النبرة على ie.','<b class="w">{x}</b>: the stress is on "ie".','<b class="w">{x}</b>: die Betonung liegt auf "ie".');
r('ität',m(/ität/),'<b class="w">{x}</b> النبرة على المقطع ده.','<b class="w">{x}</b>: the stress is on this syllable.','<b class="w">{x}</b>: die Betonung liegt auf dieser Silbe.');
r('er',function(w){return(w.length>3&&/er$/.test(w))?'er':null},'<b class="w">{x}</b> في آخر الكلمة بتتنطق ألف خفيفة.','Word-final <b class="w">{x}</b> sounds like a soft "uh/a".','Am Wortende klingt <b class="w">{x}</b> wie ein kurzes a.');
r('rv',function(w){var x=new RegExp('['+V+']r$').exec(w);return(x&&!/er$/.test(w)||w==='er')?w:null},'الـ r في آخر <b class="w">{x}</b> بتبقى ألف خفيفة.','The r in <b class="w">{x}</b> becomes a soft "a" sound.','Das r in <b class="w">{x}</b> klingt wie ein kurzes a.');
r('rs',function(w){return new RegExp('^r['+V+']').test(w)?'r':null},'الـ <b class="w">{x}</b> من الحلق، قريبة من الغين، مش مرولة.','<b class="w">{x}</b> is made in the throat, not rolled.','<b class="w">{x}</b> wird hinten im Hals gebildet, nicht gerollt.');
r('eend',function(w){return(w.length>3&&/(en|el|e)$/.test(w)&&!/(ie|ee|ue)$/.test(w))?(/(en|el|e)$/.exec(w)[0]):null},'النهاية <b class="w">{x}</b> خفيفة جداً: e قصيرة وخفيفة.','The ending <b class="w">{x}</b> is weak: a short, light e.','Die Endung <b class="w">{x}</b> ist schwach: ein kurzes, leichtes e.');
r('g',function(w){var x=/g/.exec(w);return(x&&!/ng/.test(w)&&!/ig$/.test(w))?'g':null},'<b class="w">{x}</b> بتتنطق جيم مصرية (مش غين).','<b class="w">{x}</b> is a hard "g", like in "go".','<b class="w">{x}</b> ist ein hartes g, wie in "gut".');
function words(t){return(t.match(/[A-Za-zÄÖÜäöüßéÉ]+/g)||[]).filter(function(w){return !/^(der|die|das|ein|eine|dem|den|des|pl|sg)$/i.test(w)})}
function strip(s){return s.replace(/\u00ad/g,'')}
window.pronTips=function(text,max){
 var lg=LG(),out=[],ws=words(text),seenE={};
 ws.forEach(function(w){var lw=w.toLowerCase();if(EXC[lw]&&!seenE[lw]){seenE[lw]=1;out.push(EXC[lw][lg])}});
 for(var j=0;j<R.length&&out.length<(max||4);j++){var u=R[j];
  for(var i=0;i<ws.length;i++){var w=ws[i],lw=w.toLowerCase();if(EXC[lw])continue;
   var x=u.f(lw);if(!x)continue;
   var shown=x;var idx=lw.indexOf(x);if(idx>=0)shown=w.substr(idx,x.length);
   var tx=u.t[lg].replace(/\{x\}/g,shown);
   if(u.x.y){var yy=u.x.y[x]||['',''];tx=tx.replace('{y}',yy[0])}
   out.push(tx);break}}
 return out.slice(0,max||4)};
window.pronNote=function(text,opts){
 opts=opts||{};var lg=LG(),max=opts.max||4,tips=window.pronTips(text,max);
 var H={ar:'ملاحظات النطق',en:'Pronunciation notes',de:'Aussprache-Hinweise'}[lg];
 var easy={ar:'بتتنطق تقريباً زي ما بتتكتب، من غير حاجة خاصة.',en:'Said almost as it is written, nothing special.',de:'Wird fast so gesprochen, wie sie geschrieben wird.'}[lg];
 var foot={ar:'إرشاد تقريبي حسب قواعد النطق، اسمعي الصوت للتأكد.',en:'Rule-based guidance. Listen to the audio to confirm.',de:'Regelbasierter Hinweis. Höre zur Kontrolle die Audioausgabe.'}[lg];
 var li=(tips.length?tips:['<span>'+easy+'</span>']).map(function(t){return '<li><span>'+t+'</span></li>'}).join('');
 return '<div class="pn'+(opts.mini?' mini':'')+'" data-nt dir="'+(lg==='ar'?'rtl':'ltr')+'">'+(opts.mini?'':'<h4>💡 '+H+'</h4>')+'<ul>'+li+'</ul>'+(opts.mini?'':'<small>'+foot+'</small>')+'</div>'};
})();
