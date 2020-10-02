// API
const api = {
        key: "df6068444656f40d3677f016f0d0aee1",
        base: "https://api.openweathermap.org/data/2.5/"
    }
    // Trigger
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}
//API Call
function getResults(query) {
    fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}
// Website functions
    // City location
function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    // Date
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    // Current temperature
    let temp = document.querySelector('.current-weather .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
    // Current weather type
    let weather_el = document.querySelector('.current-weather .weather');
    weather_el.innerText = weather.weather[0].main;
    // High-low temperature
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C Low | ${Math.round(weather.main.temp_max)}°C High`;
}
// Defines date. Month/day array
function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

// User error feedback

const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");

textContentOutput.textContent = "There was an error!"