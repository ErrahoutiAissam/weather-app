let weather = {
    "apiKey": "d3243fa6d5394ffa8d9163628220308 ",
    fetchTheWeather: function (city) {
        fetch("https://api.weatherapi.com/v1/current.json?key=+" + this.apiKey + "&q=" + city + " &aqi=no"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data.location
        const { icon, text } = data.current.condition
        const { wind_kph } = data.current
        const { temp_c } = data.current
        const { humidity } = data.current
        console.log(name, icon, text, wind_kph, temp_c, humidity + "%")
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".description").innerText = text
        document.querySelector(".icon").src = "https://" + icon
        document.querySelector(".weather").innerText = temp_c + "°C"
        document.querySelector(".wind-speed").innerText = "Wind Speed : " + wind_kph + "km/h"
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%"
        document.querySelector(".container2").classList.remove("loading")
        document.querySelector("body").style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + "')";

    },
    search: function () {
        this.fetchTheWeather(document.querySelector(".search-input").value)

    },
};

document.querySelector(".search-button").addEventListener("click", () => {
    weather.search();
})
document.querySelector(".search-input").addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        weather.search()
    }
})

weather.fetchTheWeather("rabat")