import React from "react";
import s from "./Days.module.scss";
import { v4 as uuid } from "uuid";
import { useCustomDispatch, useCustomSelector } from "../../../../Hooks/store";
import { changeDays } from "../../../../store/slices/weatherDaySlice";
interface Props {}
export interface Tab {
  value: string;
  days: number;
}
export const Tabs = (props: Props) => {
  const tabs: Tab[] = [
    {
      value: "Weekly",
      days: 7,
    },
    {
      value: "10 Days",
      days: 10,
    },
    {
      value: "2 Weeks",
      days: 14,
    },
  ];
  const days = useCustomSelector((state) => state.weatherDaySliceReducer.days);
  const dispatch = useCustomDispatch();
  const onClick = (days: number) => {
    dispatch(changeDays(days));
  };
  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {tabs.map((tab: Tab) => {
          return (
            <div
              className={tab.days === days ? s.activeTab : s.tab}
              key={uuid()}
              onClick={() => onClick(tab.days)}
            >
              {" "}
              {tab.value}
            </div>
          );
        })}
      </div>
      <div className={s.cancel}>Cancel</div>
    </div>
  );
};
