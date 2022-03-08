// pulling elements from HTML
var todaysDate = document.getElementById('currentDay');
var hours = document.getElementsByClassName('.time-block')
var past = document.getElementsByClassName('.past');

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
    var currentTime = today.getHours() + ":" + today.getMinutes();

    /* TODO
    create function to loop through timeblock
    create function to color code timeblocks
    save to local storage*/
}

colorCode();