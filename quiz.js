/* ===== Catálogo com todos os quadros ===== */
montaPintores(-1);

const container = document.getElementById("lista-quadros");

container.innerHTML = quadros.map((q, i) => `
  <article class="obra">
    <a class="moldura" href="index.html?q=${i}#oquadro" aria-label="Ver ${q.n}">
      ${arte(q, i + 10)}
    </a>
    <div>
      <span class="artist">${q.art}</span>
      <h3>${q.n}</h3>
      <p class="meta"><b>Quando foi feito:</b> ${q.ano}</p>
      <p>${q.txt}</p>
      <p><b>O que transmite:</b> ${q.inf.join(", ")}.</p>
    </div>
  </article>
`).join("");
