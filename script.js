// pulling elements from HTML
var todaysDate = document.getElementById('currentDay');

// adds current date to scheduler
var date = "";
var hour = "";

function currentDate() {
    date = moment(new Date());
    todaysDate.innerHTML = (date.format('dddd, MMM Do YYYY, h:mm a'));
    hour = parseInt(date.format('H'));
    colors();
}
// displaying todays date
setInterval(currentDate())

// function to colorcode and loop through timeblocks
function colors() {
    // getting current time
    // var time = moment().format('H');
    // link timeblocks with js
    var timeBlocks = $(".description");
    // loop through timeblocks
    for (var i = 0; i < timeBlocks.length; i++) {
        // get timeblocks index id and making it a string
        var blockID = timeBlocks[i].id;
        // get timeblocks by id
        var changeID = document.getElementById(timeBlocks[i].id);
        // adding classes based on time
        if (parseInt(blockID) < hour) {
            $(changeID).addClass("past");
        }   else if (parseInt(blockID) > hour) {
                $(changeID).addClass("future");
        }   else if (parseInt(blockID) === hour) {
                $(changeID).addClass("present");
        }
    }
    console.log('hi');
}

// updating time
$(document).ready(function() {
    todaysDate = $("#displayMoment")
    currentDate();
    setInterval(currentDate, 1000);
});
