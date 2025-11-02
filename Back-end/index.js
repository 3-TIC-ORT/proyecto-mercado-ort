import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let respuesta;

//registro
function registrarse(usuario)
{

console.log("anda registro");
let ok;   
let listaDeUsuarios = JSON.parse(fs.readFileSync("./Back-end/usuarios.json", "utf8"));

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
         else if (usuario.dni === listaDeUsuarios[i].dni)
         {
            return 3;
            // Ese usuario ya está en uso

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
if(usuario.user === "" || usuario.contraseña === "")
{
   // return "Por favor complete todos los campos";
}
else
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
}

function agregarFavoritos(nuevoFavorito)
{

}

subscribePOSTEvent("registro", registrarse);
subscribePOSTEvent("inicioSesion", login);

startServer(3000, true);