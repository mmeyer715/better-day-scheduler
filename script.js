// pulling elements from HTML
var todaysDate = "";

var date = "";
var hour = "";

function currentDate() {
    date = moment(new Date());
    todaysDate.html(date.format('dddd, MMM Do YYYY, h:mm a'));
    hour = parseInt(date.format('H'));
}

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

// adding functionality to save buttons
var saveBtn = document.getElementsByTagName('button');
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', saveInfo);
}

// saving text to local storage
function saveInfo() {
      var textArea = this.parentElement.children[1].value;
      var key = this.parentElement.children[1].getAttribute('id');
      localStorage.setItem(key, textArea);
}

// pulling any data from local
for(var i = 9; i < 18; i++) {
    var textVal = localStorage.getItem(i);
    document.getElementById(i).value = textVal
}

// clear data after midnight
function clearData() {
    var storage = JSON.parse(localStorage.getItem(textVal)) ?? [];
    if(storage.length === 0 || storage[0].dayVal < day){
        localStorage.clear();
    }
}

// updating time
$(document).ready(function() {
    todaysDate = $("#currentDay");
    currentDate();
    colors();
    clearData();
    setInterval(currentDate, 1000);
});
