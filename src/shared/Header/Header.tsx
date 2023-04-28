import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import CloudIcon from "@mui/icons-material/Cloud";
import Select from "react-select";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../Hooks/useTheme";
import { useCustomDispatch, useCustomSelector } from "../../Hooks/store";

import { getForecastWeather } from "../../helper/getForecastWeather";
interface Props {}

export const Header = (props: Props) => {
  const [city, setCity] = useState<string>("London");

  const theme = useTheme();
  const options = [
    { value: "city-1", label: "London" },
    { value: "city-2", label: "Yerevan" },
    { value: "city-3", label: "Tokyo" },
    { value: "city-4", label: "Seattle" },
    { value: "city-5", label: "Burkina Faso" },
    { value: "city-6", label: "Anchorage" },
    { value: "city-7", label: "Los Angeles" },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71,147,255,0.2)",
      width: "194px",
      height: "38px",
      border: "none",
      borderRadius: "10px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
  const days = useCustomSelector((state) => state.weatherDaySliceReducer.days);
  const dispatch = useCustomDispatch();
  useEffect(() => {
    getForecastWeather(city, dispatch, days);
  }, [city, days]);

  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <CloudIcon color="info" fontSize="large" />
        </div>{" "}
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <InvertColorsIcon color="primary" fontSize="small" />
        </div>
        <Select
          onChange={(choice) => {
            const city = choice?.label;
            if (city) {
              setCity(city);
            }
          }}
          options={options}
          styles={colourStyles}
          defaultValue={options[0]}
        />
      </div>
    </div>
  );
};
