import React, { useEffect, useState } from "react";

const lightConfig = {
  red: {
    color: "red",
    duration: "2000",
    nextLight: "green",
  },
  yellow: {
    color: "yellow",
    duration: "1000",
    nextLight: "red",
  },
  green: { color: "green", duration: "2000", nextLight: "yellow" },
};

export default function TrafficLight() {
  const [light, setLight] = useState("red");
  useEffect(() => {
    const current = lightConfig[light];
    const timer = setTimeout(() => {
      setLight(current.nextLight);
    }, current.duration);
    return () => {
      clearTimeout(timer);
    };
  }, [light]);

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col gap-6 bg-black p-8">
        <div
          className="h-24 rounded-full w-24 bg-red-700"
          style={{
            opacity: light === "red" ? 1 : 0.2,
          }}
        ></div>
        <div
          className="h-24 rounded-full w-24 bg-yellow-400"
          style={{
            opacity: light === "yellow" ? 1 : 0.2,
          }}
        ></div>
        <div
          className="h-24 rounded-full w-24 bg-green-400"
          style={{
            opacity: light === "green" ? 1 : 0.2,
          }}
        ></div>
      </div>
    </div>
  );
}
