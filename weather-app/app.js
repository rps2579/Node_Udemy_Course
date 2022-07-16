const fetch_location_data = require("./utils/geocode");
const fetch_weather_data = require("./utils/weatherstack");

const locationForWeather = process.argv[2];

if (!locationForWeather) {
  console.log("Please provide a location");
  return;
}

fetch_location_data(locationForWeather, (error, locationData) => {
  if (error) {
    return console.log(error);
  }

  fetch_weather_data(locationData.lat, locationData.lon, (error, weatherData) => {
    if (error) {
      return console.log(error);
    }
    
    // we can use both the locationData and weatherData here
    // interpolation works only with ` and NOT '/"
    console.log(`Location: ${locationData.full_detail}`);
    console.log(weatherData);
  });
});
