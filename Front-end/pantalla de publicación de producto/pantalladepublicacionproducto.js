
connect2Server(3000);


const botonPublicar = document.getElementById("publicarproducto");
const inputs = document.querySelectorAll(".derecha input");
const inputImagen = document.getElementById("imagenPrincipal");

botonPublicar.addEventListener("click", () => {

  const producto = {
    idUsuario: 1,
    idProducto: Date.now(), 
    nombre: inputs[0].value,
    descripcion: inputs[1].value,
    precio: inputs[2].value,
    caracteristicas: inputs[3].value,
    informacion: inputs[4].value,
    imagenes: []
  };

  const archivo = inputImagen.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function() {
      producto.imagenes.push(lector.result);

      enviarProducto(producto);
    };
    lector.readAsDataURL(archivo);
  } else {
 
    enviarProducto(producto);
  }
});

function enviarProducto(producto) {
  postEvent("publicar", producto, (respuesta) => {
    console.log("Producto publicado:", respuesta);
    alert(" Producto publicado correctamente");
  });
}




const uploadBox = document.querySelector(".upload-box");
const inputFile = document.getElementById("imagenPrincipal");

 uploadBox.addEventListener("click", () => {
  inputFile.click();
});

 inputFile.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    uploadBox.style.backgroundImage = `url(${reader.result})`;
    uploadBox.style.backgroundSize = "cover";
    uploadBox.style.backgroundPosition = "center";
    uploadBox.textContent = ""; 
  };
  reader.readAsDataURL(file);
});

 document.getElementById("publicarproducto").addEventListener("click", () => {
  alert("Tu producto fue publicado con éxito!");
});

