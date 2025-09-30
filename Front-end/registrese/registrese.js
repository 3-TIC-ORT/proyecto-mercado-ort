document.querySelector("form").addEventListener("submit", function(event) {
    const clave = document.getElementById("clave").value;
    const clave2 = document.getElementById("clave2").value;
  
    if (clave !== clave2) {
      event.preventDefault(); 
      alert("Las contraseñas no coinciden. Intenta de nuevo.");
    }
  });
  
  