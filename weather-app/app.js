const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=57616d1b5eee9836067ee022fd83359a&query=17.6868,83.2185';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        console.log("It is currently ", response.body.current.temperature, " degrees out. There is a ", response.body.current.precip*100, "% chance of rain.");
        console.log(response.body.current.weather_descriptions[0]);
    }
});

const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Yarada.json?access_token=pk.eyJ1IjoicnBzMjU3OSIsImEiOiJjbDVuejF0c2swYzNzM2ZtandycXU4bTh0In0.vhJoOvO-XF_AE-H_x94hrQ&limit=1';

request({ url: location_url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location');
    } else {
        console.log(response.body.features[0].center);
        console.log(response.body.features[0].center[1], response.body.features[0].center[0]);
    }
});
