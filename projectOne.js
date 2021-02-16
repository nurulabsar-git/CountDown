const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');''


const newYears = '1 Jan 2022';

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/360) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds)% 60;

    
    daysElement.innerHTML =  formateTime(days);
    hoursElement.innerHTML =  formateTime(hours);
    minutesElement.innerHTML =  formateTime(minutes);
    secondsElement.innerHTML =  formateTime(seconds);

console.log(days, hours, minutes, seconds);
    // console.log(newYearsDate - currentDate);
    // console.log(currentDate);
    console.log(seconds);
    console.log(days);
}

countDown();
 setInterval(countDown, 1000);


// formateTime = (time) => time < 10 ? `0${time}`: time;

function formateTime(time){
    return time < 10 ? `0${time}` :time;
}