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
    uploadBox.style.backgroundPosition = "center";
    uploadBox.style.backgroundRepeat = "no-repeat";
  };
  reader.readAsDataURL(file);
});


const btnEditar = document.getElementById("btnEditar");
let editando = false;

btnEditar.addEventListener("click", () => {
  const campos = document.querySelectorAll(".PerfilContenido input[type='text']");

  if (!editando) {

    campos.forEach((campo, i) => {
      campo.removeAttribute("readonly");
      campo.readOnly = false;
      campo.classList.add("editing-active");

      if (i === 0) {
        campo.focus();
        const val = campo.value;
        campo.setSelectionRange(val.length, val.length);
      }
    });


    uploadBox.style.pointerEvents = "none";

    btnEditar.textContent = "GUARDAR";
    editando = true;

  } else {

    campos.forEach((campo) => {
      campo.setAttribute("readonly", "true");
      campo.readOnly = true;
      campo.classList.remove("editing-active");
    });

    uploadBox.style.pointerEvents = "auto";

    btnEditar.textContent = "EDITAR";
    alert("Datos guardados correctamente ");

    editando = false;
  }
});





