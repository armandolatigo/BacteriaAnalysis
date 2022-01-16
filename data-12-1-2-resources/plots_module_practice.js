// LINE GRAPH**

// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Plotly.newPlot("Gorbin", [{x: [5, 10, 5], y: [10, 20, 30]}]);


// BAR GRAPH**

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };

//  var layout = {
//      title: "Luncheon Survey",
//      xaxis: {title: "Food Option"},
//      yaxis: {title: "Number of Respondents"}
//  };

//  Plotly.newPlot("PlotArea", [trace], layout);



// PIE CHART **

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };

// var layout = {
//     title: "Bar Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "Percent of Drinks Ordered"}
// };

// Plotly.newPlot("PlotArea", [trace], layout);


// SCATTER PLOT **

// var trace1 = {
//     x: [1, 6, 3, 9, 13],
//     y: [1, 4, 8, 12, 16],
//     mode: 'markers',
//     type: 'scatter'
// };

// Plotly.newPlot("PlotArea", [trace1]);


/// .map() METHOD**

// let words = ['these', 'words', 'need', 'capitalized']

// let caps = words.map(word => word.toUpperCase())

// console.log(caps);

// var numbers = [1, 2, 3, 4];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);


// SKILLDRILL 12.2.1

// var numbers = [0, 2, 4, 6, 8];
// var squared = numbers.map(function(num){
//     return num+5
// });
// console.log(squared);


// .map() THROUGH A LIST OF ARRAYS

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(Catch){
//     return Catch.City;
// });
// console.log(cityNames);



// .filter() EXAMPLE #1

// let numbers = [13, 22, 36, 54, 55];
// let evenNumbers = numbers.filter(number => number % 2 == 0);
// console.log(evenNumbers);


// .filter() EXAMPLE #2

// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;

// });
// console.log(larger);

// SKILL DRILL 12.2.1

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// var startsWithS = words.filter(letter => letter.startsWith("s"));

// console.log(startsWithS);


// EXAMPLE # ?

// var numbers = [1, 2, 3, 4, 5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);



// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement, anotherElement) => anotherElement - anElement)
// console.log(sortedAge);


// .slice() EXAMPLE

// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0, 3);
// console.log(slice1);


// SKILL DRILL 12.2.1 

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice = words.slice(0,3);
console.log(slice);
