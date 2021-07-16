const form = document.querySelector('#form');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    getLocationInfo()
});

// async function getLocationInfo() {

//     const keyTerm = input.value;
//    const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${keyTerm}&APPID=305abaa7c0a8c3a71746baf32e308582`, {mode: 'cors'});
//    const weatherData = await response.json();
//    const humidity = weatherData.main.humidity;
//    const temp = weatherData.main.temp;
//    console.log(weatherData);
//    console.log(temp);
//    console.log(humidity);
      
// }

function getLocationInfo() {

    const keyTerm = input.value;
    const weatherData =  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${keyTerm}&APPID=305abaa7c0a8c3a71746baf32e308582`, {mode: 'cors'});

   const parsedData = weatherData
    .then(function(response) {
        return response.json();
      })
      parsedData
      .then(function(response) {
        console.log(response.main.humidity);
      })
      parsedData
        .then(function(response) {
        console.log(response.main.temp);
        })
      .catch(function(response) {
        throw new Error(response);
      });
}