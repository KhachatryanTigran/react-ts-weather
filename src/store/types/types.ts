export type Day = {
  date: string;
  avgtemp_c: number;
  maxtemp_c: number;
  maxwind_kph: number;
  mintemp_c: number;
  totalprecip_mm: number;
  sunrise: string;
  sunset: string;
  condition: string;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
};
export type Weather = {
  main: {
    temp: number;
    localtime: string;
    name: string;
    region: string;
    country: string;
    wind_dir: string;
    wind: string;
    feelslike: string;
    pressure: string;
    last_updated: string;
    precip: string;
    is_day: number;
  };
  days: Day[];
};
