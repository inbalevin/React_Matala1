class Clock {
    constructor(hours, minutes, seconds, country) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.country = country;

    }

    ConverToSeconds() {
       
           return(this.hours * 3600) + (this.minutes * 60) + this.seconds;
            
       
        
    }

    Show() {
        for (var j = 0; j < clockArr.length; j++) {
            if (clockArr[j].hours < 10) {
                clockArr[j].hours = "0" + clockArr[j].hours;
            }

            if (clockArr[j].minutes < 10) {
                clockArr[j].minutes = "0" + clockArr[j].minutes;
            }

            if (clockArr[j].seconds < 10) {
                clockArr[j].seconds = "0" + clockArr[j].seconds;
            }
        }
        let str = `<p>`;
        for (var i = 0; i < clockArr.length; i++) {
            str += `the hour in:${clockArr[i].country} is ${clockArr[i].hours}:${clockArr[i].minutes}:${clockArr[i].seconds} <br/> `;
            str += `convert: ${clockArr[i].ConverToSeconds()} <br/>`;
        }
        str += `</p>`;
        document.getElementById("ph").innerHTML = str;
    }
    }
var clockArr = [];
let newClock;
function create() {
    let hour = document.getElementById("hou").value;
    let minute = document.getElementById("min").value;
    let second = document.getElementById("sec").value;
    let country = document.getElementById("coun").value;
    if (hour >= 0 && hour <= 60 && minute >= 0 && minute <= 60 && second >= 0 && second <= 60) {
        alert("טופס נשלח בהצלחה!");
    } else {
        alert("אנא הזן ערכים תקינים (0-60) עבור השעות, הדקות והשניות.");
    }
    newClock = new Clock(hour, minute, second, country);
   
    clockArr.push(newClock);
    document.getElementById("hou").value = "";
    document.getElementById("min").value = "";
    document.getElementById("sec").value = "";
    document.getElementById("coun").value = "";
    if (clockArr.length == 5) {
        newClock.Show();
    }
}