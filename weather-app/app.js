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

const fetch_location_data = (address, callback) => {
  const location_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/
    ${encodeURIComponent(address)}
    .json?access_token=pk.eyJ1IjoicnBzMjU3OSIsImEiOiJjbDVuejF0c2swYzNzM2ZtandycXU4bTh0In0.vhJoOvO-XF_AE-H_x94hrQ&limit=1`;

  request({ url: location_url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location service", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      const lat = response.body.features[0].center[1];
      const lon = response.body.features[0].center[0];

      callback(undefined, [lat, lon]);
    }
  });
};

fetch_location_data("Gajuwaka", (error, response) => {
  if (error) {
    console.log(error);
  } else {
    fetch_weather_data(response, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    });
  }
});
