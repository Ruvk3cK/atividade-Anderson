let pi=parseInt(new URLSearchParams(location.search).get("p"),10);
if(!(pi>=0&&pi<pintores.length)) pi=0;
const p=pintores[pi];
document.title=p.n+" – IM.3D";
montaPintores(pi);
const obras=quadros.map((q,j)=>[q,j]).filter(([q])=>q.art===p.n);
const falas=frases.filter(f=>p.n.toLowerCase().includes(f.a.toLowerCase()));
document.getElementById("pagina").innerHTML=
  `<section class="perfil">`
    +`<div class="pf grande">${retrato(p,"d")}</div>`
    +`<div>`
      +`<span class="artist">${p.estilo}</span>`
      +`<h1>${p.n}</h1>`
      +`<p class="anos">${p.anos}</p>`
      +`<p>${p.bio}</p>`
      +`<ul class="dados">`
        +`<li><b>Nascimento</b><span>${p.nasc}</span></li>`
        +`<li><b>Morte</b><span>${p.morte}</span></li>`
        +`<li><b>Estilo</b><span>${p.estilo}</span></li>`
      +`</ul>`
    +`</div>`
  +`</section>`
  +`<h2>Curiosidades</h2>`
  +`<div class="detail info" style="grid-template-columns:1fr"><ul>`
    +p.fatos.map(t=>`<li><span class="dot"></span><p style="margin:0">${t}</p></li>`).join("")
  +`</ul></div>`
  +`<h2>Quadros <small style="font-size:14px;color:var(--mut)">– ${obras.length} no site</small></h2>`
  +`<div class="obras-grid">`
    +obras.map(([q,j])=>
      `<article class="obra">`
        +`<a class="moldura" href="index.html?q=${j}#oquadro" aria-label="Ver ${q.n} na galeria">${arte(q,j+30)}</a>`
        +`<div>`
          +`<h3>${q.n}</h3>`
          +`<p class="meta">${q.ano}</p>`
          +`<p>${q.txt}</p>`
          +`<p><b>O que transmite:</b> ${q.inf.join(" · ")}</p>`
          +`<a class="ver" href="index.html?q=${j}#oquadro">Ver na galeria →</a>`
        +`</div>`
      +`</article>`
    ).join("")
  +`</div>`
  +`<h2>Uma frase</h2>`
  +`<div class="citacao">`
    +`<p class="quote" id="frase"></p>`
    +`<button id="outraF" type="button">Outra frase</button>`
  +`</div>`;
let ultF=-1;
function sorteia(){
  let n;
  if(falas.length<2) n=0;
  else do{ n=Math.floor(Math.random()*falas.length); } while(n===ultF);
  ultF=n;
  document.getElementById("frase").textContent="“"+falas[n].t+"”";
}
document.getElementById("outraF").onclick=sorteia;
sorteia();
