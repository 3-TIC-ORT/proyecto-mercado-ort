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
        Imagen: "imagen" }
        
]
 
 
let productos =[];




  function MostrarProductos(lista) {
    ProductosContainer.innerHTML = "";
 
    lista.forEach(producto => {
      ProductosContainer.innerHTML += `
      <div class = "productos">
      <p>${producto.Imagen}</p>
        <h4 class = "titulos">${producto.nombre}</h4>
        <p class = "categoria">${producto.categoria}</p>
        <p class = "valoracion"> vendedor: ${producto.valoracion}</p>
        <div class = "cuadradoAzulProducto"></div>
      </div>
    `});
  }


  MostrarProductos(lista);
