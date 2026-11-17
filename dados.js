/* ===== Dados e desenhos compartilhados pelas duas páginas ===== */

const frases=[
{a:"Leonardo da Vinci",t:"A simplicidade é a sofisticação suprema."},
{a:"Leonardo da Vinci",t:"A pintura é poesia muda; a poesia é pintura cega."},
{a:"Michelangelo",t:"Vejo o anjo no mármore e esculpo até libertá-lo."},
{a:"Michelangelo",t:"Ainda estou aprendendo."},
{a:"Van Gogh",t:"Tenho sonhos assustadores com estrelas; eu as pinto para sonhar melhor."},
{a:"Van Gogh",t:"Quanto mais penso, mais vejo que não há nada mais artístico do que amar as pessoas."}
];

const quadros=[
{n:"A Última Ceia", ano:"1495–98", art:"Leonardo da Vinci", m:"mesa",
   c:["#3a1f5e","#8a6fd0"], s:"#fff0b0",
   txt:"Pintada numa parede de refeitório em Milão, mostra o momento em que Jesus diz que será traído. Cada apóstolo reage de um jeito.",
   inf:["Surpresa e tensão","Emoção em cada gesto","A perspectiva leva o olhar ao centro"]},
{n:"Mona Lisa", ano:"c. 1503", art:"Leonardo da Vinci", m:"mona",
   c:["#2c2a6b","#7b8fd8"], s:"#fff0b0",
   txt:"O sorriso discreto e o fundo enevoado (técnica chamada sfumato) fazem o olhar voltar a ela várias vezes.",
   inf:["Mistério","Calma","Curiosidade: ela está sorrindo ou não?"]},
{n:"A Criação de Adão", ano:"c. 1512", art:"Michelangelo", m:"mao",
   c:["#14216b","#6a8bff"], s:"#ffffff",
   txt:"Afresco do teto da Capela Sistina: o dedo de Deus quase toca o de Adão. O espaço entre eles é a parte mais famosa.",
   inf:["Esperança","Força e vida","O instante antes do contato"]},
{n:"O Juízo Final", ano:"1536–41", art:"Michelangelo", m:"juizo",
   c:["#10196b","#5a7dff"], s:"#ffffff",
   txt:"Afresco na parede do altar da Capela Sistina, pintado mais de vinte anos depois do teto. Cristo está no centro e, ao redor, centenas de figuras sobem e descem num grande redemoinho.",
   inf:["Tensão e movimento","Força nos corpos","Um redemoinho em volta de Cristo"]},
{n:"Os Girassóis", ano:"1888", art:"Vincent van Gogh", m:"flor",
   c:["#251061","#5a3ed6"], s:"#ffc933",
   txt:"Série de vasos de girassóis pintada em Arles, com amarelos fortes e pinceladas grossas cheias de energia.",
   inf:["Alegria e calor","Gratidão pela vida","Energia"]},
{n:"A Noite Estrelada", ano:"1889", art:"Vincent van Gogh", m:"noite",
   c:["#0e1b6e","#3b6fe0"], s:"#ffd24a",
   txt:"Pintada em Saint-Rémy: céu em espirais, estrelas enormes e um vilarejo quieto lá embaixo.",
   inf:["Calma e inquietação ao mesmo tempo","Esperança nas luzes pequenas","Movimento, como se o céu dançasse"]}
];

