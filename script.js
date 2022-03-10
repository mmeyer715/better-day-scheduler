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
}

// updating time
$(document).ready(function() {
    todaysDate = $("#displayMoment")
    currentDate();
    setInterval(currentDate, 1000);
});

// saving and pulling data to/from local storage

var saveBtn = document.getElementsByTagName('button')

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', saveInfo);
}

function saveInfo() {
      var textArea = document.getElementsByClassName('.description')
      localStorage.setItem('plans', JSON.stringify(textArea.value))
}
