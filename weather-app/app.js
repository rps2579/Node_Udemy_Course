const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=57616d1b5eee9836067ee022fd83359a&query=17.6868,83.2185';

request({ url: url }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        const data = JSON.parse(response.body);
        console.log(data.current);
    }
});