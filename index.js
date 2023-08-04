    document.querySelector("#description").innerHTML =
        response.data.weather[0].description;
    console.log(response.data.wind.speed);
}

function searchCity(city) {
    let apiKey = "f420d385ec36bc3b2e50ca033dd04308";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}

function searchLocation(position) {
    let apiKey = "f420d385ec36bc3b2e50ca033dd04308";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
// on reload, it shows this city
searchCity("Karachi");
