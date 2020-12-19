const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?access_token=pk.eyJ1Ijoib21vem9rZWx2aW4iLCJhIjoiY2toeWx4eHFzMmhrYzJ4a3p5NmY3c3BtciJ9.hSGHyX3AlacT8UvZNihy7A&limit=1`;

  request({url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable to connect to location services!', undefined);
    } else if(body.features.length === 0) {
      callback('Unable to find location, try another search', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  });
}

module.exports = geocode;