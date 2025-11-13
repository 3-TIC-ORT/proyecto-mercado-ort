// Conectar con el backend
connect2Server(3000);

// Obtener los elementos del HTML
const botonPublicar = document.getElementById("publicarproducto");
const inputs = document.querySelectorAll(".derecha input");
const inputImagen = document.getElementById("imagenPrincipal");

botonPublicar.addEventListener("click", () => {
  // Crear el objeto producto con los datos del formulario
  const producto = {
    idUsuario: 1, // ⚠️ Cambiar esto: poner el ID real del usuario logueado
    idProducto: Date.now(), // número único
    nombre: inputs[0].value,
    descripcion: inputs[1].value,
    precio: inputs[2].value,
    caracteristicas: inputs[3].value,
    informacion: inputs[4].value,
    imagenes: []
  };

  // Si se sube una imagen, convertirla a base64
  const archivo = inputImagen.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function() {
      producto.imagenes.push(lector.result);

      // Enviar el producto al backend
      enviarProducto(producto);
    };
    lector.readAsDataURL(archivo);
  } else {
    // Si no hay imagen igual lo enviamos
    enviarProducto(producto);
  }
});

function enviarProducto(producto) {
  postEvent("publicar", producto, (respuesta) => {
    console.log("Producto publicado:", respuesta);
    alert(" Producto publicado correctamente");
  });
}




document.querySelector(".upload-box").addEventListener("click", () => {
    document.getElementById("imagenPrincipal").click();
  });
  

  document.getElementById("publicarproducto").addEventListener("click", () => {
    alert(" Tu producto fue publicado con éxito!");
  });
  