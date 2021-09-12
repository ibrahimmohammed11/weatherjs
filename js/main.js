let search = document.getElementById("search");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let weath = document.querySelector(".weather");
let temp = document.querySelector(".temp");
let highLow = document.querySelector(".hi-low");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let windDegree = document.getElementById("windDegree");

search.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getWeather(search.value);
  }
}

let weather = [];
getWeather("cairo");
async function getWeather(query) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=0e7deec2410b304f98f7e78457b47932`
  );
  weather = await response.json();
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;
  weath.innerHTML = weather.weather[0].main;
  temp.innerHTML = `${Math.round(weather.main.temp - 273.15)}<span>°c</span>`;
  windSpeed.innerHTML = weather.wind.speed;
  windDegree.innerHTML = weather.wind.deg;
  humidity.innerHTML = weather.main.humidity;

  highLow.innerHTML = `${Math.round(weather.main.temp_min - 273.15)}°c / 
  ${Math.round(weather.main.temp_max - 273.15)}°c`;
}

function dateBuild() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = new Date();
  let day = days[today.getDay()];
  let month = months[today.getMonth()];

  date.innerHTML = `${day}  ${today.getDate()} ${month} ${today.getFullYear()}`;
}

dateBuild();