const pintores=[
{n:"Leonardo da Vinci", anos:"1452 – 1519",
   bio:"Pintor, inventor e cientista italiano do Renascimento. Ficou famoso pelo sfumato, a técnica de sombras suaves, e por obras como a Mona Lisa.",
   nasc:"Vinci, Itália", morte:"Amboise, França", estilo:"Alto Renascimento",
   fatos:[
     "Encheu milhares de páginas de cadernos com estudos de anatomia, máquinas e voo.",
     "Costumava escrever de trás para frente, como num espelho.",
     "A Mona Lisa hoje fica no Museu do Louvre, em Paris."
   ],
   bg:["#2c1a6b","#5b3fd0"], pele:"#f0c9a0", cab:"#cfcfe0", chapeu:"#8a2b4a", barba:true, longa:true},
{n:"Michelangelo", anos:"1475 – 1564",
   bio:"Escultor, pintor e arquiteto italiano do Renascimento. Pintou o teto da Capela Sistina e esculpiu o Davi.",
   nasc:"Caprese, Itália", morte:"Roma, Itália", estilo:"Alto Renascimento",
   fatos:[
     "Esculpiu o Davi, uma estátua de mármore com mais de 5 metros de altura.",
     "Pintou o teto da Capela Sistina entre 1508 e 1512, em andaimes bem altos.",
     "Também projetou a cúpula da Basílica de São Pedro, em Roma."
   ],
   bg:["#14216b","#3d7bff"], pele:"#e8b88f", cab:"#3a2a22", chapeu:null, barba:true, longa:false},
{n:"Vincent van Gogh", anos:"1853 – 1890",
   bio:"Pintor holandês do pós-impressionismo. Usava cores fortes e pinceladas grossas para mostrar emoção, como em A Noite Estrelada.",
   nasc:"Zundert, Países Baixos", morte:"Auvers-sur-Oise, França", estilo:"Pós-impressionismo",
   fatos:[
     "Pintou cerca de 2 mil obras em mais ou menos dez anos de carreira.",
     "Escreveu centenas de cartas ao irmão Theo, que o apoiava.",
     "Vendeu pouquíssimas obras em vida; a fama veio depois da sua morte."
   ],
   bg:["#0e1b6e","#6a3fc9"], pele:"#f2c9a8", cab:"#d9622b", chapeu:"#e9c35a", barba:true, longa:false}
];

function arte(q,i){
  let e="";

  if(q.m==="noite"||q.m==="mao"){
    for(let k=0;k<7;k++){
      const x=30+((k*53+i*17)%140);
      const y=20+((k*37+i*23)%90);
      const r=5+(k%3)*3;
      e+=`<circle cx="${x}" cy="${y}" r="${r+7}" fill="${q.s}" opacity=".25"/>`;
      e+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${q.s}"/>`;
    }
  }

  const noite=`<path d="M20 90c20-30 50-20 40 5s-35 20-30-5 30-15 45 0 40 5 50-15" stroke="#9fc4ff" stroke-width="6" fill="none" opacity=".8"/>`;
  const noite2=`<path d="M0 250V205c40-25 80 10 120-10s60-5 80 5v50z" fill="#0a0630" opacity=".8"/>`;
  const noite3=`<path d="M150 250v-60l8-20 8 20v60z" fill="#08052a"/>`;

  let mesa=`<rect x="20" y="150" width="160" height="14" fill="#e8d8b0"/>`;
  mesa+=`<rect x="30" y="164" width="140" height="50" fill="#1a1245" opacity=".6"/>`;
  for(let k=0;k<7;k++){
    const u=k===3?-8:0;
    mesa+=`<circle cx="${34+k*22}" cy="${128+u}" r="9" fill="#e8b88f"/>`;
    mesa+=`<rect x="${25+k*22}" y="${138+u}" width="18" height="14" fill="${k===3?"#c0392b":"#4a5fc4"}"/>`;
  }

  const mona=`<path d="M30 250c0-70 30-125 70-125s70 55 70 125z" fill="#3a2a22"/>`
    +`<path d="M60 100c0-30 80-30 80 0v30c0 10-80 10-80 0z" fill="#241812"/>`
    +`<circle cx="100" cy="100" r="24" fill="#e8b88f"/>`
    +`<path d="M90 110q10 5 20 0" stroke="#7a3b2b" stroke-width="2" fill="none"/>`;

  const mao=`<path d="M15 150q55-30 80 0" stroke="#e8b88f" stroke-width="12" fill="none" stroke-linecap="round"/>`
    +`<path d="M185 140q-55-25-80 5" stroke="#e8b88f" stroke-width="12" fill="none" stroke-linecap="round"/>`;

  let flor=`<path d="M80 250l5-70h30l5 70z" fill="#b8893a"/>`;
  [[70,120,24],[110,100,26],[140,135,22]].forEach(f=>{
    flor+=`<circle cx="${f[0]}" cy="${f[1]}" r="${f[2]}" fill="#ffc933"/>`;
    flor+=`<circle cx="${f[0]}" cy="${f[1]}" r="${f[2]/2.5}" fill="#5a3a1a"/>`;
  });

  let juizo=`<circle cx="100" cy="125" r="78" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="10"/>`
    +`<circle cx="100" cy="125" r="52" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="8"/>`;
  for(let k=0;k<12;k++){
    const a=k/12*Math.PI*2;
    const x=(100+Math.cos(a)*65).toFixed(1);
    const y=(125+Math.sin(a)*65).toFixed(1);
    juizo+=`<circle cx="${x}" cy="${y}" r="7" fill="#e8b88f"/>`;
  }
  juizo+=`<path d="M84 140l-24-28M116 140l24-28" stroke="#e8b88f" stroke-width="8" fill="none" stroke-linecap="round"/>`
    +`<path d="M82 178c0-26 36-26 36 0v18H82z" fill="#c0392b"/>`
    +`<circle cx="100" cy="122" r="14" fill="#e8b88f"/>`;

  const motivos={noite:noite+noite2+noite3, mesa:mesa, mona:mona, mao:mao, flor:flor, juizo:juizo};
  const mo=motivos[q.m]||"";

  return `<svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice">`
    +`<defs><linearGradient id="g${i}" x1="0" y1="0" x2="1" y2="1">`
    +`<stop offset="0" stop-color="${q.c[0]}"/>`
    +`<stop offset="1" stop-color="${q.c[1]}"/></linearGradient></defs>`
    +`<rect width="200" height="250" fill="url(#g${i})"/>`
    +`<g fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="5">`
    +`<path d="M0 140c30-40 60 30 100-5s60-30 100 10"/>`
    +`<path d="M0 180c40-30 70 20 110-5s60-15 90 5"/></g>`
    +`${e}${mo}</svg>`;
}

