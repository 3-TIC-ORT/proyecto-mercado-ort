import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let listaDeUsuarios = JSON.parse(fs.readFileSync("./data/usuarios.json", "utf8"));
let listaDeProductos = JSON.parse(fs.readFileSync("./data/productos.json", "utf8"));


//registro
//Usuario{id, user, apellido, dni, mail, contraseña, favoritos, carrito, productosPublicados}
function registrarse(usuario)
{
  let ok;  
  usuario.id = listaDeUsuarios.length;


  //recorre la lista de usuarios para comparar si la cuenta ya existe o los atributos están en uso
  for (let i = 0; i <= listaDeUsuarios.length; i++)
  {
    if (listaDeUsuarios[i])
    {
      if(usuario.user === listaDeUsuarios[i].user)
      {
             
        i = listaDeUsuarios.length + 1;
        ok = false;
        return 1;
        // Ese usuario ya está en uso
      }
      else if(usuario.mail === listaDeUsuarios[i].mail)
      {
      return 2;
      // Ese mail ya está en uso
      }
    }
    if(i === listaDeUsuarios.length)
    {
      listaDeUsuarios.push(usuario);
      fs.writeFileSync("./data/usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
      i = listaDeUsuarios.length + 1;
      ok = true;
      return 0;
      // hecho
    }


  }
}


// inicio de sesión
function login(usuario)
{
  let ok;  


  //recorre la lista para ver si el usuario existe con las mismas características
  for (let i = 0; i <= listaDeUsuarios.length; i++)
  {
    if (listaDeUsuarios[i])
    {
      if(usuario.user === listaDeUsuarios[i].user && usuario.contraseña === listaDeUsuarios[i].contraseña)
      {
      i = listaDeUsuarios.length + 1;
      ok = true;
      return true;
      // "ah iniciado sesión correctamente"
      }
    }
    if (i === listaDeUsuarios.length)
    {
      i = listaDeUsuarios.length + 1;
      ok = false;
      return false;
      // "El usuario/contraseña es incorrecto"
    }
  }
}

//Le doy toda la información del usuario para cuando necesite algo
function Usuario(id)
{
  for(let i = 0; i <= listaDeUsuarios.length; i++)
  {
    if(listaDeUsuarios[i].id === id)
    {
      return listaDeUsuarios[i];
    }
  }
}

//infoUsuario: {id, curso, orientacion}
function EditarUsuario(usuario)
{
  for(let i = 0; i <= listaDeUsuarios.length; i++)
  {
    if(listaDeUsuarios[i].id === usuario.id)
    {
      listaDeUsuarios[i].curso = usuario.curso;
      listaDeUsuarios[i].orientacion = usuario.orientacion;
    }
  }
}
function ProductosPublicados()
{
  return listaDeProductos;
}


//producto{idUsuario, idProducto, nombre, precio, imagenes, descripcion}
function publicarProducto(producto)
{
  listaDeProductos.push(producto);
  fs.writeFileSync("./data/productos.json", JSON.stringify(listaDeProductos, null, 2));


}


//Devuelve favoritos
function Favoritos(id)
{
  for (let i = 0; i < listaDeUsuarios.length; i++)
  {
    if(listaDeUsuarios[i].id === id)
    {
      return listaDeUsuarios[i].favoritos;
    }
  }
}


//parametro favorito: {idUsuario: 2, idProducto: 7, modificar: true/false}
function ModificarFavoritos(favorito)
{
  for (let i = 0; i < listaDeUsuarios.length; i++)
  {
    if(favorito.idUsuario === listaDeUsuarios[i].id)
    {
      if(favorito.modificar)
      {
       listaDeUsuarios[i].favoritos.push(favorito.idProducto);
       fs.writeFileSync("./data/usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
       console.log(listaDeUsuarios[i].favoritos);
       return true;
      }
      else
      {
        let favoritosNuevo = [];
        for (let j = 0; j < listaDeUsuarios[i].favoritos.length; j++)
        {  
          if (listaDeUsuarios[i].favoritos[j] !== favorito.idProducto)
          {
            favoritosNuevo.push(listaDeUsuarios[i].favoritos[j]);
          }
        }
        listaDeUsuarios[i].favoritos = favoritosNuevo;
        fs.writeFileSync("./data/usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
        console.log(listaDeUsuarios[i].favoritos.length);
        return false
      }
    }
  }
}


function Carrito(id)
{
  for (let i = 0; i < listaDeUsuarios.length; i++)
  {
    if(listaDeUsuarios[i].id === id)
    {
      return listaDeUsuarios[i].carrito;
    }
  }
}


//parametro favorito: {idUsuario: 2, idProducto: 7, modificar: true/false}
function ModificarCarrito(producto)
{
  for (let i = 0; i < listaDeUsuarios.length; i++)
  {
    if(producto.idUsuario === listaDeUsuarios[i].id)
    {
      if(producto.modificar)
      {
        listaDeUsuarios[i].carrito.push(producto.idProducto);
        fs.writeFileSync("./data/usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
        console.log(listaDeUsuarios[i].carrito);
        return true;
      }
      else
      {
        let carritoNuevo = [];
        for (let j = 0; j < listaDeUsuarios[i].favoritos.length; j++)
        {  
          if (listaDeUsuarios[i].carrito[j] !== producto.idProducto)
          {
            carritoNuevo.push(listaDeUsuarios[i].carrito[j]);
          }
        }
        listaDeUsuarios[i].carrito = carritoNuevo;
        fs.writeFileSync("./data/usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
        console.log(listaDeUsuarios[i].carrito.length);
        return false
      }
    }
  }
}




subscribePOSTEvent("registro", registrarse);
subscribePOSTEvent("inicioSesion", login);
subscribePOSTEvent("usuario", Usuario);
subscribePOSTEvent("editarUsuario", EditarUsuario);

subscribeGETEvent("productosPublicados", ProductosPublicados);
subscribePOSTEvent("publicar", publicarProducto);

subscribePOSTEvent("favoritos", Favoritos);
subscribePOSTEvent("carrito", Carrito);
subscribePOSTEvent("modificarFavorito", ModificarFavoritos);
subscribePOSTEvent("modificarCarrito", ModificarCarrito);

startServer(3000, true);

