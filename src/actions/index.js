import axios from 'axios';
const API_KEY = 'd7bd430b01292cb236dd9287357dbc7e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pl`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
