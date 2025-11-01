let botonInicioDeSesion = document.getElementById("BotonDeIniciarSesion");
let DNI = document.getElementById("CajaDeDNI");
let Contraseña = document.getElementById("CajaDeContraseña");
let cajaError = document.getElementById("BotonError");
let mensajeDeError = document.getElementById("MensajeDeError");

connect2Server(3000); 

botonInicioDeSesion.addEventListener("click", function() {
    let contraseñafinal = Contraseña.value.trim();
    let usuariofinal = DNI.value.trim();
    console.log("front");
    


postEvent("inicioSesion", {user: usuariofinal,contraseña: contraseñafinal}, 
function(respuesta) 
{
    if(respuesta)
    {
      cajaError.style.display = "none";
      mensajeDeError.style.display = "none";
      window.location.href = "../Inicio/Inicio.html";
    }
    else
    {
      cajaError.style.display = "inline-block";
      mensajeDeError.style.display = "inline-block";
    }

});
});