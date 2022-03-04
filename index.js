import "./styles/main.sass"
import getTheme from "./components/getTheme/getTheme.js"
import getFavourite from "./components/getFavourite/getFavourite"
import getSimilarCities from "./components/getSimilarCities/getSimilarCities"
import deleteSimilarBlock from "./components/deleteSimilarBlock/deleteSimilarBlock"

//api info
const _apiBase = "https://api.weatherapi.com/v1/"
const _apiKey = "f3355337615d498fbfa03825211912"

//getting html tags
let check = document.querySelector(".app-city-check")
let cityImg = document.querySelector(".app-city-img")
let city = document.querySelector(".app-city")
let star = document.querySelector(".app-city-star")
let temp = document.querySelector(".app-temp")
let cloud = document.querySelector(".app-cloud")
let windDir = document.querySelector(".block-wind-dir")
let windSpeed = document.querySelector(".block-wind-speed")
let humidity = document.querySelector(".block-humidity")
let pressure = document.querySelector(".block-pressure")

//base query which is executed when the app is load
fetch(`${_apiBase}current.json?key=${_apiKey}&q=Minsk&aqi=no`)
    .then(res => res.json())
    .then(result => valid(result))

let cityValue = "minsk";
let seacrhItems = [];

//getting input form user, transforming it and sendind a query if the input is valid
let input = document.querySelector(".app-input-field")

input.addEventListener("keydown", (e) => {
    if(input.value.length > 2) {
        getSimilarCities(input.value)
        console.log("lol")
    } else {
        deleteSimilarBlock()
    }

    seacrhItems = document.querySelectorAll(".block-item")
    for(let el of seacrhItems) {
        el.onclick = function() {
            fetch(`${_apiBase}current.json?key=${_apiKey}&q=${el.innerText.toLowerCase()}&aqi=no`)
            .then(res => res.json())
            .then(result => valid(result))

            deleteSimilarBlock()
            input.value = ""
            cityValue = el.innerText.toLowerCase()
        }
    }

    if(e.key == "Enter") {
        cityValue = input.value
        cityValue = cityValue.toLowerCase()
        if(cityValue != "" && cityValue != " ") {
            fetch(`${_apiBase}current.json?key=${_apiKey}&q=${cityValue}&aqi=no`)
            .then(res => res.json())
            .then(result => valid(result))
        }
    }
})

function valid(res) {
    if(res) {

        deleteSimilarBlock()
        input.value = ""

        //pushing weather info
        city.innerHTML = res.location.name;
        cityImg.src = res.current.condition.icon;
        temp.innerHTML = Math.round(res.current.temp_c) + "°";
        cloud.innerHTML = res.current.condition.text;
        windDir.innerHTML = res.current.wind_dir;
        windSpeed.innerHTML = Math.round(res.current.wind_kph) + " km/h";
        humidity.innerHTML = Math.round(res.current.humidity) + "%";
        pressure.innerHTML = res.current.pressure_mb + "mbar";

        //function that checks, adds and deletes favourite cities
        getFavourite(cityValue, check, city, star)

        //function that changes the apps theme according to current time in the city
        getTheme(res)

    } else {
        alert("Some error has occured. Try other city or check your internet connection")
    }
}