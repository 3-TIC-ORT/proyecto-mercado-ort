let usuario = document.getElementById ("usuario")
let contraseña = document.getElementById ("contraseña")
let botonRegistrarse = document.getElementById ("botonRegistro")
let botonIniciarSesion = document.getElementById ("botonLogin")
let botonLapicera = document.getElementById ("lapicera")
let botonCuaderno = document.getElementById ("cuaderno")
let agregar = false;
connect2Server(3000); 

botonRegistrarse.addEventListener("click", function() {
    let contraseñafinal = contraseña.value
    let usuariofinal = usuario.value
    console.log("front");
    
postEvent("registro", {user: usuariofinal,contraseña: contraseñafinal}, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
alert(respuesta);
});
});


botonIniciarSesion.addEventListener("click", function() {
    let contraseñafinal = contraseña.value
    let usuariofinal = usuario.value
    console.log("front");
    


postEvent("inicioSesion", {user: usuariofinal, contraseña: contraseñafinal}, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
alert(respuesta);
});
});

botonLapicera.addEventListener("click", function() {

    postEvent("modificarFavorito", {idUsuario: 2, idProducto: 7, modificar: agregar}, function(respuesta) {
    console.log("Hola");
    if(respuesta)
    {
      agregar = false;
    }
    else
    {
      agregar = true;
    }
    });
    });
    botonCuaderno.addEventListener("click", function() {
        postEvent("modificarFavorito", {idUsuario: 2, idProducto: 5, modificar: true}, function(respuesta) {
    if(respuesta)
    {
     agregar = false;
    }
    else
    {
      agregar = true;
    }
    });
    });
