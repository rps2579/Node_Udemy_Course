const fetch_location_data = require("./utils/geocode");
const fetch_weather_data = require("./utils/weatherstack");

fetch_location_data("Gajuwaka", (error, locationData) => {
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
