const btnEditar = document.getElementById("btnEditar");
let CursoInput = document.getElementById("curso");
let editando = false;

getEvent("editarUsuario", 
//respuesta representa lo que te devuelve el back
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
