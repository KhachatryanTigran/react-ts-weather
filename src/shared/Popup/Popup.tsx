import React from "react";
import s from "./Popup.module.scss";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { v4 as uuid } from "uuid";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WaterIcon from "@mui/icons-material/Water";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AirIcon from "@mui/icons-material/Air";
import LightModeIcon from "@mui/icons-material/LightMode";
import TerrainIcon from "@mui/icons-material/Terrain";
import { useCustomDispatch, useCustomSelector } from "../../Hooks/store";
import { popupShow } from "../../store/slices/popupSlice";
import { Weather } from "../../store/types/types";
import { getDay } from "../../helper/getForecastWeather";
interface Props {
  weather: Weather;
}

export const Popup = ({ weather }: Props) => {
  const dispatch = useCustomDispatch();
  const onClick = () => {
    dispatch(popupShow(""));
  };
  const date = useCustomSelector((state) => state.popupSliceReducer.date);
  const day = weather.days.filter((day) => {
    if (day.date === date) {
      return day;
    }
  })[0];
  const items = [
    {
      icon: <ThermostatIcon color="warning" />,
      name: "Temperature",
      value: `Max ${day.maxtemp_c} °C  Min ${day.mintemp_c} °C`,
    },
    {
      icon: <WaterDropIcon color="info" />,
      name: "Probability of Precipitation",
      value: ` ${
        day.daily_chance_of_rain < day.daily_chance_of_snow
          ? day.daily_chance_of_snow
          : day.daily_chance_of_rain
      }%`,
    },
    {
      icon: <AirIcon color="info" />,
      name: "Max Wind speed",
      value: `${day.maxwind_kph}km/h`,
    },
    {
      icon: <WaterIcon color="info" />,
      name: "Precipitation",
      value: `${day.totalprecip_mm}mm`,
    },
    {
      icon: <TerrainIcon color="success" />,
      name: "",
      value: `${day.condition}`,
    },
  ];

  return (
    <>
      <div className={s.blur} onClick={onClick}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>{day.maxtemp_c}</div>{" "}
          <div className={s.day_name}>{getDay(date)}</div>
          <LightModeIcon htmlColor="orange" />
          <div className={s.day_time}>
            Sunrise : <span> {day.sunrise}</span>{" "}
          </div>
          <div className={s.day_time}>
            Sunset : <span> {day.sunset}</span>{" "}
          </div>
          <div className={s.day_city}>
            City: <span> {weather.main.name}</span>{" "}
          </div>
        </div>
        <div className={s.this_day_info}>
          <div className={s.this_day_items}>
            {items.map((item: Item) => {
              return <ThisDayItem item={item} key={uuid()} />;
            })}
          </div>
        </div>
        <div className={s.close}>
          <HighlightOffIcon color="info" onClick={onClick} />
        </div>
      </div>
    </>
  );
};
