let usuario = document.getElementById ("usuario");
let contraseña = document.getElementById ("contraseña");
let botonRegistrarse = document.getElementById ("botonRegistro");
let botonIniciarSesion = document.getElementById ("botonLogin");
let botonFavorito = document.getElementById ("fav");
let ponerFavorito = document.getElementById ("ponerFav");
let sacarFavorito = document.getElementById ("sacarFav");
let nomProducto = document.getElementById ("nombreProducto");
let descProducto = document.getElementById ("descripcionProducto");
let BotonPublicar = document.getElementById ("botonPublicar");
let BotonBorrar = document.getElementById ("botonBorrar");
let botonUsuario = document.getElementById ("infoUsuario");
let id;


connect2Server(3000);
function Registro() {
  let contraseñafinal = contraseña.value
  let usuariofinal = usuario.value
  console.log("front");
postEvent("registro", {falso: true, id: null, user: usuariofinal, contraseña: contraseñafinal, apellido: null, mail: null, curso: null, orientacion: null, favoritos: [], carrito: [], productosPublicados: 0, productosVendidos: 0}, function(respuesta) {
  console.log("Respuesta del backend:", respuesta);
  if(respuesta === 1)
  {
    alert("ese usuario ya esta en uso");
  }
  else
  {
    alert("registrado correctamente");
  }

});
}




function InicioSesion() {
  let contraseñafinal = contraseña.value
  let usuariofinal = usuario.value
  console.log("front");
postEvent("inicioSesion", {user: usuariofinal, contraseña: contraseñafinal}, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
if(respuesta)
{
  alert("ha iniciado sesión correctamente");
}
else
{
  alert("usuario o contraseña incorrecta");
}
});
}


  function Favorito()
  {
    postEvent("favoritos", 0, function(respuesta) {
      console.log(respuesta);
      });
  }
 
function agregarFav() {
  postEvent("modificarFavorito", {idUsuario: 0, idProducto: 7, modificar: true}, function(respuesta) {
  console.log(respuesta);
  });
  }
  function quitarFav() {
  postEvent("modificarFavorito", {idUsuario: 0, idProducto: 7, modificar: false}, function(respuesta) {
  console.log(respuesta);
  });
  }
 
function Publicar() {
  postEvent("publicar", {idUsuario: 0, idProducto: null, nombre: nomProducto.value, precio: null, imagenes: "links", descripcion: descProducto.value}, function(respuesta) {
  console.log("publicado");
  });
  }

 function Borrar() {
  postEvent("borrarProducto", {idUsuario: 0, idProducto: 0}, function(respuesta) {
  });
  }

  function Usuario()
  {
    postEvent("usuario", 0, function(respuesta)
    {
      console.log(respuesta);
    });
  }


  botonRegistrarse.addEventListener("click", Registro);
  botonIniciarSesion.addEventListener("click", InicioSesion);
  ponerFavorito.addEventListener("click", agregarFav);
  sacarFavorito.addEventListener("click", quitarFav);
  botonFavorito.addEventListener("click", Favorito);
  BotonPublicar.addEventListener("click", Publicar);
  BotonBorrar.addEventListener("click", Borrar);
  botonUsuario.addEventListener("click", Usuario);