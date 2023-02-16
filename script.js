//define vars 
var timeRow = $(".time-block");
var saver = $(".saveBtn");
var messageBox = [];
var importantText;
var babySibling;
var mamaWho;

// wait to page loads to run stuff
$(document).ready(function() {
  let today = dayjs();
  $('#currentDay').text(today.format('[Today is] MMM D YYYY')); // sets #currentDay id element's text to display the current day from dayjs
  let hour = today.hour(); // get current hr 

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
    }
  });

  // useful when saving the description in local storage?
  
    $(timeRow).on('click', saver, function() {
      let currentThing = $(this).attr("id");
      textToSave = $(this).children(".description").val();
      localStorage.setItem(currentThing, textToSave);
    });
  
  function getData() {

  }
    
    

}); //this closes everything


  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  
    // function getData() {
    //   message = localStorage.getItem(mamaWho,msg);
    //   $(babySibling).text(message);
    //   console.log(message);
    // }