import { configureStore, combineReducers } from "@reduxjs/toolkit";
import popupSliceReducer from "./slices/popupSlice";
import currenWeatherSliceReducer from "./slices/currentWeatherSlice";
import weatherDaySliceReducer from "./slices/weatherDaySlice";
const rootReducer = combineReducers({
  currenWeatherSliceReducer,
  popupSliceReducer,
  weatherDaySliceReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
