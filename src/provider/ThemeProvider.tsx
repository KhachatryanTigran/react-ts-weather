import { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";
import { useCustomSelector } from "../Hooks/store";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const is_day = useCustomSelector((state) => {
    return state.currenWeatherSliceReducer.weather.main.is_day;
  });
  useEffect(() => {
    setTheme(is_day ? Theme.LIGHT : Theme.DARK);
  }, [is_day]);
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("theme") || is_day ? Theme.LIGHT : Theme.DARK
  );
  changeCssRootVariables(theme);
  function changeTheme(theme: Theme) {
    storage.setItem("theme", theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
