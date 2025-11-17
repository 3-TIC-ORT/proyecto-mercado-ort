const lista = [
    { nombre: "Lápiz", valoracion: "5", precio: 500, Imagen: "img/lapiz.png" },
    { nombre: "Cuaderno", valoracion: "4", precio: 1200, Imagen: "img/cuaderno.png" },
    { nombre: "Mochila negra", valoracion: "3", precio: 9000, Imagen: "img/mochila.png" }
  ];
  
  
  
  
  const ProductosContainer = document.getElementById("Productos-container");
  const precioTotalSpan = document.getElementById("precioTotal");
  const cantidadTotalSpan = document.getElementById("cantidadTotal");
  
  
  
  
  function MostrarProductos(lista) {
    ProductosContainer.innerHTML = "";
  
  
    lista.forEach(producto => {
      ProductosContainer.innerHTML += `
        <div class="productos">
          <div class="cuadradoAzulProducto1"></div>
  
  
          <div class="info">
            <h4 class="titulos">${producto.nombre}</h4>
            <p class="valoracion">Vendedor: ${producto.valoracion}</p>
            <p class="precio">$${producto.precio}</p>
          </div>
        </div>
      `;
    });
  
  
    precioTotalSpan.textContent = "$" + lista.reduce((acc, p) => acc + p.precio, 0);
    cantidadTotalSpan.textContent = lista.length;
  }
  
  
  MostrarProductos(lista);
  
  
  