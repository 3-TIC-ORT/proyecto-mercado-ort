
const uploadBox = document.getElementById("uploadbox");
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
    uploadBox.style.backgroundRepeat = "center";
    uploadBox.style.backgroundPosition = "no-repeat";
  };
  reader.readAsDataURL(file);
});

const btnEditar = document.getElementById("btnEditar");
let CursoInput = document.getElementById("curso");
let editando = false;

getEvent("editarUsuario", 

function(respuesta) {
 
  });

btnEditar.addEventListener("click", () => {
  const campos = document.querySelectorAll("#nombreUsuario, #curso, #orientacion, #objetos");

  if (!editando) {
    campos.forEach(campo => campo.removeAttribute("readonly"));
    btnEditar.textContent = "GUARDAR";
    editando = true;
  } else {
    campos.forEach(campo => campo.setAttribute("readonly", true));
    btnEditar.textContent = "EDITAR";
    alert("Datos guardados correctamente ✅");
    editando = false;
  }
});





