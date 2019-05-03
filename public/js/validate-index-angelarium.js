const monthsWith31 = [
  "Enero",
  "Marzo",
  "Mayo",
  "Julio",
  "Agosto",
  "Octubre",
  "Diciembre"
];

form.addEventListener("submit", validate);

function validate(e) {
  if ((dayValue == null || monthValue == null || yearValue == null)) {
    e.preventDefault();
    alert("Ingresa una fecha correcta");
  } else if (monthValue === "Febrero" && dayValue > 29 && leap === 0) {
    e.preventDefault();
    alert("Ingresa una fecha correcta");
  } else if (monthValue === "Febrero" && dayValue > 28 && leap !== 0) {
    e.preventDefault();
    alert("Ingresa una fecha correcta");
  } else if(!monthsWith31.includes(monthValue) && dayValue > 30) {
    e.preventDefault();
    alert("Ingresa una fecha correcta");
  }
}
