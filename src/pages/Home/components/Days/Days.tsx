import { useEffect, useState } from "react";
import s from "./Days.module.scss";
import { Card } from "./Card";
import { v4 as uuid } from "uuid";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import { Tabs } from "./Tabs";
import { useCustomSelector } from "../../../../Hooks/store";
import { Day } from "../../../../store/types/types";
import { getDay } from "../../../../helper/getForecastWeather";
interface Props {}
export interface DayModified {
  day: string;
  day_info: string;
  icon: JSX.Element;
  temp_day: number;
  temp_night: number;
  info: string;
}

export const Days = (props: Props) => {
  const defaultday: DayModified[] = [
    {
      day: "Tomorrow",
      day_info: "28 April",
      icon: <WbSunnyIcon htmlColor="orange" />,
      temp_day: 22,
      temp_night: 13,
      info: "Considerable clouds",
    },
  ];

  const [days, setDays] = useState(defaultday);
  const weather: Day[] = useCustomSelector((state) => {
    return state.currenWeatherSliceReducer.weather.days;
  });
  const getIcon = (value: string): JSX.Element => {
    switch (value) {
      case "Patchy sleet possible":
      case "Patchy light drizzle":
      case "Light drizzle":
      case "Moderate rain":
        return <ThunderstormIcon color="info" />;
      case "Patchy rain possible":
      case "Sunny":
        return <WbSunnyIcon htmlColor="orange" />;

      case "Blizzard":
      case "Blowing snow":
      case "Light snow":
      case "Moderate or heavy snow showers":
        return <AcUnitIcon htmlColor="white" />;

      case "Cloudy":
      case "Overcast":
        return <CloudIcon color="info" />;

      case "Partly cloudy":
        return <CloudQueueIcon color="info" />;

      case "Mist":
      case "Fog":
        return <CloudSyncIcon color="info" />;

      default:
        return <WbSunnyIcon htmlColor="orange" />;
    }
  };

  useEffect(() => {
    if (weather.length > 1) {
      const days = weather.map((day: Day) => {
        return {
          day: getDay(day.date),
          day_info: day.date,
          icon: getIcon(day.condition),
          temp_day: day.maxtemp_c,
          temp_night: day.mintemp_c,
          info: day.condition,
        };
      });
      setDays(days);
    }
  }, [weather]);

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: DayModified) => {
          return <Card key={uuid()} day={day} />;
        })}
      </div>
    </>
  );
};
