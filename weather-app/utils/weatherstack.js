const request = require("request");

const fetch_weather_data = (lat_lon_arr, callback) => {
  const lat = lat_lon_arr[0];
  const lon = lat_lon_arr[1];
  const weather_url = `http://api.weatherstack.com/current?access_key=57616d1b5eee9836067ee022fd83359a&query=${lat},${lon}`;

  request({ url: weather_url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `It is currently ${response.body.current.temperature} degrees out. There is a  ${response.body.current.precip * 10} % chance of rain.\n${response.body.current.weather_descriptions[0]}`
      );
    }
  });
};

module.exports = fetch_weather_data;