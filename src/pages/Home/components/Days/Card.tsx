import React from "react";
import s from "./Days.module.scss";
import { DayModified } from "./Days";
import { useCustomDispatch } from "../../../../Hooks/store";
import { popupShow } from "../../../../store/slices/popupSlice";
import { useDispatch } from "react-redux";

interface Props {
  day: DayModified;
}

export const Card = ({ day }: Props) => {
  const dispatch = useCustomDispatch();
  const onClick = () => {
    dispatch(popupShow(day.day_info));
  };

  return (
    <div className={s.card} onClick={onClick}>
      <div className={s.day}>{day.day}</div>{" "}
      <div className={s.day_info}>{day.day_info}</div>
      <div className={s.icon}>{day.icon}</div>
      <div className={s.temp_day}>{day.temp_day + " °C"}</div>{" "}
      <div className={s.temp_night}>{day.temp_night + " °C"}</div>{" "}
      <div className={s.info}>{day.info}</div>
    </div>
  );
};
