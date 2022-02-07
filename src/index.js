import "./styles/main.sass"

const _apiBase = "https://api.weatherapi.com/v1/"
const _apiKey = "f3355337615d498fbfa03825211912"

const app = document.getElementById("app")

let obj;

let input = document.querySelector(".block-input")
let cityValue = "";
input.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        cityValue = input.value
        console.log(cityValue)
        if(cityValue != "" && cityValue != " ") {
            fetch(`${_apiBase}current.json?key=${_apiKey}&q=${cityValue}&aqi=no`)
            .then(res => res.json())
            .then(result => valid(result))
        }
    }
})

fetch(`${_apiBase}current.json?key=${_apiKey}&q=Minsk&aqi=no`)
    .then(res => res.json())
    .then(result => valid(result))

function valid(res) {
    obj = res;

    if(obj) {
        let city = document.querySelector(".app-city")
        city.innerHTML = obj.location.name;
    
        let temp = document.querySelector(".app-temp")
        temp.innerHTML = Math.round(obj.current.temp_c) + "°";
    
        let cloud = document.querySelector(".app-cloud")
        cloud.innerHTML = obj.current.condition.text;
    
        let windDir = document.querySelector(".block-wind-dir")
        windDir.innerHTML = "Wind direction: " + obj.current.wind_dir;
    
        let windSpeed = document.querySelector(".block-wind-speed")
        windSpeed.innerHTML = Math.round(obj.current.wind_kph) + " km/h";
    
        let humidity = document.querySelector(".block-humidity")
        humidity.innerHTML = "Humidity: " + Math.round(obj.current.humidity) + "%";
    
        if(obj.current.is_day == 1) {
            app.style.background = "linear-gradient(45deg, rgba(20,3,61,1) 36%, rgba(150,152,34,1) 100%)"
        } else {
            app.style.background = "#14033D"
        }
    } else {
        alert("Some error has occured. Try other city or check your internet connection")
    }
}