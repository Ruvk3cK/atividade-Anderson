/* ===== Linha do tempo dos quadros ===== */
montaPintores(-1);

const lista = document.getElementById("timeline-lista");

lista.innerHTML = quadros.map((q, i) => `
  <li style="align-items: flex-start; padding: 14px 0 14px 18px;">
    <span class="dot" style="margin-top: 4px;"></span>
    <div>
      <span class="artist">${q.ano}</span>
      <h3 style="margin: 6px 0 4px; font-size: 22px;">${q.n} — ${q.art}</h3>
      <p style="margin: 0 0 8px;">${q.txt}</p>
      <a class="ver" href="index.html?q=${i}#oquadro">Ver na galeria →</a>
    </div>
  </li>
`).join("");
