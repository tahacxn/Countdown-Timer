// Target date in ms

const countDownDate = new Date ("March 31,2024 09:00:00").getTime();

let x = setInterval(() => {
    //Today date in ms
    const today = new Date().getTime();

    //Difference between target and today 

    let distance = countDownDate - today;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / (1000));


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
})