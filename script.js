//define vars
var timeRow = $(".time-block"); // quick reference to our time blocks
var saver = $(".saveBtn"); // quick ref for buttons with class "saveBtn"
// wait to page loads to run stuff
$(document).ready(function() {
  let today = dayjs();
  $('#currentDay').text(today.format('[Today is] D MMM YYYY')); // sets #currentDay id element's text to display the current day from dayjs
  let hour = today.hour(); // get current hr 

  // for each element with class .time-block, i will get the id, take the last two values of the string (the nubmers) and assign those as the value for currentThing (current appointment box thing)
  $(timeRow).each(function() {
    currentThing = this;
    myID = $(currentThing).attr('id'); 
    value = myID.substring(5,7); //hour value is in last two indices of the id string
    if (value > hour) { //if appt time is > current time
      $(currentThing).addClass("future"); //give future class
    } else if (value == hour) {
      $(currentThing).addClass("present");
    } else {
      $(currentThing).addClass("past");
    }
  });

    $(timeRow).on('click', saver, function() { //all time blocks wait for a click event from a saver button
      let currentThing = $(this).attr("id"); // get the id from the time block
      textToSave = $(this).children(".description").val(); //whatever the value of the text area with class of "description" within that timeblock, is what we want to save.
      localStorage.setItem(currentThing, textToSave); //save that text to local storage using the specific time block's id as the key (which will be needed for retrieval)
    });
  
  function getMyData() { //only loop through what's actually in storage
    for (i = 0; i < localStorage.length; i++) {
      let x = localStorage.key(i); //x takes value of storage key (which was set as the id of whatever time block had text saved);
      let rightPlace = $("#"+x); //gets us to the right time box when we search by id (which x captures); we could also use vanilla/standard js and do getElementById(x) to get the same result.
      messageForBaby = localStorage.getItem(x); //get our text/value out of storage for the current key (x)
      $(rightPlace).children(".description").text(messageForBaby); //set that message as the text for our textarea element (look for child of current time block with class == "description").
    };
  };
  getMyData(); //we want this called whenever the page is refreshed/loaded
    
}); //this closes everything inside the document.load thingy

  