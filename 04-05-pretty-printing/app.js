const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC9GpawKUd9yqQ7l0cs297oQCNZR7KiPH0&&address=mitrais%20yogyakarta',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
