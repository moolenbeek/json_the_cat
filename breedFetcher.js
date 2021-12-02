const request = require('request');
const args = process.argv.slice(2);

const url = 'https://api.thecatapi.com/v1/breeds/search?name=' + args[0];

request(url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the Status code

  // console.log('url: ', url)
  // console.log(typeof body);
  // console.log('typeof data: ', typeof data);

  const data = JSON.parse(body);

  if (data[0]) {
    console.log('description: ', data[0]['description']);
  } else {
    console.log('breed not found');
  }
});

