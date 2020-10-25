// from data.js
var tableData = data;

// Using the UFO dataset provided in the form of an array of JavaScript 
// objects, write code that appends a table to your web page and then 
// adds new rows of data for each UFO sighting.

// Set reference to table body
var tbody = d3.select("tbody");

// log data
// console.log(data);

// append one table row for each object
// Make sure you have a column for 
// date/time, city, state, country, shape, and comment 
// module 14.3 exercise 3
data.forEach((ufoTable) => {
    var row = tbody.append("tr");
    Object.entries(ufoTable).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
  
// Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the date/time column to find rows that match user input
// module 14.3 exercise 9
var date = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.data("datetime");

  console.log(inputValue);
  console.log(data);

  var filteredData = data.filter(data => data.datetime === inputValue);

  console.log(filteredData);
};

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);
// };