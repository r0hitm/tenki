# 🌡 天気 (Tenki)

A Weather Forecast Web Application.

The app uses Geocode and Weather APIs from [OpenWeatherMap](https://openweathermap.org/api) to get the coordinates of a city that the user searches for, and then uses the coordinates to get the weather forecast for that city.
(Because the weather api requires coordinates and in-built geocoding is deprecated.)

*Note: 天気 (Tenki) is Japanese for weather.*

## Features

- [ ] Show the weather forecast using the [OpenWeatherMap API](https://openweathermap.org/api)
- [ ] Search for a city
- [ ] Display the forecast in Celsius or Fahrenheit
- [ ] Background image changes depending on the weather
- [ ] Greet using a gif depending on the weather

I am using this project to learn asynchronicity (`Promises` and, `async + wait`) in JavaScript, and to practice using APIs.
This project is inspired by [TOP Curriculum](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).

### Note to Self

- [ ] Obfuscate API key (Currently, the API key is visible in the source code. It is not a problem for now, but it is not a good practice. I will look into how to obfuscate the API key.)