import {dateMap} from "./dateMap";
dateMap
console.log(dateMap)

const text = document.querySelector(".mono_tx");

let dia;

const dayAndMonth = MyDate();

function MyDate(){
    const now = new Date();
    const diaa = now.getDate();
    const month = now.getUTCMonth() +1
    if(month < 10){
        return `${diaa}/0${month}`
    }else{
        return `${diaa}/${month}`
    }
}
dia = dateMap[dayAndMonth] || "vai arrumar essa porra baiano"

addDay();
setInterval( domReload, 10*1000);

function addDay(){
    return text.textContent = `${dia}/140`
};
function domReload(){
    return document.location.reload()
};
