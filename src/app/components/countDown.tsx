"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Countdown() {
  const [countdown, setCountdown] = useState(100);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning && countdown > 0) {
        setCountdown(countdown - 1);
      } else if (countdown === 0) {
        clearInterval(intervalId);
        setIsRunning(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setCountdown(100);
    setIsRunning(false);
  };
  

  return (
    <main className="text-center bg-gray-300 h-screen">
      <div className="text-6xl font-bold  rounded-lg bg-gray-800">
        <h1 className="text-gray-400">Countdown</h1>
      </div>

      <div className="bg-gray-400">
        <b>Simple Count-Down-Project Using React & Next.js</b>
      </div>

      <div className="mt-8">
        <p className="text-9xl font-semibold ">{countdown}</p>
      </div>
      <div className="mt-8">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>

      <footer className="mt-8 text-center text-gray-900">
        &copy; 2024 Izhar Ahmed. All rights reserved.
      </footer>
    </main>
  );
}

export default Countdown;
