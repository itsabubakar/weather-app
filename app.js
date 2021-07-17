const form = document.querySelector("#form");
const input = document.querySelector("#input-box");
const degreeValue = document.querySelector(".degrees");
const city = document.querySelector(".city");
const cloudy = document.querySelector(".cloudy");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const load = document.querySelector(".load");
const dateInfo = document.querySelector(".date-info");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  loader();
  setDate();
  getLocationInfo();
});

async function getLocationInfo() {
  try {
    const keyTerm = input.value.toLowerCase();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${keyTerm}&APPID=305abaa7c0a8c3a71746baf32e308582`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const humidity = weatherData.main.humidity;
    const temp = weatherData.main.temp;
    const name = weatherData.name;
    const wind = weatherData.wind.speed;
    const clouds = weatherData.clouds.all;

    appendTempData(temp);
    appendNameData(name);
    appendHumidityData(humidity);
    appendWindData(wind);
    appendCloudData(clouds);
    removeLoader();

    console.log(weatherData);
    console.log(temp);
    console.log(humidity);
  } catch (error) {
    removeLoader();
    alert(`${error} weather information.`);
  }
}

function appendTempData(data) {
  const celsiusValue = Math.floor(data - 273);
  degreeValue.textContent = celsiusValue;
}

function appendNameData(data) {
  city.textContent = data;
}

function appendHumidityData(data) {
  humidity.textContent = data;
}

function appendCloudData(data) {
  cloudy.textContent = data;
}

function appendWindData(data) {
  wind.textContent = data;
}

function loader() {
  load.classList.add("loader-wrapper");
}

function removeLoader() {
  load.classList.remove("loader-wrapper");
}

function setDate() {
  const now = new Date();
  const formattedDate = now.toDateString();
  dateInfo.textContent = formattedDate;
}
