export default function valid(res, cityValue, getFavourite, getTheme) {
  //getting html tags
  let check = document.querySelector(".app-city-check");
  let cityImg = document.querySelector(".app-city-img");
  let city = document.querySelector(".app-city");
  let star = document.querySelector(".app-city-star");
  let temp = document.querySelector(".app-temp");
  let cloud = document.querySelector(".app-cloud");
  let windDir = document.querySelector(".block-wind-dir");
  let windSpeed = document.querySelector(".block-wind-speed");
  let humidity = document.querySelector(".block-humidity");
  let pressure = document.querySelector(".block-pressure");

  let precip = document.querySelector(".details-precip");
  let feels = document.querySelector(".details-feels");
  let visibility = document.querySelector(".details-visibility");
  let gust = document.querySelector(".details-gust");
  let uv = document.querySelector(".details-uv");
  let degree = document.querySelector(".details-degree");
  let time = document.querySelector(".details-time");
  let updated = document.querySelector(".details-updated");
  //pushing weather info
  city.innerHTML = res.location.name;
  cityImg.src = res.current.condition.icon;
  temp.innerHTML = Math.round(res.current.temp_c) + "°";
  cloud.innerHTML = res.current.condition.text;
  windDir.innerHTML = res.current.wind_dir;
  windSpeed.innerHTML = Math.round(res.current.wind_kph) + " km/h";
  humidity.innerHTML = Math.round(res.current.humidity) + "%";
  pressure.innerHTML = res.current.pressure_mb + "mbar";

  gust.innerHTML = "Gust: " + Math.round(res.current.gust_kph) + " km/h";
  visibility.innerHTML = "Visibility: " + res.current.vis_km + "km";
  degree.innerHTML = "Wind degree: " + res.current.wind_degree + "°";
  uv.innerHTML = "UV index: " + res.current.uv;
  precip.innerHTML = "Precip: " + res.current.precip_mm + "mm";
  feels.innerHTML = "Feels like " + Math.round(res.current.feelslike_c) + "°";
  updated.innerHTML =
    "Updated on " +
    Array.from(res.current.last_updated).reduce(
      (prev, item, index) => (index >= 11 ? prev + item : ""),
      ""
    );
  time.innerHTML =
    "Local time: " +
    Array.from(res.location.localtime).reduce(
      (prev, item, index) => (index >= 11 ? prev + item : ""),
      ""
    );

  //function that checks, adds and deletes favourite cities
  getFavourite(cityValue, check, city, star);

  //function that changes the apps theme according to current time in the city
  getTheme(res);
}
