import "./styles/main.sass"
import getTheme from "./components/getTheme/getTheme.js"
import getFavourite from "./components/getFavourite/getFavourite"

//api info
const _apiBase = "https://api.weatherapi.com/v1/"
const _apiKey = "f3355337615d498fbfa03825211912"

//base query which is executed when the app is load
fetch(`${_apiBase}current.json?key=${_apiKey}&q=Minsk&aqi=no`)
    .then(res => res.json())
    .then(result => valid(result))

let cityValue = "minsk";

function valid(res, cityInput = "minsk") {
    if(res) {

        //getting html tags and pushing weather info inside
        let city = document.querySelector(".app-city")
        city.innerHTML = res.location.name;
    
        let temp = document.querySelector(".app-temp")
        temp.innerHTML = Math.round(res.current.temp_c) + "°";
    
        let cloud = document.querySelector(".app-cloud")
        cloud.innerHTML = res.current.condition.text;
    
        let windDir = document.querySelector(".block-wind-dir")
        windDir.innerHTML = res.current.wind_dir;
    
        let windSpeed = document.querySelector(".block-wind-speed")
        windSpeed.innerHTML = Math.round(res.current.wind_kph) + " km/h";
    
        let humidity = document.querySelector(".block-humidity")
        humidity.innerHTML = Math.round(res.current.humidity) + "%";

        let pressure = document.querySelector(".block-pressure")
        pressure.innerHTML = res.current.pressure_mb + "mbar";

        //function that checks, adds and deletes favourite cities
        getFavourite(cityInput)

        //function that changes the apps theme according to current time in the city
        getTheme(res)

    } else {
        alert("Some error has occured. Try other city or check your internet connection")
    }
}

//getting input form user, transforming it and sendind a query if the input is valid
let input = document.querySelector(".block-input")

input.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        cityValue = input.value
        cityValue = cityValue.toLowerCase()
        if(cityValue != "" && cityValue != " ") {
            fetch(`${_apiBase}current.json?key=${_apiKey}&q=${cityValue}&aqi=no`)
            .then(res => res.json())
            .then(result => valid(result, cityValue))
        }
    }
})