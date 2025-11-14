fetch('productos.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
    MostrarComidas(comidas);
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });


//TERMINAR ESTO
  //const tituloCategoria = document.getElementById("tituloCategoria");
  //const filtroCategoria = document.getElementById("filtroCategoria");
  
  //tituloCategoria.addEventListener("click", () => {
    //filtroCategoria.classList.toggle("oculto");
  //});



const ProductosContainer = document.getElementById("Productos-container")
//Esto seria el JSON de productos
  const lista = [  
    { nombre: "Empanadas",
        categoria: "Utiles escolares",
        valoracion: "5",
        Imagen: "imagen" },
   
    { nombre: "Asado",
        categoria: "Mochilas",
        valoracion: "3",
        Imagen: "imagen" },

        { nombre: "Empanadas",
          categoria: "Utiles escolares",
          valoracion: "5",
          Imagen: "imagen" },
     
        
]
 
 
let productos =[];




  function MostrarProductos(lista) {
    ProductosContainer.innerHTML = "";
 
    lista.forEach(producto => {
      ProductosContainer.innerHTML += `
      <div class = "productos">
      <p>${producto.Imagen}</p>
      <div class = "cuadradoAzulProducto1"></div>
      <div class = "cuadradoAzulProducto2"></div>
        <h4 class = "titulos">${producto.nombre}</h4>
        <p class = "valoracion"> vendedor: ${producto.valoracion}</p>

      </div>
    `});
  }


  MostrarProductos(lista);





  //MATI, ESTO QUE VOY A PONER ABAJO ES DE VICEN, ESTOY PROBANDO A VER SI FUNCIONA 
  //LA BARRA DE BUSQUEDA, NO TE PREOCUPES NO TE BORRE NADA.

  
// 1) Traigo los productos del backend
getEvent("productosPublicados", function(productos) {

    const inputBusqueda = document.getElementById("Búsqueda");
    const contenedor = document.getElementById("contenedor-productos");

    // Mostrar todos de entrada
    mostrarProductos(productos);

    // 2) Cada vez que escribís, filtra
    inputBusqueda.addEventListener("input", function() {

        let texto = inputBusqueda.value.toLowerCase();

        let filtrados = productos.filter(p =>
            p.nombre.toLowerCase().includes(texto) ||
            p.descripcion.toLowerCase().includes(texto)
        );

        mostrarProductos(filtrados);

    });

    // Función que dibuja tarjetas
    function mostrarProductos(lista) {
        contenedor.innerHTML = "";

        lista.forEach(p => {

            let card = document.createElement("div");
            card.classList.add("tarjeta-producto");

            card.innerHTML = `
                <img src="${p.imagenes}" class="img-producto">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button onclick="verProducto(${p.idProducto})">Ver</button>
            `;

            contenedor.appendChild(card);
        });
    }
});

