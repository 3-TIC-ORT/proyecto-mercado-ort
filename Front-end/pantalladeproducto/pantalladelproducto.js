// Botón favoritos
document.getElementById("favorito").addEventListener("click", function () {
    if (this.textContent === "♡") {
      this.textContent = "♥"; // Marcado
      this.style.color = "red";
    } else {
      this.textContent = "♡"; // Desmarcado
      this.style.color = "black";
    }
  });
  
  // Botón comprar
  document.querySelector(".comprar").addEventListener("click", function () {
    alert("¡Gracias por tu compra!");
  });
  
  // Botón carrito
  document.querySelector(".carrito").addEventListener("click", function () {
    alert("Producto agregado al carrito");
  });
  