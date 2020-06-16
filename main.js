// A function that displays the current day of the week and current date at the top of the page using moment.js.
$(document).ready(function() {
    var now = moment().format("dddd, MMMM Do YYYY");
    $("#currentDate").html(now);
});

// Listed variables for the function setColor().
var hour = moment().format("H"); 
var currentHour = parseInt(hour);

// Created an array from the rows ("time blocks") in order to loop through them to make changes to the background color.
$(".row").toArray().forEach(row => {
    var timeBlockRow = row.id, rowHour;
    if (timeBlockRow) {
        rowHour = parseInt(timeBlockRow);
    }
// For the present hour time block, the background color is a dark pink. For the past time blocks, the background color is a light pink. For all future time blocks, the background color is green.
    if (rowHour) {  
        if (currentHour === rowHour) {
            setColor(row, "hotpink");
    }   else if ((currentHour < rowHour)) {
            setColor(row, "springgreen");
    }   else if ((currentHour > rowHour)) {
            setColor(row, "pink");
    }
}
});

// A function to change the background colors of time blocks dependent on the time of day.
function setColor(element, color) {
    element.style.backgroundColor = color;
};

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 9 AM time slot can be pushed into the local storage as "9AM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("9AMToDos") !="") {
    $("#9AMEntry").val(localStorage.getItem("9AMToDos"));
}

$("#saveButton1").click(function () {
    if (window.localStorage) {
        localStorage.setItem("9AMToDos", $("#9AMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 10 AM time slot can be pushed into the local storage as "10AM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("10AMToDos") !="") {
    $("#10AMEntry").val(localStorage.getItem("10AMToDos"));
}

$("#saveButton2").click(function () {
    if (window.localStorage) {
        localStorage.setItem("10AMToDos", $("#10AMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 11 AM time slot can be pushed into the local storage as "11AM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("11AMToDos") !="") {
    $("#11AMEntry").val(localStorage.getItem("11AMToDos"));
}

$("#saveButton3").click(function () {
    if (window.localStorage) {
        localStorage.setItem("11AMToDos", $("#11AMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 12 PM time slot can be pushed into the local storage as "12PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("12PMToDos") !="") {
    $("#12PMEntry").val(localStorage.getItem("12PMToDos"));
}

$("#saveButton4").click(function () {
    if (window.localStorage) {
        localStorage.setItem("12PMToDos", $("#12PMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 1 PM time slot can be pushed into the local storage as "1PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("1PMToDos") !="") {
    $("#1PMEntry").val(localStorage.getItem("1PMToDos"));
}

$("#saveButton5").click(function () {
    if (window.localStorage) {
        localStorage.setItem("1PMToDos", $("#1PMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 2 PM time slot can be pushed into the local storage as "2PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("2PMToDos") !="") {
    $("#2PMEntry").val(localStorage.getItem("2PMToDos"));
}

$("#saveButton6").click(function () {
    if (window.localStorage) {
        localStorage.setItem("2PMToDos", $("#2PMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 3 PM time slot can be pushed into the local storage as "3PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("3PMToDos") !="") {
    $("#3PMEntry").val(localStorage.getItem("3PMToDos"));
}

$("#saveButton7").click(function () {
    if (window.localStorage) {
        localStorage.setItem("3PMToDos", $("#3PMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 4 PM time slot can be pushed into the local storage as "4PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("4PMToDos") !="") {
    $("#4PMEntry").val(localStorage.getItem("4PMToDos"));
}

$("#saveButton8").click(function () {
    if (window.localStorage) {
        localStorage.setItem("4PMToDos", $("#4PMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 5 PM time slot can be pushed into the local storage as "5PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("5PMToDos") !="") {
    $("#5PMEntry").val(localStorage.getItem("5PMToDos"));
}

$("#saveButton9").click(function () {
    if (window.localStorage) {
        localStorage.setItem("5PMToDos", $("#5PMEntry").val());
        setTimeout(function() {
        window.location.replace("index.html");
    }); 
}
});