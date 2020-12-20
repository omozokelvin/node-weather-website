const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=9b8ffa410f4a5450b6138b6b17f4a2d6&query=${ encodeURIComponent(longitude), encodeURIComponent(latitude) }&units=s`;

  request({url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable to connect to weather service', undefined);
    } else if(body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, `${ body.current.weather_descriptions[0] }. It is currently ${ body.current.temperature } degrees out. It feels like ${ body.current.feelslike } degrees out, the humidity is ${ body.current.humidity }%`);
    }
  });

}

module.exports = forecast;