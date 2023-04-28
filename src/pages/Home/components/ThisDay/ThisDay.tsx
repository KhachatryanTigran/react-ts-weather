import React from "react";
import s from "./ThisDay.module.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Weather } from "../../../../store/types/types";
import NightlightIcon from "@mui/icons-material/Nightlight";
interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>
            {Math.floor(weather.main.temp) + " °C"}
          </div>{" "}
          <div className={s.this_day_name}>Today</div>
        </div>
        {weather.main.is_day ? (
          <LightModeIcon htmlColor="orange" />
        ) : (
          <NightlightIcon htmlColor="darkgoldenrod" />
        )}
      </div>
      <div className={s.buttom_block}>
        <div className={s.this_time}>
          Time: <span> {weather.main.localtime}</span>{" "}
        </div>{" "}
        <div className={s.this_location}>
          City: <span> {weather.main.name}</span>{" "}
        </div>{" "}
        <div className={s.this_location}>
          Country: <span> {weather.main.country}</span>{" "}
        </div>{" "}
        <div className={s.this_location}>
          Region: <span> {weather.main.region}</span>{" "}
        </div>
      </div>
    </div>
  );
};
