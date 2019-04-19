(function() {
  const meses = [
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
  const dia = document.getElementById("dia");
  const mes = document.getElementById("mes");
  const year = document.getElementById("year");
  const maxDia = 31;
  let n = 0;
  var myDate = new Date();
  var mesesNumero = meses.indexOf(mes.value);

  yearOptions();
  var yearValor = year.value;
  var biciestoONo = yearValor % 4;
  mesOptions(mes);
  diaOptions(dia, maxDia);
  var cumpleanos = new Date(`${mesesNumero} ${dia.value}, ${yearValor}`);

  mesesNumero = meses.indexOf(mes.value);

  const formulario = document.getElementById("formulario");
  const inputCumple = document.createElement("input");
  inputCumple.value = cumpleanos.getDay();
  inputCumple.text = cumpleanos.getDay();
  inputCumple.setAttribute("name", "cumple");
  inputCumple.style.display = "none";
  formulario.appendChild(inputCumple);

  year.addEventListener("change", () => {
    let diaActual = dia.value;
    while (dia.hasChildNodes()) {
      dia.removeChild(dia.firstChild);
    }
    yearValor = year.value;
    biciestoONo = yearValor % 4;
    diaOptions(dia, diasDelMes());
    dia.value = diaActual;
    cumpleanos = new Date(`${mesesNumero + 1} ${dia.value}, ${yearValor}`);
    inputCumple.value = cumpleanos.getDay();
    inputCumple.text = cumpleanos.getDay();
  });

  mes.addEventListener("change", () => {
    mesesNumero = meses.indexOf(mes.value);
    let diaActual = dia.value;
    while (dia.hasChildNodes()) {
      dia.removeChild(dia.firstChild);
    }
    diaOptions(dia, diasDelMes());
    dia.value = diaActual;
    cumpleanos = new Date(`${mesesNumero + 1} ${dia.value}, ${yearValor}`);
    inputCumple.value = cumpleanos.getDay();
    inputCumple.text = cumpleanos.getDay();
  });

  dia.addEventListener("change", () => {
    cumpleanos = new Date(`${mesesNumero + 1} ${dia.value}, ${yearValor}`);
    inputCumple.value = cumpleanos.getDay();
    inputCumple.text = cumpleanos.getDay();
  });

  function yearOptions() {
    for (let i = myDate.getFullYear(); i >= 1900; i--) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      year.appendChild(option);
    }
  }

  function mesOptions(inputMes) {
    for (let i = 0; i < meses.length; ++i) {
      const option = document.createElement("option");
      option.value = meses[i];
      option.text = meses[i];
      inputMes.appendChild(option);
    }
  }

  function diaOptions(inputDia, diaValor) {
    for (let i = 1; i <= diaValor; ++i) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      inputDia.appendChild(option);
    }
  }

  function diasDelMes() {
    const mesValue = mes.value;
    if (
      mesValue == "Enero" ||
      mesValue == "Marzo" ||
      mesValue == "Mayo" ||
      mesValue == "Julio" ||
      mesValue == "Agosto" ||
      (mesValue == "Octubre") | (mesValue == "Diciembre")
    ) {
      n = 31;
    } else if (mesValue == "Febrero" && biciestoONo == 0) {
      n = 29;
    } else if (mesValue == "Febrero" && biciestoONo != 0) {
      n = 28;
    } else {
      n = 30;
    }
    return n;
  }
})();
