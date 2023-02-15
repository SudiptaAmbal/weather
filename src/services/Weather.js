const API_KEY = "d8dde51fcd927d6c5e7aecfcb4792c13";
const base_Url = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParam) => {
    const url = new URL(base_Url + '/' + infoType)
    url.search = new URLSearchParams({...searchParam, appid:API_KEY})

    return fetch(url)
        .then((res) => res.json())
}

const currentWeather = (data) => {
    const {
        coord: {lat,lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        wind: {speed},
        sys: {country, sunrise, sunset},
        weather,
        name,
        dt,
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon ,temp, feels_like, temp_min, temp_max, humidity, speed, country, sunrise, sunset, name, dt, details, icon}
}

const getFormattedWeatherData = async (searchParam) => {
    const formattedCurrWeather = await getWeatherData('weather', searchParam).then(currentWeather)

    return formattedCurrWeather;
};

const iconimg = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`


export default getFormattedWeatherData;

export {iconimg}