let cantidadProductos = 0;
let precioTotal = 0;

const productos = [
  { nombre: "Cuaderno A4", precio: 1600 },
  { nombre: "Lapicera BIC azul", precio: 400 },
  { nombre: "Lápiz de grafito", precio: 300 }
];


document.querySelectorAll(".btn-agregar").forEach((boton, index) => {
  boton.addEventListener("click", () => {
    cantidadProductos++;
    precioTotal += productos[index].precio;
    actualizarResumen();
  });
});

function actualizarResumen() {
  document.getElementById("cantidad").innerText = cantidadProductos;
  document.getElementById("total").innerText = "$" + precioTotal;
}
document.getElementById("botoncompracarrito").addEventListener("click", () => {
  if (cantidadProductos === 0) {
    alert("⚠️ No agregaste productos al carrito.");
  } else {
    alert("✅ Compra realizada con éxito.\nProductos: " + cantidadProductos + "\nTotal: $" + precioTotal);
  }
});
