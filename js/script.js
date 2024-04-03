const endDate = "20 April 2024 09:00 PM"

document.getElementById("endDate").innerText = endDate;

const inputs = document.querySelectorAll('input');

const clock = () =>{
const end = new Date(endDate)
const now = new Date()

const diff = (end - now) / 1000 ;
if(diff < 0 ) return ;

console.log(diff)
// Days
inputs[0].value = Math.floor(diff/3600/24); //Hours
inputs[1].value = Math.floor((diff / 3600)%24 );//Minute
inputs[2].value = Math.floor(diff/60)%60; //Seconds
inputs[3].value = Math.floor(diff%60); //remaining seconds

}

clock()

setInterval(
    () =>{
        clock()
    },1000
)
