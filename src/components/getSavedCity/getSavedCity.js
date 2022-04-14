import Service from "../service/service";
import valid from "../valid/valid";
import catchError from "../catchError/catchError";

//function that gets clicked by user city and making a query to API
export default function getSavedCity(props, getFavourite, getTheme) {
  let WeatherService = new Service();
  WeatherService.getCurrent(props.toLowerCase())
    .then((res) => valid(res, props, getFavourite, getTheme))
    .catch((err) => {
      catchError(err);
    });
}
