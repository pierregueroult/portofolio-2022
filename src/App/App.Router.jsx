import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export default function AppRouter({ children, NavBar }) {
  return (
    <BrowserRouter>
      {NavBar}
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
}
