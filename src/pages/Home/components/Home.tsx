import s from "./Home.module.scss";

import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";
import { useCustomSelector } from "../../../Hooks/store";

interface Props {}

export const Home = (props: Props) => {
  const { weather } = useCustomSelector(
    (state) => state.currenWeatherSliceReducer
  );

  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <div className={s.days}>
        <Days />
      </div>
    </div>
  );
};
