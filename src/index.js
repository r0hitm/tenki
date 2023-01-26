// Uses OpenWeatherMap API to fetch weather data for a given city
// and displays it on the page.
// Author: Rohit Mehta

const API_KEY = "f0c5c05c6f612287042904ba9e1d65a5";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
const GEOCODE_API = "https://api.openweathermap.org/geo/1.0/direct";
const WEATHER_ICON_API = "https://openweathermap.org/img/wn";

const weatherData = {
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
    toMetric: function () {
        this.temp = (this.temp - 32) / 1.8; // Convert to C
        this.temp = Math.round((this.temp + Number.EPSILON) * 100) / 100;
        this.tempUnit = "C";
        this.wind = this.wind / 2.237; // Convert to m/s
        this.wind = Math.round((this.wind + Number.EPSILON) * 100) / 100;
        this.windUnit = "m/s";
        // this.pressureUnit = "hPa";
    },
    toImperial: function () {
        this.temp = this.temp * 1.8 + 32; // Convert to F
        this.temp = Math.round((this.temp + Number.EPSILON) * 100) / 100;
        this.tempUnit = "F";
        this.wind = this.wind * 2.237; // Convert to mph
        this.wind = Math.round((this.wind + Number.EPSILON) * 100) / 100;
        this.windUnit = "mph";
    },
};

// DOM Elements
const searchForm = document.getElementById("search");
const city = document.getElementById("city");
const wIcon = document.getElementById("w-desc-icon");
const wDesc = document.getElementById("w-desc");
const wTemp = document.getElementById("w-temp");
const wTempC = document.getElementById("w-temp-unit-c");
const wTempF = document.getElementById("w-temp-unit-f");
const wHumidity = document.getElementById("w-humidity");
const wWind = document.getElementById("w-wind");
const wPressure = document.getElementById("w-pressure");

wTempC.addEventListener("click", () => {
    weatherData.toImperial();
    wTempC.classList.add("hidden");
    wTempF.classList.remove("hidden");
    updateDOM();
});

wTempF.addEventListener("click", () => {
    weatherData.toMetric();
    wTempF.classList.add("hidden");
    wTempC.classList.remove("hidden");
    updateDOM();
});


// Async function to fetch data from the given API

// Fetch weather data for the given city and update the weatherData object
async function fetchWeatherData(q) {
    // Fetch coordinates for the given city,q
    let url = `${GEOCODE_API}?q=${q}&limit=1&appid=${API_KEY}`;
    let res = await fetch(url);
    let data = await res.json();
    const { name, lat, lon } = data[0];

    // const metric = weatherData.tempUnit === "C" ? "metric" : "imperial";
    url = `${WEATHER_API}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    res = await fetch(url);
    data = await res.json();
    const { weather, main, wind } = data;

    weatherData.city = name;
    weatherData.lat = lat;
    weatherData.lon = lon;
    weatherData.desc = weather[0].main;
    weatherData.iconCode = weather[0].icon;
    weatherData.temp = main.temp;
    weatherData.humidity = main.humidity;
    weatherData.wind = wind.speed;
    weatherData.pressure = main.pressure;
    // return weatherData;
}

// Event Listeners
searchForm.addEventListener("submit", async e => {
    e.preventDefault();
    const q = searchForm.q.value; // Default city
    // console.log(q);
    searchForm.reset();

    // Fetch coordinates for the given city,q
    // and then fetch weather data for the coordinates
    // Note: fetch stores the data in the weatherData object, so we don't need to return anything
    try {
        await fetchWeatherData(q);
    } catch (err) {
        console.log(err);
    }

    console.log(weatherData);

    updateDOM();
});

// Update the dom elements with the weatherData
const updateDOM = _ => {
    // Display weather data
    city.textContent = weatherData.city;
    wDesc.textContent = weatherData.desc;
    wTemp.textContent = weatherData.temp;
    wHumidity.textContent = weatherData.humidity;
    wWind.textContent = weatherData.wind + " " + weatherData.windUnit;
    wPressure.textContent =
        weatherData.pressure + " " + weatherData.pressureUnit;
    // wIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weatherData.iconCode}.png`);
    wIcon.src = `https://openweathermap.org/img/wn/${weatherData.iconCode}.png`;
}

// fetchGeocode("London");
// searchForm.submit();
