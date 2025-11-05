let usuario = document.getElementById ("usuario");
let contraseña = document.getElementById ("contraseña");
let botonRegistrarse = document.getElementById ("botonRegistro");
let botonIniciarSesion = document.getElementById ("botonLogin");
let FavoritoLapicera = document.getElementById ("lapiceraFav");
let PublicarLapicera = document.getElementById ("lapiceraPubli");
let botonCuaderno = document.getElementById ("cuaderno");
let botonFavoritos = document.getElementById ("botonFavoritos");
let parrafoFavoritos = document.getElementById ("textoFavoritos");
let id;

connect2Server(3000);
//PIDO EL USUARIO AL BACK. CASI SEGURO QUE ESTA MAL YA QUE EL FRONT ES QUIEN LO TENDRÍA QUE SABER:
/*getEvent("idDelUsuario", function(respuesta) {
 id = respuesta;
  });*/
function Registro() {
  let contraseñafinal = contraseña.value
  let usuariofinal = usuario.value
  console.log("front");
postEvent("registro", {user: usuariofinal,contraseña: contraseñafinal}, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
alert(respuesta);
});
}


function InicioSesion() {
  let contraseñafinal = contraseña.value
  let usuariofinal = usuario.value
  console.log("front");
postEvent("inicioSesion", {user: usuariofinal, contraseña: contraseñafinal}, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
alert(respuesta);
});
}




function LapiceraFav() {
  postEvent("modificarFavorito", {idUsuario: 2, idProducto: 7, modificar: false}, function(respuesta) {
  console.log("Hola");
  });
  }
  
function LapiceraPubli() {
  postEvent("publicar", {idUsuario: 2, idProducto: 7, nombre: "lapicera", precio: 100, imagenes: "links", descripcion: "texto"}, function(respuesta) {
  console.log("Hola");
  });
  }





 function Cuaderno() {
  postEvent("modificarFavorito", {idUsuario: id, idProducto: 5, modificar: true}, function(respuesta) {
  });
  }


  function Favorito()
  {
    postEvent("favoritos", 2, function(respuesta) {
      parrafoFavoritos.textContent = respuesta;
      });
     
  }
  
  botonRegistrarse.addEventListener("click", Registro);
  botonIniciarSesion.addEventListener("click", InicioSesion);
  FavoritoLapicera.addEventListener("click", LapiceraFav);
  PublicarLapicera.addEventListener("click", LapiceraPubli);
  botonCuaderno.addEventListener("click", Cuaderno);
  botonFavoritos.addEventListener("click", Favorito);

