// Uses OpenWeatherMap API to fetch weather data for a given city
// and displays it on the page.
// Author: Rohit Mehta

const API_KEY = "f0c5c05c6f612287042904ba9e1d65a5";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
const GEOCODE_API = "https://api.openweathermap.org/geo/1.0/direct";
const WEATHER_ICON_API = "https://openweathermap.org/img/wn";

// DOM Elements
const searchForm = document.getElementById("search");
const city = document.getElementById("city");
const wDescIcon = document.getElementById("w-desc-icon");
const wDesc = document.getElementById("w-desc");
const wTemp = document.getElementById("w-temp");
const wTempC = document.getElementById("w-temp-unit-c");
const wTempF = document.getElementById("w-temp-unit-f");
const wHumidity = document.getElementById("w-humidity");
const wWind = document.getElementById("w-wind");
const wPressure = document.getElementById("w-pressure");

// console.log(searchForm);
const weather = {
    city: "",
    lat: 0,
    lon: 0,
    desc: "",
    iconCode: "",
    temp: 0,
    tempUnit: "C",
    wind: 0,
    windUnit: "m/s",
    pressure: 0,
    pressureUnit: "hPa",
    humidity: 0,
};

// Async function to fetch data from the given API

// String ->
// Fetch Coordinates for the given location
const fetchGeocode = async loc => {
    const url = `${GEOCODE_API}?q=${loc}&limit=1&appid=${API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const { name, lat, lon } = data[0];
        console.log( name, lat, lon);
        weather.city = name;
        weather.lat = lat;
        weather.lon = lon;
        return 
    } catch (err) {
        console.log(err);
    }
};

// Fetch weather data for the given coordinates
async function fetchWeather(lat, lon) {
    //     const url = `${WEATHER_API}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    //     try {
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     const { weather, main, wind } = data;
    //     console.log(weather, main, wind);
    // todo
    // }
}

// Event Listeners
searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const q = searchForm.q.value;
    // console.log(q);
    searchForm.reset();

    // Fetch coordinates for the given city
    // console.log(fetchGeocode(q));

    // Fetch weather data using the coordinates
    // fetchWeather(coords.lat, coords.lon)
    //     .then(data => {
    //         const { weather, main, wind } = data;
    //         console.log(weather, main, wind);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    // Display weather data
    // todo
});

fetchGeocode("London");