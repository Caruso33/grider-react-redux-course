import axios from 'axios';

const API_Key = '3aa244af099acef4f3fc339642e723f6';
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?appid=';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}${API_Key}&q=${city},us`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
