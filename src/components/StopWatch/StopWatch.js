import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  useEffect(() => {
    let interval;
    if (isStarted) {
      interval = setInterval(() => {
        setTime((prev) => prev + 100);
      }, 100);
    } else if (!isStarted && time !== 0) clearInterval(interval);
    return () => clearInterval(interval);
  }, [time, isStarted]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return (
      `${minutes < 10 ? "0" + minutes : minutes}:` +
      `${seconds < 10 ? "0" + seconds : seconds}:` +
      `${centiseconds < 10 ? "0" + centiseconds : centiseconds}`
    );
  };

  return (
    <div className="flex justify-center  w-full min-h-screen items-center flex-col gap-6">
      <div className="text-4xl font-semibold">{formatTime(time)}</div>
      <div>
        <button
          onClick={() => setIsStarted(!isStarted)}
          className="text-xl mr-4 cursor-pointer font-bold border px-4 p-2 rounded-xl bg-slate-500 text-white"
        >
          {isStarted ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => setTime(0)}
          className="text-xl cursor-pointer  font-bold border px-4 p-2 rounded-xl bg-slate-500 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
