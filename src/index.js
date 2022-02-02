import "./styles/main.sass"

const _apiBase = "http://api.weatherapi.com/v1/"
const _apiKey = "f3355337615d498fbfa03825211912"

const app = document.getElementById("app")

let obj;

fetch(`${_apiBase}current.json?key=${_apiKey}&q=London&aqi=no`)
    .then(res => res.json())
    .then(result => valid(result))

function valid(res) {
    obj = res;

    let city = document.querySelector(".block-city")
    city.innerHTML = obj.location.name;

    let temp = document.querySelector(".block-temp")
    temp.innerHTML = "Temperature: " + obj.current.temp_c + " C";

    let tempFeels = document.querySelector(".block-temp-feels")
    tempFeels.innerHTML = "Feels like: " + Math.round(obj.current.feelslike_c) + " C";

    let windDir = document.querySelector(".block-wind-dir")
    windDir.innerHTML = "Wind direction: " + obj.current.wind_dir;

    let windSpeed = document.querySelector(".block-wind-speed")
    windSpeed.innerHTML = "Wind speed: " + Math.round(obj.current.wind_kph) + " km/h";

    let humidity = document.querySelector(".block-humidity")
    humidity.innerHTML = "Humidity: " + Math.round(obj.current.humidity) + "%";

    let updated = document.querySelector(".block-updated")
    updated.innerHTML = "Last updated: " + obj.current.last_updated;

    if(obj.current.is_day == 1) {
        app.style.background = "linear-gradient(45deg, rgba(20,3,61,1) 36%, rgba(150,152,34,1) 100%)"
    } else {
        app.style.background = "#14033D"
    }
}