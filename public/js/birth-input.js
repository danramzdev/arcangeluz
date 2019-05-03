let dayValue,
  monthValue,
  yearValue,
  leap,
  birth;

$(".sel__box__options").click(function() {
  const txt = $(this).text();
  const $currentSel = $(this).closest(".sel");
  const element = $currentSel[0];

  if ($(element).hasClass("sel--day")) {
    dayValue = txt;
  } else if ($(element).hasClass("sel--month")) {
    monthValue = txt;
  } else {
    yearValue = txt;
    leap = yearValue % 4;
  }

  birth = new Date(
    `${months.indexOf(monthValue) + 1} ${dayValue}, ${yearValue}`
  );

  input.value = birth.getDay();
});
