import "./styles/main.sass";
import getTheme from "./components/getTheme/getTheme.js";
import getFavourite from "./components/getFavourite/getFavourite";
import getSimilarCities from "./components/getSimilarCities/getSimilarCities";
import deleteSimilarBlock from "./components/deleteSimilarBlock/deleteSimilarBlock";
import router from "./components/router/router";
import favouritePage from "./components/favouritePage/favouritePage";
import catchError from "./components/catchError/catchError";
import Service from "./components/service/service";
import valid from "./components/valid/valid";

import home from "./img/home.webp";
import favourite from "./img/favourite.webp";

let WeatherService = new Service();
WeatherService.getCurrent()
  .then((res) => valid(res, "minsk", getFavourite, getTheme))
  .catch((err) => {
    catchError(err);
  });

//enabling routing in the app
router();

let cityValue = "minsk";

//getting input from user, transforming it and sending a query if the input is valid
let input = document.querySelector(".app-input-field");

//transmitting event to the handle function
input.onkeyup = handle;

//function that handling onkeyup event
function handle(e) {
  console.log(e);
  //checking if key is an Enter and then in this case making a query to API
  if (e.key === "Enter") {
    cityValue = input.value;
    input.value = "";
    cityValue = cityValue.toLowerCase();
    if (cityValue != "" && cityValue != " ") {
      WeatherService.getCurrent(cityValue)
        .then((res) => valid(res, cityValue, getFavourite, getTheme))
        .catch((err) => {
          catchError(err);
        });
    }
  }

  //if there are more than 3 symbold rendering city suggestions
  if (input.value.length >= 3) {
    getSimilarCities(input.value);
  } else {
    deleteSimilarBlock();
  }
}
