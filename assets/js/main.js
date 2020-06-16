const api = {
    key: "7b35951772455c0839a9b9d407eec07a",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch(fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`))
}