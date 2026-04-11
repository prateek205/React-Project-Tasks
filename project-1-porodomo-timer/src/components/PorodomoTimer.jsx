import { useEffect, useRef, useState } from "react";

const PorodomoTimer = () => {
  const [time, setTime] = useState(1500);
  const [mode, setMode] = useState("work");
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (second) => {
    const m = Math.floor(second / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(second % 60)
      .toString()
      .padStart(2, "0");

    return `${m} : ${s}`;
  };

  const formatted = formatTime(time);

  const [m, s] = formatted.split(" : ");

  console.log("time:", formatTime(time));

  const handleStartPause = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setIsActive(true);
    }
  };

  const handleWorkMode = (newMode) => {
    clearInterval(intervalRef.current);
    setIsActive(false);

    setMode(newMode);

    if (newMode === "work") {
      setTime(1500);
    } else if (newMode === "longBreak") {
      setTime(900);
    } else if (newMode === "shortBreak") {
      setTime(300);
    }
  };

  // const handleWorkMode = (newMode) => {
  //   clearInterval(intervalRef.current);
  //   setIsActive(false);

  //   setMode(newMode);
  // };

  // useEffect((modeTime) => {
  //   const modeTime = {
  //     WorkMode: 1500,
  //     LongBreak: 900,
  //     ShortBreak: 300,
  //   };

  //   setTime(modeTime);
  // }, [mode]);

  return (
    <div className="h-1/2 w-1/2 bg-gray-800 rounded-md flex flex-col items-center justify-start py-2 px-1">
      <div className="flex flex-col items-center justify-center gap-16">
        <h1 className="uppercase text-white text-6xl font-light">
          po<span className="text-cyan-500 font-bold">mo</span>do
          <span className="text-cyan-500 font-bold">ro</span>{" "}
          <span className="text-green-500 font-bold">timer</span>
        </h1>
        <div className="flex flex-col gap-8 items-center justify-center">
          <h2
            className={`text-6xl font-bold ${time <= 300 ? "text-red-600" : time <= 900 ? " text-orange-400" : time <= 1500 ? "text-green-500" : "text-white"}`}
          >
            {m} :
            <span
              className={
                time <= 5
                  ? "text-red-600"
                  : time <= 10
                    ? "text-orange-400"
                    : "text-cyan-500"
              }
            >
              {s}
            </span>
          </h2>
          <button
            onClick={handleStartPause}
            className="uppercase font-bold py-1 px-5 text-xl rounded-md bg-gray-600 text-white hover:bg-cyan-500 hover:text-black"
          >
            {isActive ? "Stop" : "Start"}
          </button>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => handleWorkMode("work")}
            className="shadow-xl hover:shadow-green-500/50 border-2 border-white rounded-md py-1 px-3 text-white text-xl font-bold hover:bg-green-500 hover:text-black"
          >
            Work Mode
          </button>
          <button
            onClick={() => handleWorkMode("longBreak")}
            className="shadow-xl hover:shadow-orange-500/50 border-2 border-white rounded-md py-1 px-3 text-white text-xl font-bold hover:bg-orange-500 hover:text-black"
          >
            Long Break
          </button>
          <button
            onClick={() => handleWorkMode("shortBreak")}
            className="shadow-xl hover:shadow-red-500/50 border-2 border-white rounded-md py-1 px-3 text-white text-xl font-bold hover:bg-red-500 hover:text-black"
          >
            Short Break
          </button>
        </div>

        {/* <div className="flex gap-5">
          <button
            onClick={() => setMode("work")}
            className="shadow-xl hover:shadow-green-500/50 border-2 border-white rounded-md py-1 px-3 text-white text-xl font-bold hover:bg-green-500 hover:text-black"
          >
            Work Mode
          </button>
          <button
            onClick={() => setMode("longBreak")}
            className="shadow-xl hover:shadow-orange-500/50 border-2 border-white rounded-md py-1 px-3 text-white text-xl font-bold hover:bg-orange-500 hover:text-black"
          >
            Long Break
          </button>
          <button
            onClick={() => setMode("shortBreak")}
            className="shadow-xl hover:shadow-red-500/50 border-2 border-white rounded-md py-1 px-3 text-white text-xl font-bold hover:bg-red-500 hover:text-black"
          >
            Short Break
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PorodomoTimer;
