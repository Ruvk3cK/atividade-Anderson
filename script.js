/* ===== Página inicial ===== */
function expo(){
  const n=quadros.length, w=110, gap=24;
  const x0=(900-(n*w+(n-1)*gap))/2;
  let t=`<svg viewBox="0 0 900 270">`
    +`<defs><linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">`
    +`<stop offset="0" stop-color="#1a1245"/><stop offset="1" stop-color="#2e2078"/></linearGradient></defs>`
    +`<rect width="900" height="270" fill="url(#wall)"/>`
    +`<rect y="245" width="900" height="25" fill="#0a0630"/>`
    +`<rect y="18" width="900" height="6" fill="#b8893a"/>`;
  quadros.forEach((q,i)=>{
    const x=x0+i*(w+gap);
    const h=i%2?118:136;
    const y=i%2?92:72;
    const cx=x+w/2;
    t+=`<path d="M${cx-6} 30L${cx-56} ${y+h+10}H${cx+56}L${cx+6} 30Z" fill="#fff3a8" opacity=".08"/>`;
    t+=`<rect x="${cx-7}" y="24" width="14" height="10" rx="3" fill="#ffd24a"/>`;
    t+=`<g style="cursor:pointer" onclick="escolher(${i})">`;
    t+=`<rect x="${x-8}" y="${y-8}" width="${w+16}" height="${h+16}" fill="#b8893a" stroke="${i===sel?"#ffd24a":"#6b4a14"}" stroke-width="${i===sel?4:2}"/>`;
    t+=arte(q,i+20).replace("<svg ",`<svg x="${x}" y="${y}" width="${w}" height="${h}" `);
    t+=`</g>`;
    t+=`<rect x="${cx-26}" y="${y+h+16}" width="52" height="8" rx="2" fill="#d9d2ff" opacity=".7"/>`;
  });
  document.getElementById("expo").innerHTML=t+"</svg>";
}

/* ===== Cadastro e Banner de Boas-Vindas ===== */
const bs=document.getElementById("bslides");
let troca=null;
let visitante=null;

try{
  visitante=JSON.parse(localStorage.getItem("im3d_visitante"));
}catch(e){}

function mostraVisitante(){
  const info=document.getElementById("visitante-info");
  if(info && visitante && visitante.nome){
    const primeiroNome = visitante.nome.split(" ")[0];
    info.textContent = "Olá, " + primeiroNome;
    info.title = "Visitante: " + visitante.nome + " (" + visitante.email + ")";
  }
}

if(visitante && visitante.nome && visitante.email){
  document.getElementById("banner").style.display="none";
  mostraVisitante();
}else{
  pintores.forEach((p,i)=>{
    bs.innerHTML+=`<div class="bslide ${i?"":"on"}">${retrato(p)}<h3 style="margin:8px 0 0">${p.n}</h3></div>`;
  });
  let bi=0;
  troca=setInterval(()=>{
    const s=bs.children;
    s[bi].classList.remove("on");
    bi=(bi+1)%s.length;
    s[bi].classList.add("on");
  },2200);
}

document.getElementById("form-cadastro").onsubmit=(e)=>{
  e.preventDefault();
  const nome=document.getElementById("cad-nome").value.trim();
  const email=document.getElementById("cad-email").value.trim();
  const erro=document.getElementById("cad-erro");

  if(!nome || !email){
    erro.style.display="block";
    return;
  }

  erro.style.display="none";
  visitante={nome, email};
  try{ localStorage.setItem("im3d_visitante", JSON.stringify(visitante)); }catch(err){}

  document.getElementById("banner").style.display="none";
  if(troca) clearInterval(troca);
  mostraVisitante();
};

montaPintores(-1);

const track=document.getElementById("track");
let sel=0;
{
  const n=parseInt(new URLSearchParams(location.search).get("q"),10);
  if(n>=0&&n<quadros.length) sel=n;
}

function escolher(i){ sel=i; atualizar(); }

