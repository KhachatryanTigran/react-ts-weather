import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";

export const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};
