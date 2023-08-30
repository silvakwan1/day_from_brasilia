// I imported an object with a date and a value.
import dateMaps from "./dateMap.js";

const $text = document.querySelector(".text");
const $date = document.querySelector(".date")
let day;
//This function returns the date formatted as follows: '00/00'.
const dayAndMonth = MyDate();
function MyDate(){
    const now = new Date();
    const onDay = now.getDate();
    const month = now.getUTCMonth() +1;
    if(month < 10){
        return `${onDay}/0${month}`
    }else{
        return `${onDay}/${month}`
    }
}

// Retrieve the date and go to the object to recover the corresponding compatible value.
day =  dateMaps()[dayAndMonth] || "erro"

renderDay();
function renderDay(){
    return $text.textContent = `${day}/140`
};

toDate()
function toDate(){
    return $date.textContent = dayAndMonth
}
console.log(toDate)

//She reloads the page every 15 seconds.
setInterval( domReload, 15*1000);
function domReload(){
    return document.location.reload()
};
