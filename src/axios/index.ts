import axios from "axios";

const api = axios.create({
  baseURL: "http://api.weatherapi.com/v1/", // process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  config.url =
    config.url +
    "&units=metric" +
    "&appid=" +
    "45fd324fcb36497bae5111643232804"; //process.env.REACT_APP_API_KEY;
  return config;
});

export default api;
