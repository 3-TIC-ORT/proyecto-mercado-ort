let cantidadProductos = 0;
let precioTotal = 0;

const productos = [
  { nombre: "Cuaderno A4", precio: 1600 },
  { nombre: "Lapicera BIC azul", precio: 400 },
  { nombre: "Lápiz de grafito", precio: 300 }
];

const botones = document.querySelectorAll(".producto button");
const cantidadSpan = document.getElementById("cantidad");
const totalSpan = document.getElementById("total");


botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    cantidadProductos++;
    precioTotal += productos[index].precio;

    cantidadSpan.textContent = cantidadProductos;
    totalSpan.textContent = `$${precioTotal}`;
  });
});
