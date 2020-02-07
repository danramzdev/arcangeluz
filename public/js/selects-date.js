// Document variables
const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");
const form = document.getElementById("form");

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
const maxDays = 31;
let i, input;
let date = new Date();

for (i = 1; i <= maxDays; i++) {
  createOption(daySelect, i);
}

for (i = 0; i < months.length; i++) {
  createOption(monthSelect, months[i]);
}

for (i = date.getFullYear(); i >= 1900; i--) {
  createOption(yearSelect, i);
}

createBirthInput();

function createOption(parent, value) {
  const option = document.createElement("option");
  option.text = value;
  option.value = value;
  parent.appendChild(option);
}

function createBirthInput() {
  input = document.createElement("input");
  input.setAttribute("name", "birth");
  input.style.display = "none";
  form.appendChild(input);
}
