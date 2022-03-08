// pulling elements from HTML
var todaysDate = document.getElementById('currentDay');
var hours = document.getElementById('hours');
const hourColors = document.getElementsByClassName('.color');


// adds current date to scheduler
function date() {
    var today = moment().format('dddd, MMM Do YYYY');
    todaysDate.innerHTML = today;
}

// displaying todays date
date();

// color coding past, present, and future time
function colorCode() {
    // setting current time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    // linking time blocks to js
    if (hourColors < time ) {
        
    } else {
        
    }
}

colorCode();