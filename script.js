// pulling elements from HTML
var todaysDate = document.getElementById('currentDay');
console.log(moment().format('MM/DD'));
var currentDay = localStorage.getItem('currentDay') || moment().unix();
console.log(currentDay);
console.log(moment().unix());
if (moment().unix(currentDay).format('DD') < moment().format('DD')) {
    localStorage.clear();
    currentDay = moment().unix();
}
localStorage.setItem('currentDay', currentDay);
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
console.log(saveBtn);
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', saveInfo);
}

// saving text to local storage
function saveInfo() {
      var textArea = this.parentElement.children[1].value;
      var key = this.parentElement.children[1].getAttribute('id')
      localStorage.setItem(key, textArea);
}


for(var i = 9; i < 18; i++) {
    var textVal = localStorage.getItem(i);
    document.getElementById(i).value = textVal
}

