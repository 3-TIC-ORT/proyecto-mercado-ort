import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let respuesta;

//registro
function registrarse(usuario)
{
let ok;   
let listaDeUsuarios = JSON.parse(fs.readFileSync("./Back-end/usuarios.json", "utf8"));
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
         else if (usuario.dni === listaDeUsuarios[i].dni)
         {
            return 2;
            // Ese usuario ya está en uso

         }
         else if(usuario.mail === listaDeUsuarios[i].mail)
         {
            return 3;
            // Ese mail ya está en uso
         }
        }
        if (i === listaDeUsuarios.length)
        {
         listaDeUsuarios.push(usuario);
         fs.writeFileSync("./Back-end/usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
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
let listaDeUsuarios = JSON.parse(fs.readFileSync("./Back-end/usuarios.json", "utf8"));

//recorre la lista
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
//parametro favorito: {idUsuario: 2, idProducto: 7, modificar: true/false}
function modificarFavoritos(favorito)
{
  let listaDeUsuarios = JSON.parse(fs.readFileSync("./Back-end/usuarios.json", "utf8"));
  for (let i = 0; i < listaDeUsuarios.length; i++)
  {
    if(favorito.idUsuario === listaDeUsuarios[i].id)
    {
      if(favorito.modificar)
      {
       listaDeUsuarios[i].favoritos.push(favorito.idProducto);
       fs.writeFileSync("./Back-end/usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
       console.log(listaDeUsuarios[i].favoritos);
       return true;
      }
      else
      {
       let favoritosNuevo = [];
       console.log(listaDeUsuarios[i].favoritos.length);
       for (let j = 0; j < listaDeUsuarios[i].favoritos.length; j++)
       {  
        if (listaDeUsuarios[i].favoritos[j] !== favorito.idProducto)
        {
            favoritosNuevo.push(listaDeUsuarios[i].favoritos[j]);
        }
       }
       listaDeUsuarios[i].favoritos = favoritosNuevo;
       fs.writeFileSync("./Back-end/usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
       return false
      }
    }
  }
}

subscribePOSTEvent("registro", registrarse);
subscribePOSTEvent("inicioSesion", login);
subscribePOSTEvent("modificarFavorito", modificarFavoritos);

startServer(3000, true);