import React from "react";
import { useTheme } from "../../context/themeContext";
import { DarkThemeLogo, LightThemeLogo } from "../../assets";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  return (
    <div className="w-full h-16 bg-orange-400 dark:bg-slate-700 flex align-middle items-center justify-between px-8">
      <div className="bg-slate-900 text-white dark:text-black dark:bg-orange-500 p-2 h-8 flex items-center rounded-md">
        <Link  to={"/"}>
          {" "}
          <h2 className="font-bold">Tushar Dhankhar</h2>
        </Link>
      </div>
      <h1 className="text-black dark:text-white font-extrabold text-2xl">
        {
          location.pathname === "/" ? "Projects" : location.pathname.slice(1)
        }
      </h1>
      {theme === "light" ? (
        <img
          id="theme-logo"
          src={LightThemeLogo}
          alt="img"
          onClick={toggleTheme}
          className="h-8 w-8 cursor-pointer"
        />
      ) : (
        <img
          id="theme-logo"
          src={DarkThemeLogo}
          alt="img"
          onClick={toggleTheme}
          className="h-8 w-8 cursor-pointer"
        />
      )}
    </div>
  );
}
