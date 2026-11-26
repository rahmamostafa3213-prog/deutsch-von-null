// Runtime language layer: Arabic is the source language; EN/DE come from i18n.js
(function(){
 var st={};try{st=JSON.parse(localStorage.getItem('de_state')||'{}')}catch(e){}
 var q=new URLSearchParams(location.search);
 var lang=q.get('lang')||st.lang||'ar';if(['ar','en','de'].indexOf(lang)<0)lang='ar';
 window.LANG=lang;
 var de=document.documentElement;de.lang=lang;de.dir=lang==='ar'?'rtl':'ltr';
 window.LOCALE=lang==='ar'?'ar-EG-u-nu-latn':lang==='de'?'de-DE':'en-GB';
 if(lang==='ar'||!window.I18N){window.T=function(s){return s};return}
 var D=I18N[lang],ui=D.ui,dat=D.data,AR=/[\u0600-\u06FF]/;
 // 1) translate lesson/vocabulary data in place
 function walk(o){if(Array.isArray(o)){for(var i=0;i<o.length;i++){var v=o[i];if(typeof v==='string'){if(AR.test(v)&&dat[v]!==undefined)o[i]=dat[v]}else if(v&&typeof v==='object')walk(v)}}
  else if(o&&typeof o==='object'){for(var k in o){var v=o[k];if(typeof v==='string'){if(AR.test(v)&&dat[v]!==undefined)o[k]=dat[v]}else if(v&&typeof v==='object')walk(v)}}}
 ['UNITS','ALPHA','GRAM','UNITS2','DIALOGS','VERBS','GRAM2','UNITS3','DIALOGS3','VERBS3','GRAM3','ZLESSONS','VLESSONS'].forEach(function(n){try{walk(eval(n))}catch(e){}});
 // 2) translate interface text at render time
 var RUN=/[\u0600-\u06FF](?:[\u0600-\u06FF\s\u200f.,\u060C\u061F?!:\u061B\-\u2013\u2014()\/\u00AB\u00BB\u064B-\u0652]*[\u0600-\u06FF])?/g;
 var keys=Object.keys(ui).filter(function(k){return k.length>=3}).sort(function(a,b){return b.length-a.length});
 var cache={};
 function sub(m){if(cache[m]!==undefined)return cache[m];var r=m;for(var i=0;i<keys.length;i++){if(r.indexOf(keys[i])>=0)r=r.split(keys[i]).join(ui[keys[i]])}cache[m]=r;return r}
 function T(s){if(typeof s!=='string')return s;if(!/[\u0600-\u06FF\u061F\u060C]|^\s*\u2192\s*$/.test(s))return s;
  if(/^\s*\u2192\s*$/.test(s))return s.replace('\u2192','\u2190');
  s=s.replace(RUN,function(m){return ui[m]!==undefined?ui[m]:sub(m)});
  return s.replace(/\u061F/g,'?').replace(/\u060C/g,',')}
 window.T=T;
 function tnode(n){if(n.nodeType===3){var v=n.nodeValue,t=T(v);if(t!==v)n.nodeValue=t}
  else if(n.nodeType===1){if(n.tagName==='SCRIPT'||n.tagName==='STYLE'||(n.hasAttribute&&n.hasAttribute('data-nt')))return;
   ['placeholder','title','aria-label'].forEach(function(a){if(n.hasAttribute&&n.hasAttribute(a)){var v=n.getAttribute(a),t=T(v);if(t!==v)n.setAttribute(a,t)}});
   for(var c=n.firstChild;c;c=c.nextSibling)tnode(c)}}
 var mo=new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==='characterData')tnode(m.target);else m.addedNodes.forEach(tnode)})});
 ['app','nav'].forEach(function(id){var e=document.getElementById(id);if(e){tnode(e);mo.observe(e,{childList:true,subtree:true,characterData:true})}});
 var _al=window.alert,_cf=window.confirm;window.alert=function(m){return _al.call(window,T(String(m)))};window.confirm=function(m){return _cf.call(window,T(String(m)))};
 var ft=CanvasRenderingContext2D.prototype.fillText;CanvasRenderingContext2D.prototype.fillText=function(t,x,y,w){return ft.call(this,typeof t==='string'?T(t):t,x,y,w)};
})();
