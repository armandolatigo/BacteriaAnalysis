//const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json(url).then(spaceXresults => console.log(spaceXresults));
// d3.json(url).then(spaceXresults => console.log(spaceXresults[0].location.latitude));



// SKILL DRILL 12.3.1
//var spaceXResults = d3.json(url);
//console.log(spaceXResults);

//var spaceLocations = spaceXResults.map(location => location.longitude);
//console.log(spaceLocations);


//longlat.map(spaceXResults => console.log(spaceXResults[0]));
//console.log(longlat);

//var latitude = d3.json(url).then(spaceXResults =>
 //   spaceXResults.map(num => num.location.latitude));


//var longitude = d3.json(url).then(spaceXResults =>
  //  spaceXResults.map(num => num.location.longitude));

// ----- THE CORRECT ONE -------------
d3.json(url).then((spaceXResults)=> {
var latitude = spaceXResults.map(num=>num.location.latitude)
var longitude = spaceXResults.map(num=>num.location.longitude)
var launch_name = spaceXResults.map(num=>num.name)
console.log(latitude, longitude, launch_name)
});
//------------------------------------  



//  var baseLocation = spaceXResults.map(Locations => Locations.location.latitude)
//  console.log(baseLocation)

//  var baseLocation2 = spaceXResults.map(Locations => Locations.location.longitude)
//  console.log(baseLocation2)

// });

//var spaceLocations = spaceXResults[0].map(location => location.longitude);
//console.log(spaceLocations);


//d3.json("samples.json").then(function(data){
//    console.log("hello");
//});