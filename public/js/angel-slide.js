const botonArcangel = document.getElementById("boton-arcangel"),
  botonAngel = document.getElementById("boton-angel"),
  angelDiv = document.getElementById("angel"),
  arcangelDiv = document.getElementById("arcangel");

botonArcangel.addEventListener("click", () => {
  angelDiv.classList.toggle("fuera-angel");
  arcangelDiv.classList.toggle("adentro-arcangel");
});

botonAngel.addEventListener("click", () => {
  angelDiv.classList.toggle("fuera-angel");
  arcangelDiv.classList.toggle("adentro-arcangel");
});
