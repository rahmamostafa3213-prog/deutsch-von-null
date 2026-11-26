const fs=require('fs');
let src='';for(const f of ['data.js','data2.js','data3.js','data4.js'])src+=fs.readFileSync('assets/'+f,'utf8')+'\n';
src+='\nmodule.exports={UNITS,ALPHA,GRAM,UNITS2,DIALOGS,VERBS,GRAM2,UNITS3,DIALOGS3,VERBS3,GRAM3,ZLESSONS,VLESSONS};';
fs.writeFileSync('/tmp/alldata.js',src);
const D=require('/tmp/alldata.js');
const ar=/[\u0600-\u06FF]/;const out=new Map();
function walk(o,key,top){if(typeof o==='string'){if(ar.test(o)&&!out.has(o))out.set(o,{key,top});}else if(Array.isArray(o))o.forEach((x,i)=>walk(x,typeof x==='string'?key+'['+i+']':key,top));else if(o&&typeof o==='object')for(const k in o)walk(o[k],k,top)}
for(const k in D)walk(D[k],k,k);
const arr=[...out].map(([s,m],i)=>({i,s,k:m.key,t:m.top}));
fs.writeFileSync(process.env.HOME+'/i18n/datastr.json',JSON.stringify(arr));
console.log(arr.length,arr.reduce((a,x)=>a+x.s.length,0));
const by={};arr.forEach(x=>{const g=x.t+':'+x.k.replace(/\[\d+\]/g,'');by[g]=(by[g]||0)+1});console.log(by);
