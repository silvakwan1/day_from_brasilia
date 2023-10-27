// I imported an object with a date and a value.
import dateMaps from "./dateMap.js";

const $text = document.querySelector(".text");
const $date = document.querySelector(".date");

let day;
//This function returns the date formatted as follows: '00/00'.
const dayAndMonth = MyDate();
function MyDate() {
  const now = new Date();
  const onDay = now.getDate();
  const month = now.getUTCMonth() + 1;
  if (month < 10) {
    return `${onDay}/0${month}`;
  } else {
    return `${onDay}/${month}`;
  }
}

// Retrieve the date and go to the object to recover the corresponding compatible value.
day = dateMaps()[dayAndMonth] || "erro";

function renderDay() {
  $text.textContent = `${day}/140`;
}

toDate();
function toDate() {
  return ($date.textContent = dayAndMonth);
}
//She reloads the page every 15 seconds.
setInterval(domReload, 15 * 1000);
function domReload() {
  return document.location.reload();
}

function animation() {
  renderDay();
  const textArray = Array.from($text.textContent);
  $text.innerHTML = "";

  textArray.forEach((letra, i) => {
    setTimeout(() => {
      $text.innerHTML += letra;
    }, 500 * i);
  });
}
animation();

(function () {
  const ka = document.querySelector("#karol");
  const string = "Dia de ver a karol";
  setTimeout(() => {
    day >= 142 ? (ka.textContent = string) : null;
  }, 3000);
})();
