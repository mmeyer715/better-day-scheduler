// pulling elements from HTML
var todaysDate = document.getElementById('currentDay');

// adds current date to scheduler
function date() {
    var today = moment().format('dddd, MMMM Do');
    todaysDate.innerHTML = today;
}

// displaying todays date
date();