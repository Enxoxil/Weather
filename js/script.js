let btn = document.querySelector(".btn");
let input = document.querySelector(".header__main-input");

btn.onclick = (event) => {
  event.preventDefault();
  getWeather(input.value.toLowerCase());
  input.value = '';
};

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=70e1ed322b02acbc57d443dd91065f3e`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".header__main-card-city").innerHTML = data.name;
      document.querySelector(".header__main-card-country").innerHTML =
        data.sys.country;
      document.querySelector(".header__main-card-degree").innerHTML =
        Math.round(data.main.temp - 273) + "&deg;";
      document.querySelector(".header__main-card-description").innerHTML =
        data.weather[0].description;
      document.querySelector(
        ".header__main-card-features"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(function () {
      // catch any errors
    });
}
