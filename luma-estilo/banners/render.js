const {chromium}=require('playwright');const fs=require('fs');const D=__dirname;
(async()=>{const b=await chromium.launch();const lst=JSON.parse(fs.readFileSync(D+'/html/lista.json'));
for(const [n,w,h] of lst){const p=await b.newPage({viewport:{width:w,height:h}});
await p.goto('file://'+D+'/html/'+n+'.html',{waitUntil:'networkidle'}).catch(()=>{});await p.waitForTimeout(800);
await p.screenshot({path:D+'/final/'+n+'.jpg',type:'jpeg',quality:86});await p.close();}
await b.close();})();
