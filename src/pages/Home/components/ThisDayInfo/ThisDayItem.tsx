import React from "react";
import { Item } from "./ThisDayInfo";
import s from "./ThisDayInfo.module.scss";
type Props = {
  item: Item;
};

export const ThisDayItem = ({ item }: Props) => {
  const { icon, name, value } = item;
  return (
    <div className={s.item}>
      {" "}
      <div className={s.indicator}>{icon}</div>
      <div className={s.indicator_name}>{name}</div>{" "}
      <div className={s.indicator_value}>{value}</div>
    </div>
  );
};
