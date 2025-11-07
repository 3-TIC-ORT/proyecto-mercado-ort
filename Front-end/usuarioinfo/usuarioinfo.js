const btnEditar = document.getElementById("btnEditar");
let editando = false;

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
