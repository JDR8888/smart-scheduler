//define vars 
var timeRow = $(".time-block");
var saver = $(".saveBtn");

// wait to page loads to run stuff
$(document).ready(function() {
  let today = dayjs();
  $('#currentDay').text(today.format('[Today is] MMM D YYYY')); // sets #currentDay id element's text to display the current day from dayjs in dd month(3ltr name) YYYY format.
  let hour = today.hour(); // i want to have the up-to-date hour as soon as i load the page.

  
  // for each element with class .time-block, i will get the id, take the last two values of the string (the nubmers) and assign those as the value for currentThing (current appointment box thing)
  $(timeRow).each(function() {
    // if (this.attr("id").substring(5,6) < hour) {
    currentThing = this;
    myID = $(currentThing).attr('id'); // get id
    value = myID.substring(5,7); //hour value is in last two indices of the id string
    // console.log(value);
    if (value > hour) { //if appt time is > current time
      $(currentThing).addClass("future"); //give future class
    } else if (value == hour) {
      $(currentThing).addClass("present");
    } else {
      $(currentThing).addClass("past");
    };

    function saveMe(mama) {
      mama = mama;
      console.log(mama);
      // let thingToSave = $(#mama);
      // console.log(thingToSave);
    }

    $(timeRow).on("click", saver, function(event){
      // console.log(event.target);
      // event.stopPropagation();
      let baby = event.target;
      let mama = $(baby).parent();
      let mamaWho = $(mama).attr("id");
      // let msg = $(mamaWho).text();
      console.log(mamaWho);
      saveMe(mamaWho);
    });
    

  });
});
  
  
  // let value = 
  

  // $(function () {
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    


// TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //