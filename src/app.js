let now = new Date();
let h2 = document.querySelector("h2");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeather(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector(".description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "e9f0df1070f392cefc3e4f112830f1d3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "e9f0df1070f392cefc3e4f112830f1d3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", getCurrentLocation);

searchCity("Toronto");



function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (Celciustemperature * 9)/5 +32;
  document.querySelector("#temperature").innerHTML = Math.round(fahrenheitTemperature) 
}

let fahrenheittemp= document.querySelector("#fahrenheit-temp");
fahrenheittemp.addEventListener("click", displayFahrenheitTemperature)

function displayCelciusTemperature (event) {
  event.preventDefault();
  let CelciusElement = document.querySelector("#temperature")
  CelciusElement.innerHTML = Math.round(Celciustemperature)
}

let celciustemp = document.querySelector("#celcius-temp");
celciustemp.addEventListener("click", displayCelciusTemperature)
