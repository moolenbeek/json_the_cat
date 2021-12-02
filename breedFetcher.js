const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search?name=' + breedName;

  request(url, function(error, response, body) {
    const data = JSON.parse(body);
  
    if (data[0]) {
      response = data[0]['description'];
      callback(null, response);
    } else {
      error = 'breed not found';
      callback(error, null);
    }
  });

};

module.exports = { fetchBreedDescription };