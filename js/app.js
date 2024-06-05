const $form = document.querySelector("#search-city-weather")
const $input = document.querySelector("#input")
const $weatherStatusImg = document.querySelector("#weather-status-img")
const $weatherIndicator = document.querySelector("#weather-gradus")
const $location = document.querySelector("#location")
const $time = document.querySelector("#time")
const $sunset = document.querySelector("#sunset")
const $sunset2 = document.querySelector("#sunset2")
const $sunrise2 = document.querySelector("#sunrise2")
const $humidity = document.querySelector("#humidity")
const $sun = document.querySelector("#sun")
const $airPressure = document.querySelector("#air-pressure")

const API_KEY = "644f6ce0ca9e401ebb891832211707"
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const renderData = (d) => {
    $weatherStatusImg.src = "https:" + d.current.condition.icon
    $weatherIndicator.innerText = d.current.temp_c + "°"
    $location.innerText = `${d.location.name}, ${d.location.country}`
    $time.innerText = `${weekDay[new Date().getDay()]}, ${d.location.localtime}`
    $sunset.innerText = d.forecast.forecastday[0].astro.sunset
    $sunrise2.innerText = d.forecast.forecastday[0].astro.sunrise
    $sunset2.innerText = d.forecast.forecastday[0].astro.sunset
    $humidity.innerText = d.current.humidity + "%"
    $sun.innerText = d.current.uv + " out of 10"
    $airPressure.innerText = d.current.pressure_mb + " Pa"
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