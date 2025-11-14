let productos = []; // acá guardamos todo

getEvent("productosPublicados", function (lista) {
    productos = lista; // guardamos la lista de productos
    mostrarProductos(productos); // mostrarlos al cargar
});
const buscador = document.getElementById("Búsqueda");

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase().trim();

    // Filtrar productos por nombre
    const resultados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(resultados); // mostrar filtrados
});
function mostrarProductos(lista) {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = ""; // limpiar

    lista.forEach(prod => {
        const item = document.createElement("div");
        item.classList.add("producto");
        item.innerHTML = `
            <img src="${prod.url}" class="producto-img">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio}</p>
        `;
        contenedor.appendChild(item);
    });
}



document.getElementById("favorito").addEventListener("click", function () {
    if (this.textContent === "♡") {
      this.textContent = "♥"; 
      this.style.color = "red";
    } else {
      this.textContent = "♡"; 
      this.style.color = "black";
    }
  });
  

  document.querySelector(".comprar").addEventListener("click", function () {
    alert("¡Gracias por tu compra!");
  });
  
 
  document.querySelector(".carrito").addEventListener("click", function () {
    alert("Producto agregado al carrito");
  });
  


  const inputBusqueda = document.getElementById("Búsqueda");

inputBusqueda.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let texto = inputBusqueda.value;
        // Guardamos lo buscado para usarlo en Inicio
        localStorage.setItem("busqueda", texto);
        window.location.href = "../Inicio/Inicio.html"; 
    }
});
