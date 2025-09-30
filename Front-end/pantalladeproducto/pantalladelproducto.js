
document.getElementById("favorito").addEventListener("click", function () {
    if (this.textContent === "♡") {
      this.textContent = "♥"; 
      this.style.color = "red";
    } else {
      this.textContent = "♡"; 
      this.style.color = "black";
    }
  });
  

  document.querySelector(".comprar").addEventListener("click", function () {
    alert("¡Gracias por tu compra!");
  });
  
 
  document.querySelector(".carrito").addEventListener("click", function () {
    alert("Producto agregado al carrito");
  });
  