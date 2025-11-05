// 🔹 MODO EDICIÓN DE DATOS DE USUARIO

const botonEditar = document.getElementById("botonEditar");
const cursoTexto = document.getElementById("cursoTexto");
const cursoInput = document.getElementById("cursoInput");
const orientacionTexto = document.getElementById("orientacionTexto");
const orientacionInput = document.getElementById("orientacionInput");

let modoEdicion = false;

botonEditar.addEventListener("click", () => {
  if (!modoEdicion) {
    // Cambiar a modo edición
    cursoInput.value = cursoTexto.textContent;
    orientacionInput.value = orientacionTexto.textContent;

    cursoTexto.style.display = "none";
    orientacionTexto.style.display = "none";
    cursoInput.style.display = "block";
    orientacionInput.style.display = "block";

    botonEditar.textContent = "GUARDAR";
    modoEdicion = true;
  } else {
    // Guardar cambios y volver a modo texto
    cursoTexto.textContent = cursoInput.value;
    orientacionTexto.textContent = orientacionInput.value;

    cursoTexto.style.display = "block";
    orientacionTexto.style.display = "block";
    cursoInput.style.display = "none";
    orientacionInput.style.display = "none";

    botonEditar.textContent = "EDITAR";
    modoEdicion = false;
  }
});
