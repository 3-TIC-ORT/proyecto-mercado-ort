document.addEventListener("DOMContentLoaded", function () {

  const botonRegistrar = document.getElementById("BotondeRegistrar");
  const contraseña1 = document.getElementById("CajaDeContraseña");
  const contraseña2 = document.getElementById("CajaDeContraseña2");
  const divError = document.getElementById("BotonError");
  const mensajeError = document.getElementById("MensajeDeError");
  const nombre = document.getElementById("CajaDeNombre");
  const apellido = document.getElementById("CajaDeApellido");
  const dni = document.getElementById("CajaDeDNI");
  const mail = document.getElementById("CajaDeMail");
  const id = null;

  botonRegistrar.addEventListener("click", function (event) {
    event.preventDefault(); 
    const nombreValor = nombre.value.trim();
    const apellidoValor = apellido.value.trim();
    const dniValor  = dni.value.trim();
    const mailValor = mail.value.trim();
    const pass1 = contraseña1.value.trim();
    const pass2 = contraseña2.value.trim();

    
    if (nombreValor === "" || apellidoValor === "" || dniValor === "" || mailValor === "" || pass1 === "" || pass2 === "") {
      mensajeError.textContent = "ERROR: ASEGÚRESE DE COMPLETAR TODOS LOS CAMPOS";
      divError.style.display = "flex";
      mensajeError.style.display = "block";
    } else if (pass1 !== pass2) {
      mensajeError.textContent = "ERROR: ASEGÚRESE DE REPETIR LA CONTRASEÑA CORRECTAMENTE";
      divError.style.display = "flex";
      mensajeError.style.display = "block";
    } else {
      
      divError.style.display = "none";
      mensajeError.style.display = "none";

      
      window.location.href = "../Inicio/Inicio.html";
      postEvent("registro", {user: nombreValor, apellido: apellidoValor, dni: dniValor, mail: mailValor, contraseña: pass1, favoritos: null, carrito: null}, function(respuesta) {
      console.log("Respuesta del backend:", respuesta);
      if()
      {

      } 
      });
    }
  });
});

  