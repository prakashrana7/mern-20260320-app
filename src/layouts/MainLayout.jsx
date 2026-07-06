import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>copyright</footer>
    </>
  );
};

export default MainLayout;
