const fetch_location_data = require("./utils/geocode");
const fetch_weather_data = require("./utils/weatherstack");

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
