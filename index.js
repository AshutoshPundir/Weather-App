const apiKey = "7bb69ed1080a3903f70ac8ec4edcaace";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



const searchBar = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBar button");

async function fetchWeather(city) {
    const response = await fetch( `${apiUrl}${city}&appid=${apiKey}`);
    var data = await response.json();

    if(data.cod === "404"){
       
        return;
    }
    else{

        const weatherIcon = document.querySelector(".weatherIcon");

        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "sunny"){
            weatherIcon.src = "/Image/weather-icon_-sunny.svg";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/Image/weather-icon_-cloudy.svg";
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src = "/Image/weather-icon_-moderate-rain.svg";
        }
        else if(data.weather[0].main == "snow"){
            weatherIcon.src = "/Image/weather-icon_-heavy-snow.svg";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "/Image/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
        }
        console.log(data)

}

searchBtn.addEventListener("click", ()=>{
    fetchWeather(searchBar.value);
})

searchBar.addEventListener("keyup", (event)=>{
    if(event.key == "Enter"){
        fetchWeather(searchBar.value);
    }
})