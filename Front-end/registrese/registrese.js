document.addEventListener("DOMContentLoaded", function () {

 connect2Server(3000);

  const botonRegistrar = document.getElementById("BotondeRegistrar");
  const contraseña1 = document.getElementById("CajaDeContraseña");
  const contraseña2 = document.getElementById("CajaDeContraseña2");
  const divError = document.getElementById("BotonError");
  const mensajeError = document.getElementById("MensajeDeError");
  const nombre = document.getElementById("CajaDeNombre");
  const apellido = document.getElementById("CajaDeApellido");
  const curso = document.getElementById("CajaDeCurso");
  const orientacion = document.getElementById("CajaDeOrientacion");
  const mail = document.getElementById("CajaDeMail");
  let idUsuario;

  botonRegistrar.addEventListener("click", function (event) {
    event.preventDefault(); 
    const nombreValor = nombre.value.trim();
    const apellidoValor = apellido.value.trim();
    const cursoValor  = curso.value.trim();
    const orientacionValor = orientacion.value.trim();
    const mailValor = mail.value.trim();
    const pass1 = contraseña1.value.trim();
    const pass2 = contraseña2.value.trim();

    
    if (nombreValor === "" || apellidoValor === "" || cursoValor === "" || orientacionValor === ""|| mailValor === "" || pass1 === "" || pass2 === "") {
      mensajeError.textContent = "ERROR: ASEGÚRESE DE COMPLETAR TODOS LOS CAMPOS";
      idUsuario ++;
      console.log(idUsuario);
      divError.style.display = "flex";  
      mensajeError.style.display = "block";
    } else if (pass1 !== pass2) {
      mensajeError.textContent = "ERROR: ASEGÚRESE DE REPETIR LA CONTRASEÑA CORRECTAMENTE";
      divError.style.display = "flex";
      mensajeError.style.display = "block";
    } else {
      
      divError.style.display = "none";
      mensajeError.style.display = "none";
      postEvent("registro", {id: null, user: nombreValor, apellido: apellidoValor, curso: cursoValor, orientación: orientacionValor, mail: mailValor, contraseña: pass1, favoritos: [], carrito: [], productosPublicados: [], productosVendidos: 0}, function(respuesta) {
      if(respuesta === 0)
      {
        window.location.href = "../Inicio/Inicio.html";
      } 
      else if(respuesta === 1)
      {
        mensajeError.textContent = "ERROR: ESE USUARIO YA ESTÁ EN USO";
        divError.style.display = "flex";
        mensajeError.style.display = "block";
      }
      else if(respuesta === 2)
      {
        mensajeError.textContent = "ERROR: ESE MAIL YA ESTÁ EN USO";
        divError.style.display = "flex";
        mensajeError.style.display = "block";
      }
      });
    }
  });
});