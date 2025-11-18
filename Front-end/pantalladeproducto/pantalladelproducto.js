
const productos = [
  {
    id: 1,
    nombre: "Lapicera Bic Azul",
    precio: 1000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMYqmziDswrb7_SZYQMEh6RmWHjpqD-d4YA&s"
  },
  {
    id: 2,
    nombre: "Cuaderno A4 Rayado",
    precio: 2500,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_961989-MLA54950334467_042023-F.webp"
  },
  {
    id: 3,
    nombre: "Calculadora Científica",
    precio: 9000,
    imagen: "https://images.fravega.com/f1000/f94ce3c799c0ac7448d3de59ddfcbe4d.jpg"
  },
  {
    id: 4,
    nombre: "Regla 30cm",
    precio: 500,
    imagen: "https://m.media-amazon.com/images/I/61kJrNRPjKL._AC_SL1500_.jpg"
  }
];


const buscador = document.getElementById("Busqueda");

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  const resultados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  );

  mostrarResultados(resultados);
});


let contenedorResultados = document.getElementById("resultadosBusqueda");
contenedorResultados.style.position = "absolute";
contenedorResultados.style.background = "white";
contenedorResultados.style.maxHeight = "300px";
contenedorResultados.style.overflowY = "auto";
contenedorResultados.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
contenedorResultados.style.borderRadius = "10px";
contenedorResultados.style.zIndex = "1000";
contenedorResultados.style.display = "none";
contenedorResultados.style.width = buscador.offsetWidth + "px";

document.body.appendChild(contenedorResultados);

function posicionarResultados() {
  const rect = buscador.getBoundingClientRect();

  contenedorResultados.style.top = rect.bottom + window.scrollY + "px";
  contenedorResultados.style.left = rect.left + window.scrollX + "px";
  contenedorResultados.style.width = rect.width + "px";
}


function mostrarResultados(lista) {
  if (lista.length === 0) {
    contenedorResultados.style.display = "none";
    return;
  }

  contenedorResultados.innerHTML = "";
  contenedorResultados.style.display = "block";

  posicionarResultados(); 

  lista.forEach(item => {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.padding = "10px";
    div.style.cursor = "pointer";
    div.style.borderBottom = "1px solid #eee";

    div.innerHTML = `
      <img src="${item.imagen}" width="40" height="40" style="border-radius:5px; margin-right:10px;">
      <span>${item.nombre}</span>
    `;

    div.addEventListener("click", () => {
      window.location.href = "pantalladelproducto.html?id=" + item.id;
    });

    contenedorResultados.appendChild(div);
  });
}


document.addEventListener("click", (e) => {
  if (!buscador.contains(e.target) && !contenedorResultados.contains(e.target)) {
    contenedorResultados.style.display = "none";
  }
});
