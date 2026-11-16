"""Gera os banners da Luma: python3 gerar.py && node render.js"""
import json, os
D=os.path.dirname(os.path.abspath(__file__))
FONT='<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">'
CSS='''*{margin:0;padding:0;box-sizing:border-box}body{width:%(w)dpx;height:%(h)dpx;overflow:hidden;font-family:Inter,sans-serif}
.bg{position:absolute;inset:0;background:url(../fotos/%(foto)s) %(pos)s/cover no-repeat}
.ov{position:absolute;inset:0;background:%(ov)s}
.t{position:absolute;%(box)s;color:%(cor)s}
.wm{font-family:'Playfair Display',serif;letter-spacing:.42em;font-size:%(wm)dpx;font-weight:500;opacity:.95}
.k{letter-spacing:.32em;font-size:%(k)dpx;font-weight:600;color:%(ac)s;margin-top:%(gap)dpx}
h1{font-family:'Playfair Display',serif;font-weight:700;font-size:%(h1)dpx;line-height:.95;margin:%(gap2)dpx 0}
.off{display:flex;align-items:flex-end;gap:%(g3)dpx}.n{font-size:%(n)dpx;font-weight:800;line-height:.82;color:%(ac)s}
.p{font-size:%(p)dpx;font-weight:800;line-height:1.05}.p small{display:block;font-size:%(ps)dpx;font-weight:600;opacity:.85}
.sub{font-size:%(sub)dpx;line-height:1.35;opacity:.9;max-width:%(subw)dpx}
.cup{display:inline-flex;border:2px solid %(cor)s;border-radius:999px;overflow:hidden;font-size:%(cp)dpx;margin-top:%(gap)dpx}
.cup span{padding:.5em .9em}.cup b{background:%(cor)s;color:%(inv)s;padding:.5em 1em;letter-spacing:.08em}
.btn{display:inline-block;margin-top:%(gap)dpx;background:%(btn)s;color:#fff;font-weight:800;letter-spacing:.12em;font-size:%(bt)dpx;padding:.95em 2.1em;border-radius:999px}
.note{position:absolute;%(notepos)s;font-size:%(nt)dpx;color:%(cor)s;opacity:.7}
'''
def sizes(fmt):
    if fmt=='site': return dict(w=1920,h=700,wm=22,k=18,h1=104,n=150,p=40,ps=20,sub=26,subw=560,cp=22,bt=20,gap=26,gap2=14,g3=16,nt=14,box='left:150px;top:50%;transform:translateY(-50%)',notepos='left:150px;bottom:26px')
    if fmt=='mobile': return dict(w=1080,h=1350,wm=26,k=22,h1=120,n=170,p=46,ps=24,sub=34,subw=900,cp=28,bt=26,gap=30,gap2=14,g3=18,nt=18,box='left:80px;right:80px;bottom:110px',notepos='left:80px;bottom:44px')
    return dict(w=1080,h=1920,wm=28,k=24,h1=132,n=190,p=50,ps=26,sub=36,subw=900,cp=30,bt=28,gap=34,gap2=16,g3=18,nt=18,box='left:80px;right:80px;bottom:330px',notepos='left:80px;bottom:270px')
DARK=dict(cor='#fff',inv='#1D1A1B',ac='#E7A9BF',btn='#8E4E66')
LIGHT=dict(cor='#1D1A1B',inv='#fff',ac='#8E4E66',btn='#8E4E66')
B=[
 # nome, foto, formato, tema, posicao, overlay, conteudo
 ('black-friday-site','bf-couro-h.jpg','site',DARK,'right 12%','linear-gradient(90deg,rgba(10,8,9,.85) 0 30%,rgba(10,8,9,0) 62%)','bf'),
 ('black-friday-mobile','bf-bomber-v.jpg','mobile',DARK,'center 8%','linear-gradient(0deg,rgba(10,8,9,.95) 0 38%,rgba(10,8,9,0) 68%)','bf'),
 ('black-friday-stories','bf-bomber-v.jpg','stories',DARK,'center top','linear-gradient(0deg,rgba(10,8,9,.95) 0 42%,rgba(10,8,9,0) 70%)','bf'),
 ('verao-site','verao-terraco-h.jpg','site',LIGHT,'right 18%','linear-gradient(90deg,rgba(247,243,241,.80) 0 30%,rgba(247,243,241,0) 58%)','verao'),
 ('verao-mobile','verao-praia-v.jpg','mobile',DARK,'center 12%','linear-gradient(0deg,rgba(40,28,24,.80) 0 36%,rgba(40,28,24,0) 64%)','verao'),
 ('verao-stories','verao-praia-v.jpg','stories',DARK,'center top','linear-gradient(0deg,rgba(40,28,24,.82) 0 40%,rgba(40,28,24,0) 66%)','verao'),
 ('novidades-site','novidades-duas-h.jpg','site',LIGHT,'right 14%','none','nov'),
 ('novidades-site-b','novidades-blazer-h.jpg','site',LIGHT,'right 10%','linear-gradient(90deg,rgba(247,243,241,.88) 0 28%,rgba(247,243,241,0) 55%)','nov'),
 ('novidades-mobile','novidades-blazer-h.jpg','mobile',LIGHT,'71% top','linear-gradient(0deg,rgba(247,243,241,.97) 0 34%,rgba(247,243,241,0) 56%)','nov'),
]
TXT={
 'bf':'''<div class="wm">LUMA ESTILO</div><h1>Black<br>Friday</h1>
 <div class="off"><span class="n">30%%</span><span class="p">OFF<small>em jaquetas e casacos</small></span></div>
 <div class="cup"><span>cupom</span><b>BLACKLUMA</b></div><br><span class="btn">COMPRAR AGORA</span>''',
 'verao':'''<div class="wm">LUMA ESTILO</div><div class="k">COLEÇÃO VERÃO</div><h1>O sol pede<br>leveza</h1>
 <p class="sub">Linho, vestidos e looks fresquinhos para os dias quentes.</p><span class="btn">ENTRAR NA LISTA VIP</span>''',
 'nov':'''<div class="wm">LUMA ESTILO</div><div class="k">NOVIDADES</div><h1>O novo look<br>da estação</h1>
 <p class="sub">Peças que acabaram de chegar para renovar seu guarda-roupa.</p><span class="btn">VER NOVIDADES</span>''',
}
NOTE={'bf':'*Oferta válida em peças selecionadas, enquanto durar o estoque.'}
os.makedirs(D+'/html',exist_ok=True)
lst=[]
for nome,foto,fmt,tema,pos,ov,c in B:
    s=sizes(fmt); v=dict(s,**tema,foto=foto,pos=pos,ov=ov)
    html='<!doctype html><html><head><meta charset="utf-8">'+FONT+'<style>'+(CSS%v)+'</style></head><body><div class="bg"></div><div class="ov"></div><div class="t">'+(TXT[c]%())+'</div>'+('<div class="note">'+NOTE[c]+'</div>' if c in NOTE else '')+'</body></html>'
    open(f'{D}/html/{nome}.html','w').write(html); lst.append([nome,s['w'],s['h']])
json.dump(lst,open(D+'/html/lista.json','w'))
print(len(lst),'banners')
