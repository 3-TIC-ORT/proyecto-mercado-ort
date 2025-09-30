function seleccionar(nombre) {
    document.getElementById("seleccionado").innerHTML = `<img src="${nombre}" alt="Medio de pago">`;
}
let carrito = [
    { nombre: "Cartuchera", precio: 3000, cantidad: 1 },
    { nombre: "Lapicera", precio: 500, cantidad: 1 }
  ];


  function agregarProducto(nombre, precio, cantidad = 1) {
      let productoExistente = carrito.find(p => p.nombre === nombre);


      if (productoExistente) {
          productoExistente.cantidad += cantidad;
      } else {
          carrito.push({ nombre, precio, cantidad});
      }
  }
