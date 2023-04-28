import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../types/types";

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0,
      localtime: "",
      name: "",
      region: "",
      country: "",
      is_day: 0,
      wind: "",
      feelslike: "",
      pressure: "",
      wind_dir: "",
      last_updated: "",
      precip: "",
    },
    days: [
      {
        date: "",
        avgtemp_c: 5,
        maxtemp_c: 18.7,
        maxwind_kph: 42.1,
        mintemp_c: 9.1,
        totalprecip_mm: 10.1,
        sunrise: "06:28 AM",
        sunset: "07:38 PM",
        condition: "",
        daily_chance_of_rain: 89,
        daily_chance_of_snow: 0,
        daily_will_it_rain: 0,
        daily_will_it_snow: 0,
      },
    ],
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const currenWeatherSlice = createSlice({
  name: "currenWeather",
  initialState,
  reducers: {
    fetchWeather(state) {
      state.isLoading = true;
    },
    fetchWeatherSuccess(state, action) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});
export const { fetchWeather, fetchWeatherError, fetchWeatherSuccess } =
  currenWeatherSlice.actions;
export default currenWeatherSlice.reducer;
