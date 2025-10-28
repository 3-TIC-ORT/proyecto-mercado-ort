document.getElementById("BotonDeIniciarSesion").addEventListener("click",ValidarDNI)
function ValidarDNI() {
    let DNI = document.getElementById("CajaDeDNI").value;
    let Contraseña = document.getElementById("CajaDeContraseña").value;
    let MensajeDeError = document.getElementById("MensajeDeError")


if (DNI !== "49961473" || Contraseña !== "Hola") {
   MensajeDeError.style.color = "red";
   MensajeDeError.textContent = "ERROR No se encontro el usuario. El DNI o contraseña puede ser incorrecta"


} else {
    MensajeDeError.style.color = "green";
    MensajeDeError.textContent = "DNI correcto"
}
}

