const tituloCategoria = document.querySelector(".Categoria");
const filtroCategoria = document.getElementById("filtroCategoria");
const filtroAño = document.getElementById("añoLabel");


if (tituloCategoria && filtroCategoria) {
  tituloCategoria.addEventListener("click", () => {
    filtroCategoria.classList.toggle("oculto");
  });
}


const ProductosContainer = document.getElementById("Productos-container");


// JSON de productos con precios de a pares
const lista = [  
  { nombre: "lapiz", categoria: "Utiles escolares", valoracion: "5", año: "1", Imagen: "imagen", precio: 500 },  
  { nombre: "Mochila negra", categoria: "Mochilas", valoracion: "3", año: "1", Imagen: "imagen", precio: 500 },
  { nombre: "Cuaderno", categoria: "Cuadernos", valoracion: "5", año: "3", Imagen: "imagen", precio: 1000 },
  { nombre: "lapicera", categoria: "Utiles escolares", valoracion: "5", año:"4", Imagen: "imagen", precio: 1000 },
  { nombre: "Mochila azul", categoria: "Mochilas", valoracion: "3", año:"5", Imagen: "imagen", precio: 1500 },
  { nombre: "cartuchera", categoria: "Utiles escolares", valoracion: "5", año:"2", Imagen: "imagen", precio: 1500 },
  { nombre: "hoja cuadriculada", categoria: "Hojas", valoracion: "5", año:"5", Imagen: "imagen", precio: 2000 },
  { nombre: "Mochila verde", categoria: "Mochilas", valoracion: "3", año:"2", Imagen: "imagen", precio: 2000 },
  { nombre: "calculadora cientifica", categoria: "Utiles escolares", valoracion: "5", año:"2", Imagen: "imagen", precio: 2500 },
  { nombre: "Libro de etica", categoria: "Utiles escolares", valoracion: "5", año:"5", Imagen: "imagen", precio: 2500 },
];


let categoriaSeleccionada = "";
let añoSeleccionado = "";
let textoBusqueda = "";  
let precioMin = "";
let precioMax = "";


// para que las tildes no rompan el codigo
function normalizar(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


// Mostrar productos
function MostrarProductos(lista) {
  ProductosContainer.innerHTML = "";
 
  lista.forEach(producto => {
    ProductosContainer.innerHTML += `
      <div class="productos">
        <p>${producto.Imagen}</p>
        <div class="cuadradoAzulProducto1"></div>
        <div class="cuadradoAzulProducto2"></div>
        <h4 class="titulos">${producto.nombre}</h4>
        <p class="valoracion"> vendedor: ${producto.valoracion}</p>
        <p class="precio"> $${producto.precio} </p>
      </div>
    `;
  });
}


// BARRA DE BÚSQUEDA
const busquedaInput = document.getElementById("Búsqueda");
busquedaInput.addEventListener("input", (e) => {
  textoBusqueda = normalizar(e.target.value.trim());
  aplicarFiltros();
});


// Inputs de precio
const precioMinInput = document.getElementById("precioMin");
const precioMaxInput = document.getElementById("precioMax");


precioMinInput.addEventListener("input", (e) => {
  precioMin = e.target.value !== "" ? parseFloat(e.target.value) : "";
  aplicarFiltros();
});


precioMaxInput.addEventListener("input", (e) => {
  precioMax = e.target.value !== "" ? parseFloat(e.target.value) : "";
  aplicarFiltros();
});


// Aplicar filtros
function aplicarFiltros() {
  const filtrados = lista.filter(producto => {


    const coincideCategoria =
      categoriaSeleccionada === "" ||
      normalizar(producto.categoria) === categoriaSeleccionada;


    const coincideAño =
      añoSeleccionado === "" ||
      producto.año === añoSeleccionado;


    const coincideBusqueda =
      textoBusqueda === "" ||
      normalizar(producto.nombre).includes(textoBusqueda) ||
      normalizar(producto.categoria).includes(textoBusqueda);


    const coincidePrecio =
      (precioMin === "" || producto.precio >= precioMin) &&
      (precioMax === "" || producto.precio <= precioMax);


    return coincideCategoria && coincideAño && coincideBusqueda && coincidePrecio;
  });


  MostrarProductos(filtrados);
}


//   DROPDOWN CATEGORÍA
const categoriaLabel = document.getElementById("categoriaLabel");
const categoriaMenu = document.getElementById("categoriaMenu");
const flecha = document.querySelector(".flecha");


document.querySelectorAll("#categoriaMenu p").forEach(op => {
  op.addEventListener("click", (e) => {
    categoriaSeleccionada = normalizar(e.target.textContent.trim());
    categoriaMenu.classList.remove("abierto");
    flecha.classList.remove("abierta");
    aplicarFiltros();
  });
});


// Abrir/cerrar categoría
categoriaLabel.addEventListener("click", (e) => {
  e.stopPropagation();
  categoriaMenu.classList.toggle("abierto");
  flecha.classList.toggle("abierta");
});


// Cerrar si clickeas afuera
document.addEventListener("click", () => {
  categoriaMenu.classList.remove("abierto");
  flecha.classList.remove("abierta");
});


//      DROPDOWN AÑO
const añoLabel = document.getElementById("añoLabel");
const añoMenu = document.getElementById("añoMenu");
const flechaAño = añoLabel.querySelector(".flecha");


// Abrir/cerrar año
añoLabel.addEventListener("click", (e) => {
  e.stopPropagation();
  añoMenu.classList.toggle("abierto");
  flechaAño.classList.toggle("rotate");
});


// solo agarra los números de Año
document.querySelectorAll("#añoMenu p").forEach(op => {
  op.addEventListener("click", (e) => {
    añoSeleccionado = e.target.textContent.match(/\d+/)?.[0] || "";
    añoMenu.classList.remove("abierto");
    flechaAño.classList.remove("rotate");
    aplicarFiltros();
  });
});


// Cerrar si clickeas afuera
document.addEventListener("click", () => {
  añoMenu.classList.remove("abierto");
  flechaAño.classList.remove("rotate");
});


// boton para borrar filtros
const botonBorrarFiltros = document.getElementById("botonBorrarFiltros");


botonBorrarFiltros.addEventListener("click", () => {
  categoriaSeleccionada = "";
  añoSeleccionado = "";
  textoBusqueda = "";
  precioMin = "";
  precioMax = "";
  busquedaInput.value = "";
  precioMinInput.value = "";
  precioMaxInput.value = "";
  categoriaMenu.classList.remove("abierto");
  flecha.classList.remove("abierta");
  añoMenu.classList.remove("abierto");
  flechaAño.classList.remove("rotate");


  MostrarProductos(lista);
});


MostrarProductos(lista);




