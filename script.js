const countdown = ()=>{
    const endDate = new Date("Nov 5, 2024 22:00:00").getTime();
console.log(endDate)

const now = new Date().getTime();
const timeDiff = endDate - now;


const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeDiff < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "EXPIRED";
    }

}

const timer = setInterval(countdown, 1000);