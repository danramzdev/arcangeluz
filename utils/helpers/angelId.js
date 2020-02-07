module.exports = function(day, month) {
  if (day >= 1 && day <= 5 && month == "Enero") {
    return 1;
  } else if (day >= 6 && day <= 10 && month == "Enero") {
    return 2;
  } else if (day >= 11 && day <= 15 && month == "Enero") {
    return 3;
  } else if (day >= 16 && day <= 20 && month == "Enero") {
    return 4;
  } else if (day >= 21 && day <= 25 && month == "Enero") {
    return 5;
  } else if (day >= 26 && day <= 30 && month == "Enero") {
    return 6;
  } else if (
    (day == 31 && month == "Enero") ||
    (day <= 4 && month == "Febrero")
  ) {
    return 7;
  } else if (day >= 5 && day <= 9 && month == "Febrero") {
    return 8;
  } else if (day >= 10 && day <= 14 && month == "Febrero") {
    return 9;
  } else if (day >= 15 && day <= 19 && month == "Febrero") {
    return 10;
  } else if (day >= 20 && day <= 24 && month == "Febrero") {
    return 11;
  } else if (
    (day >= 25 && month == "Febrero") ||
    (day == 1 && month == "Marzo")
  ) {
    return 12;
  } else if (day >= 2 && day <= 6 && month == "Marzo") {
    return 13;
  } else if (day >= 7 && day <= 11 && month == "Marzo") {
    return 14;
  } else if (day >= 12 && day <= 16 && month == "Marzo") {
    return 15;
  } else if (day >= 17 && day <= 21 && month == "Marzo") {
    return 16;
  } else if (day >= 22 && day <= 25 && month == "Marzo") {
    return 17;
  } else if (day >= 26 && day <= 30 && month == "Marzo") {
    return 18;
  } else if (
    (day == 31 && month == "Marzo") ||
    (day <= 4 && month == "Abril")
  ) {
    return 19;
  } else if (day >= 5 && day <= 9 && month == "Abril") {
    return 20;
  } else if (day >= 10 && day <= 14 && month == "Abril") {
    return 21;
  } else if (day >= 15 && day <= 20 && month == "Abril") {
    return 22;
  } else if (day >= 21 && day <= 25 && month == "Abril") {
    return 23;
  } else if (day >= 26 && day <= 30 && month == "Abril") {
    return 24;
  } else if (day >= 1 && day <= 5 && month == "Mayo") {
    return 25;
  } else if (day >= 6 && day <= 11 && month == "Mayo") {
    return 26;
  } else if (day >= 12 && day <= 16 && month == "Mayo") {
    return 27;
  } else if (day >= 17 && day <= 21 && month == "Mayo") {
    return 28;
  } else if (day >= 22 && day <= 26 && month == "Mayo") {
    return 29;
  } else if (day >= 27 && day <= 31 && month == "Mayo") {
    return 30;
  } else if (day >= 1 && day <= 6 && month == "Junio") {
    return 31;
  } else if (day >= 7 && day <= 11 && month == "Junio") {
    return 32;
  } else if (day >= 12 && day <= 16 && month == "Junio") {
    return 33;
  } else if (day >= 17 && day <= 21 && month == "Junio") {
    return 34;
  } else if (day >= 22 && day <= 27 && month == "Junio") {
    return 35;
  } else if (
    (day >= 28 && month == "Junio") ||
    (day <= 2 && month == "Julio")
  ) {
    return 36;
  } else if (day >= 3 && day <= 7 && month == "Julio") {
    return 37;
  } else if (day >= 8 && day <= 12 && month == "Julio") {
    return 38;
  } else if (day >= 13 && day <= 18 && month == "Julio") {
    return 39;
  } else if (day >= 19 && day <= 23 && month == "Julio") {
    return 40;
  } else if (day >= 24 && day <= 28 && month == "Julio") {
    return 41;
  } else if (
    (day >= 29 && month == "Julio") ||
    (day <= 2 && month == "Agosto")
  ) {
    return 42;
  } else if (day >= 3 && day <= 7 && month == "Agosto") {
    return 43;
  } else if (day >= 8 && day <= 13 && month == "Agosto") {
    return 44;
  } else if (day >= 14 && day <= 18 && month == "Agosto") {
    return 45;
  } else if (day >= 19 && day <= 23 && month == "Agosto") {
    return 46;
  } else if (day >= 24 && day <= 28 && month == "Agosto") {
    return 47;
  } else if (
    (day >= 29 && month == "Agosto") ||
    (day <= 2 && month == "Septiembre")
  ) {
    return 48;
  } else if (day >= 3 && day <= 8 && month == "Septiembre") {
    return 49;
  } else if (day >= 9 && day <= 13 && month == "Septiembre") {
    return 50;
  } else if (day >= 14 && day <= 18 && month == "Septiembre") {
    return 51;
  } else if (day >= 19 && day <= 23 && month == "Septiembre") {
    return 52;
  } else if (day >= 24 && day <= 28 && month == "Septiembre") {
    return 53;
  } else if (
    (day >= 29 && month == "Septiembre") ||
    (day <= 3 && month == "Octubre")
  ) {
    return 54;
  } else if (day >= 4 && day <= 8 && month == "Octubre") {
    return 55;
  } else if (day >= 9 && day <= 13 && month == "Octubre") {
    return 56;
  } else if (day >= 14 && day <= 18 && month == "Octubre") {
    return 57;
  } else if (day >= 19 && day <= 23 && month == "Octubre") {
    return 58;
  } else if (day >= 24 && day <= 28 && month == "Octubre") {
    return 59;
  } else if (
    (day >= 29 && month == "Octubre") ||
    (day <= 2 && month == "Noviembre")
  ) {
    return 60;
  } else if (day >= 3 && day <= 7 && month == "Noviembre") {
    return 61;
  } else if (day >= 8 && day <= 12 && month == "Noviembre") {
    return 62;
  } else if (day >= 13 && day <= 17 && month == "Noviembre") {
    return 63;
  } else if (day >= 18 && day <= 22 && month == "Noviembre") {
    return 64;
  } else if (day >= 23 && day <= 27 && month == "Noviembre") {
    return 65;
  } else if (
    (day >= 28 && month == "Noviembre") ||
    (day <= 2 && month == "Diciembre")
  ) {
    return 66;
  } else if (day >= 3 && day <= 7 && month == "Diciembre") {
    return 67;
  } else if (day >= 8 && day <= 12 && month == "Diciembre") {
    return 68;
  } else if (day >= 13 && day <= 17 && month == "Diciembre") {
    return 69;
  } else if (day >= 18 && day <= 22 && month == "Diciembre") {
    return 70;
  } else if (day >= 23 && day <= 27 && month == "Diciembre") {
    return 71;
  } else if (day >= 28 && day <= 31 && month == "Diciembre") {
    return 72;
  }
};
