document.addEventListener("DOMContentLoaded", function () {
  const botonRegistrar = document.getElementById("BotondeRegistrar");
  const contraseña1 = document.getElementById("CajaDeContraseña");
  const contraseña2 = document.getElementById("CajaDeContraseña2");
  const divError = document.getElementById("BotonError");
  const mensajeError = document.getElementById("MensajeDeError");

  botonRegistrar.addEventListener("click", function (event) {
    event.preventDefault(); 

    const pass1 = contraseña1.value.trim();
    const pass2 = contraseña2.value.trim();

    
    if (pass1 === "" || pass2 === "") {
      mensajeError.textContent = "ERROR: ASEGÚRESE DE COMPLETAR AMBAS CONTRASEÑAS";
      divError.style.display = "flex";
      mensajeError.style.display = "block";
    } else if (pass1 !== pass2) {
      mensajeError.textContent = "ERROR: ASEGÚRESE DE REPETIR LA CONTRASEÑA CORRECTAMENTE";
      divError.style.display = "flex";
      mensajeError.style.display = "block";
    } else {
   
      divError.style.display = "none";
      mensajeError.style.display = "none";

  
      console.log("Registro exitoso");
            window.location.href = "../Inicio/Inicio.html";
    }
  });
});

  