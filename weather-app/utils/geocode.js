const request = require("request");

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
      callback(undefined, {
        lat: response.body.features[0].center[1],
        lon: response.body.features[0].center[0],
        full_detail: response.body.features[0].place_name,
        short_detail: response.body.features[0].text,
      });
    }
  });
};

module.exports = fetch_location_data;
