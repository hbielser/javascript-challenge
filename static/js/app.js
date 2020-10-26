// Using the UFO dataset provided in the form of an array of JavaScript 
// objects, write code that appends a table to your web page and then 
// adds new rows of data for each UFO sighting.

// Set reference to index id
var ufoTable = d3.select("#ufo-table");

// Set reference to table body
var tBody = d3.select("tbody");

// log data
// console.log(data);

// append one table row for each object
// Make sure you have a column for 
// date/time, city, state, country, shape, and comment 
// module 14.3 exercise 3
data.forEach(sighting => {
    var row = tBody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
  
// Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the date/time column to find rows that match user input
// module 14.3 exercise 9

// Select the form
var form = d3.select("#filters");

// Select the search field
var dateField = d3.select("#datetime");

// Select the button
var filterButton = d3.select("#filter-btn");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

  // // Prevent the page from refreshing
  // d3.event.preventDefault();

filterButton.on("click", () => {

  // Get the value property of the input element
  var inputValue = dateField.property("value");
  console.log(inputValue);
  tBody.remove();
  tBody = ufoTable.append("tbody");

  data.filter(inputValue)
    .forEach(sighting => {
        var row = tBody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});