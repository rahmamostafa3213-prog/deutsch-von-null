import json,re
chunks=json.load(open('chunks.json'))
data=json.load(open('datastr.json'))
def readp(f):
    d={}
    for l in open(f,encoding='utf8').read().split('\n'):
        if not l.strip(): continue
        i,_,t=l.partition('|'); d[int(i)]=t
    return d
en={};de={}
for n in (1,2,3,4):
    en.update(readp(f'en{n}.txt')); de.update(readp(f'de{n}.txt'))
ui_en={};ui_de={}
for l in open('idx.txt',encoding='utf8').read().split('\n'):
    if not l.strip(): continue
    p=l.split('|'); i=int(p[0])
    if i>=len(chunks): continue
    ui_en[chunks[i]]=p[1]; ui_de[chunks[i]]=p[2] if len(p)>2 and p[2]!='' or (len(p)>2) else p[1]
d_en={};d_de={}
miss=[]
for x in data:
    i=x['i'];s=x['s']
    if x['k'].startswith('n'): continue
    e=en.get(i)
    if e is None or e=='x':
        miss.append(i);continue
    d_en[s]=e
    d_de[s]=de.get(i,e)
print('missing',miss[:20],len(miss))
chunks2=json.load(open('chunks2.json'))
for l in open('idx2.txt',encoding='utf8').read().split('\n'):
    if not l.strip(): continue
    q=l.split('|'); ui_en[chunks2[int(q[0])]]=q[1]; ui_de[chunks2[int(q[0])]]=q[2]

out='window.I18N='+json.dumps({'en':{'ui':ui_en,'data':d_en},'de':{'ui':ui_de,'data':d_de}},ensure_ascii=False)+';'
open('/home/sandbox/wortgarten/assets/i18n.js','w',encoding='utf8').write(out)
print(len(ui_en),len(d_en),len(out))
