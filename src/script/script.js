// eu inportei um objeto que pedi que uam ia fazer.
import dateMaps from "./dateMap.js";

const $text = document.querySelector(".text");
const $date = document.querySelector(".date")
let day;
//essa função retorna a data fomatada nesse estilo  00/00
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

// paga a data e vai la no objeto e pegar o valor compativel ou aparece essa string
day =  dateMaps()[dayAndMonth] || "vai arrumar essa porra baiano"

renderDay();
function renderDay(){
    return $text.textContent = `${day}/140`
};

toDate()
function toDate(){
    return $date.textContent = dayAndMonth
}
console.log(toDate)

//ela recarega o DOM acada 15s
setInterval( domReload, 15*1000);
function domReload(){
    return document.location.reload()
};
