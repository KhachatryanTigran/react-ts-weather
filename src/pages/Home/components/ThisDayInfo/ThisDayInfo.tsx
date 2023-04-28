import React from "react";
import s from "./ThisDayInfo.module.scss";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WaterIcon from "@mui/icons-material/Water";
import cloud from "../../../../images/clouds.png";
import AirIcon from "@mui/icons-material/Air";
import { ThisDayItem } from "./ThisDayItem";
import { v4 as uuid } from "uuid";
import { Weather } from "../../../../store/types/types";

interface Props {
  weather: Weather;
}
export interface Item {
  icon: JSX.Element;
  name: string;
  value: string;
}

const Direction: any = {
  NNE: "North-Northeast",
  ENE: "East - Northeast",
  ESE: "East - Southeast",
  SSE: "South - southeast",
  SSW: "South - Southwest",
  WSW: "West - Southwest",
  WNW: "West - Northwest",
  NNW: "North-Northwest",
  NE: "North-East",
  SE: "South-East",
  SW: "South-West",
  NW: "North-West",
  N: "North",
  E: "East",
  S: "South",
  W: "West",
};

export const ThisDayInfo = ({ weather }: Props) => {
  const {
    main: { temp, feelslike, pressure, precip, wind_dir, wind, last_updated },
  } = weather;
  const items = [
    {
      icon: <ThermostatIcon color="warning" />,
      name: "Temperature",
      value: `${temp} °C RealFeel   ${feelslike} °C`,
    },
    {
      icon: <WaterDropIcon color="info" />,
      name: "Pressure",
      value: `${pressure} millibars`,
    },
    {
      icon: <WaterIcon color="info" />,
      name: "Precipitation",
      value: `${precip} millimeters`,
    },
    {
      icon: <AirIcon color="info" />,
      name: "Wind",
      value: `${Direction[wind_dir]} wind speed is ${wind} km/h`,
    },
  ];
  return (
    <>
      <div className={s.this_day_info}>
        <div className={s.this_day_items}>
          {items.map((item: Item) => {
            return <ThisDayItem item={item} key={uuid()} />;
          })}
        </div>
        <div className={s.last_updated}>
          <span> Last Update {weather.main.last_updated}</span>
        </div>
        <img className={s.cloud} src={cloud} alt="cloud.png" />
      </div>
    </>
  );
};
