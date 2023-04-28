import axios from "axios";
import { fetchWeatherSuccess } from "../store/slices/currentWeatherSlice";

export const getForecastWeather = (
  city: string,
  dispatch: any,
  days: number
) => {
  axios(
    `http://api.weatherapi.com/v1/forecast.json?key=45fd324fcb36497bae5111643232804&q=${city}&days=${
      days || 7
    }`
  ).then((res) => {
    console.log(res, 122341324);
    const {
      data: {
        current,
        location,
        forecast: { forecastday },
      },
      status,
      statusText,
    } = res;

    const days = forecastday.map((day: any) => {
      return {
        date: day.date,
        avgtemp_c: day.day.avgtemp_c,
        maxtemp_c: day.day.maxtemp_c,
        maxwind_kph: day.day.maxwind_kph,
        mintemp_c: day.day.mintemp_c,
        totalprecip_mm: day.day.totalprecip_mm,
        sunrise: day.astro.sunrise,
        sunset: day.astro.sunset,
        condition: day.day.condition.text,
        daily_chance_of_rain: day.day.daily_chance_of_rain,
        daily_chance_of_snow: day.day.daily_chance_of_snow,
        daily_will_it_rain: day.day.daily_will_it_rain,
        daily_will_it_snow: day.day.daily_will_it_snow,
      };
    });

    const data = {
      main: {
        temp: current.temp_c,
        wind: current.wind_kph,
        wind_dir: current.wind_dir,
        feelslike: current.feelslike_c,
        localtime: location.localtime,
        name: location.name,
        region: location.region,
        country: location.country,
        last_updated: current.last_updated,
        precip: current.precip_mm,
        pressure: current.pressure_mb,
        is_day: current.is_day,
      },
      days: [...days],
    };

    dispatch(fetchWeatherSuccess({ data, status, message: statusText }));
  });
};

export const getDay = (value: string) => {
  switch (new Date(value).getDay()) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
    default:
      return "";
  }
};
