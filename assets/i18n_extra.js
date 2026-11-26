// v2.4 additions to the interface dictionary
(function(){
 if(!window.I18N)return;
 var X={
  en:{"سلسلة النطق من الصفر":"Pronunciation series from zero","20 فيديو قصير عن نطق الحروف والأصوات":"20 short videos on letters and sounds","الإصدار 2.4 — مجاني بالكامل ويشتغل بدون إنترنت":"Version 2.4 — completely free and works offline"},
  de:{"سلسلة النطق من الصفر":"Aussprache-Serie von Null","20 فيديو قصير عن نطق الحروف والأصوات":"20 Kurzvideos zu Buchstaben und Lauten","الإصدار 2.4 — مجاني بالكامل ويشتغل بدون إنترنت":"Version 2.4 — komplett kostenlos und offline nutzbar"}};
 for(var l in X){for(var k in X[l])I18N[l].ui[k]=X[l][k]}
})();
