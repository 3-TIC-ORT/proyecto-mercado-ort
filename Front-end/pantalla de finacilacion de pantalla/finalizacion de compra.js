function MetodoPagoBoton() {
    alert("hicicste click");
}


// Selecciona todos los botones de método de pago
const botonesPago = document.querySelectorAll(".BotonPago");


botonesPago.forEach(boton => {
  boton.addEventListener("click", () => {
    // Primero, quitamos la clase "seleccionado" de todos
    botonesPago.forEach(b => b.classList.remove("seleccionado"));
   
    // Luego, marcamos el que fue clickeado
    boton.classList.add("seleccionado");


    // Obtenemos el nombre del método
    const metodoSeleccionado = boton.getAttribute("data-metodo");
   
    // Podés usarlo como quieras (mostrarlo, guardarlo, etc.)
    console.log("Método de pago seleccionado:", metodoSeleccionado);
  });
});


