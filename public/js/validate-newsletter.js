const newsLetterForm = document.querySelector(".form-newsletter");
const email = document.querySelector('input[name="arc_email"]');
const name = document.querySelector('input[name="arc_name"]');

newsLetterForm.addEventListener("submit", e => {
  if (validateEmail(email.value) && validateName(name.value)) {
    console.log("Post success");
  } else {
    e.preventDefault();
    alert("Por favor rellena los campos correctamente");
  }
});

function validateEmail(email) {
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegExp.test(email);
}

function validateName(name) {
  const nameRegExp = /^[a-zA-Z\s]+$/;
  return nameRegExp.test(name);
}