function retrato(p,x="p"){
  const id=x+p.n.length;
  const corte = x==="p" ? "" : `preserveAspectRatio="xMidYMid slice" `;
  let r=`<svg ${corte}viewBox="0 0 200 240">`;
  r+=`<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">`;
  r+=`<stop offset="0" stop-color="${p.bg[0]}"/><stop offset="1" stop-color="${p.bg[1]}"/></linearGradient></defs>`;
  r+=`<rect width="200" height="240" fill="url(#${id})"/>`;
  r+=`<g fill="#ffd24a" opacity=".8"><circle cx="30" cy="35" r="5"/><circle cx="165" cy="50" r="7"/><circle cx="150" cy="20" r="3"/></g>`;
  r+=`<path d="M30 240c0-50 30-70 70-70s70 20 70 70z" fill="#1a1245"/>`;
  if(p.longa){ r+=`<path d="M55 90c-10 70 0 110 20 100l50 0c20 10 30-30 20-100z" fill="${p.cab}"/>`; }
  r+=`<ellipse cx="100" cy="105" rx="40" ry="50" fill="${p.pele}"/>`;
  if(p.barba){ r+=`<path d="M62 115c5 50 25 62 38 62s33-12 38-62c-10 18-25 20-38 20s-28-2-38-20z" fill="${p.cab}"/>`; }
  r+=`<path d="M60 90c0-40 80-40 80 0-20-18-60-18-80 0z" fill="${p.cab}"/>`;
  if(p.chapeu){
    if(p.longa){ r+=`<ellipse cx="100" cy="62" rx="42" ry="16" fill="${p.chapeu}"/>`; }
    else{
      r+=`<ellipse cx="100" cy="68" rx="62" ry="10" fill="${p.chapeu}"/>`;
      r+=`<path d="M62 68c0-40 76-40 76 0z" fill="${p.chapeu}"/>`;
      r+=`<rect x="62" y="58" width="76" height="7" fill="#8a2b4a"/>`;
    }
  }
  r+=`<circle cx="84" cy="102" r="4" fill="#222"/><circle cx="116" cy="102" r="4" fill="#222"/>`;
  r+=`<path d="M90 128q10 6 20 0" stroke="#7a3b2b" stroke-width="3" fill="none"/></svg>`;
  return r;
}

function montaPintores(atual){
  const el=document.getElementById("pintores");
  if(!el) return;
  el.innerHTML=pintores.map((p,i)=>
    `<a class="av${i===atual?" on":""}" href="pintor.html?p=${i}" title="${p.n}" aria-label="${p.n}">${retrato(p,"a")}</a>`
  ).join("");
}

(function(){
  const r=document.documentElement;
  const b=document.getElementById("tema");
  if(!b) return;
  const rot=()=>{ b.textContent=r.dataset.theme==="light"?"☾ Modo escuro":"☀ Modo claro"; };
  rot();
  b.onclick=()=>{
    r.dataset.theme=r.dataset.theme==="light"?"dark":"light";
    try{ localStorage.setItem("im3d_tema",r.dataset.theme); }catch(e){}
    rot();
  };
})();
