import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MonthStatistics } from "./pages/MonthStatistics/components/MonthStatistics";

import { Layout } from "./Layout";
import { Home } from "./pages/Home/components/Home";
import { Popup } from "./shared/Popup/Popup";
import { useCustomSelector } from "./Hooks/store";
const r = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/month-statistics" element={<MonthStatistics />} />{" "}
    </Route>
  )
);
function App() {
  const isShow = useCustomSelector((state) => state.popupSliceReducer.isShow);
  const weather = useCustomSelector(
    (state) => state.currenWeatherSliceReducer.weather
  );
  return (
    <>
      {" "}
      {isShow ? <Popup weather={weather} /> : null}
      <div className="container">
        <RouterProvider router={r}></RouterProvider>
      </div>
    </>
  );
}

export default App;
