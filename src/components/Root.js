import React from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="bg-[#f0f4f8] dark:bg-[#1e293b] min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}