function atualizar(){
  const n=quadros.length;
  const vis=window.innerWidth<640?2:3;
  const ini=Math.min(Math.max(sel-Math.floor(vis/2),0),n-vis);
  track.innerHTML="";
  for(let k=0;k<vis;k++){
    const i=ini+k;
    const q=quadros[i];
    const d=document.createElement("div");
    d.className="frame"+(i===sel?" on":"");
    d.tabIndex=0;
    d.innerHTML=arte(q,i)+`<span>${q.n} · ${q.ano}</span>`;
    d.onclick=()=>escolher(i);
    d.onkeydown=e=>{ if(e.key==="Enter") escolher(i); };
    track.appendChild(d);
  }
  document.getElementById("bars").innerHTML=quadros.map((q,i)=>
    `<button class="bar ${i===sel?"on":i<sel?"pass":""}" onclick="escolher(${i})" aria-label="${q.n}"></button>`
  ).join("");
  document.getElementById("pts").innerHTML=quadros.map((q,i)=>
    `<button class="pt ${i===sel?"on":""}" onclick="escolher(${i})"><i></i><b>${q.ano}</b><small>${q.n}</small></button>`
  ).join("");
  expo();
  detalhe();
}

function detalhe(){
  const q=quadros[sel];
  document.getElementById("big").innerHTML=arte(q,sel+10);
  document.getElementById("dArt").textContent=q.art+" · "+q.ano;
  document.getElementById("dTit").textContent=q.n;
  document.getElementById("dTxt").textContent=q.txt;
  document.getElementById("dInfo").innerHTML=
    `<li><span class="dot"></span><div><b>O que transmite</b></div></li>`
    +q.inf.map(t=>`<li><span class="dot"></span><p style="margin:0">${t}</p></li>`).join("");
}

window.addEventListener("resize",atualizar);
document.addEventListener("keydown",e=>{
  if(e.target.matches("input,textarea")) return;
  if(e.key==="ArrowRight") escolher(Math.min(sel+1,quadros.length-1));
  if(e.key==="ArrowLeft")  escolher(Math.max(sel-1,0));
});

atualizar();
if(location.hash==="#oquadro"){ document.getElementById("oquadro").scrollIntoView(); }

let ult=-1;
document.getElementById("iaBtn").onclick=()=>{
  let n;
  do{ n=Math.floor(Math.random()*frases.length); } while(n===ult);
  ult=n;
  const f=document.getElementById("fala");
  f.style.display="block";
  f.innerHTML=`“${frases[n].t}”<b>— ${frases[n].a}</b>`;
};

let tarefas=[];
try{ tarefas=JSON.parse(localStorage.getItem("im3d_tarefas")||"[]"); }catch(e){ tarefas=[]; }
if(!Array.isArray(tarefas)) tarefas=[];
function salvaT(){ try{ localStorage.setItem("im3d_tarefas",JSON.stringify(tarefas)); }catch(e){} }
function desenhaT(){
  const ul=document.getElementById("tLista");
  ul.innerHTML="";
  tarefas.forEach(t=>{
    const li=document.createElement("li");
    if(t.feita) li.className="feita";
    const cb=document.createElement("input");
    cb.type="checkbox"; cb.checked=t.feita;
    cb.onchange=()=>{ t.feita=cb.checked; salvaT(); desenhaT(); };
    const sp=document.createElement("span");
    sp.className="tx"; sp.textContent=t.texto;
    const del=document.createElement("button");
    del.type="button"; del.className="del"; del.textContent="✕";
    del.onclick=()=>{ tarefas=tarefas.filter(x=>x!==t); salvaT(); desenhaT(); };
    li.append(cb,sp,del);
    ul.appendChild(li);
  });
  const feitas=tarefas.filter(t=>t.feita).length;
  document.getElementById("tVazio").style.display=tarefas.length?"none":"block";
  document.getElementById("tLimpar").hidden=!feitas;
  document.getElementById("tContador").textContent=tarefas.length?`– ${feitas} de ${tarefas.length} concluídas`:"";
}
function adicionaT(){
  const inp=document.getElementById("tInput");
  const texto=inp.value.trim();
  if(!texto){ inp.focus(); return; }
  tarefas.push({texto,feita:false});
  inp.value=""; salvaT(); desenhaT(); inp.focus();
}
document.getElementById("tAdd").onclick=adicionaT;
document.getElementById("tInput").onkeydown=e=>{ if(e.key==="Enter"){ e.preventDefault(); adicionaT(); } };
document.getElementById("tLimpar").onclick=()=>{ tarefas=tarefas.filter(t=>!t.feita); salvaT(); desenhaT(); };
desenhaT();
