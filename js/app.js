const $form = document.querySelector("#search-city-weather")
const $input = document.querySelector("#input")
const $weatherStatusImg = document.querySelector("#weather-status-img")
const $weatherIndicator = document.querySelector("#weather-gradus")
const $location = document.querySelector("#location")
const $time = document.querySelector("#time")
const $weekDay = document.querySelector("#week-day")

const API_KEY = "644f6ce0ca9e401ebb891832211707"
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const renderData = (d) => {
    $weatherStatusImg.src = "https:" + d.current.condition.icon
    $weatherIndicator.innerText = d.current.temp_c + "°"
    $location.innerText = `${d.location.name}, ${d.location.country}`
    $time.innerText = d.location.localtime
    $weekDay.innerText = `Sunset Time, ${weekDay[new Date().getDay()]}`
}

const data = (city) => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`)
        .then(res => res.json())
        .then(data => renderData(data))
}

data("Tashkent")

const searchCityWeather = (e) => {
    e.preventDefault()
    data($input.value)

    $form.reset()
}

$form.addEventListener("submit", searchCityWeather)