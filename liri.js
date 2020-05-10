require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var action = process.argv[2];

// console.log(action);

switch (action) {

  case "spotify-this-pop":
    getPop();
    console.log("Getting pop...");

    break;

  default:
    console.log("dont know how to do that :(");
    getPop();

    break;
};



function getPop() {

  var popularityVar = "";

  if (process.argv[3] != null) {

    var querySearch = process.argv[3];


  }

  else {

    var querySearch = 'chrmng,';

  }



  spotify.search({ type: 'artist', query: querySearch }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    else {


    }

    popularityVar = data.artists.items[0].popularity;
    console.log(popularityVar);



  });



};


