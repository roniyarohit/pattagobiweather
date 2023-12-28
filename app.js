const API_KEY = `c79f2c127d3c931c26ca8bd001dfbbcc`
const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")

// const IMG_URL =`https://openweathermap.org/img/wn/04n@2x.png`

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...<h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)

}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h2>City Not Found<h2>`
        return;
    }
    weather.innerHTML=`
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h1>${data.main.temp}°C </h1>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)