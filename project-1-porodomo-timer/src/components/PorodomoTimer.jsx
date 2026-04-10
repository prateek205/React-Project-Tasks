import { useEffect, useState } from "react";

const PorodomoTimer = () => {
  const [time, setTime] = useState(900);
  const [isActive, setIsActive] = useState(false);

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

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setTime((t) => {
        if (t <= 0) {
          return 0;
        }
        return t - 1;
      });
    }, 300);
    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <div className="h-1/2 w-1/2 bg-gray-800 rounded-md flex flex-col items-center justify-start py-2 px-1">
      <div className="flex flex-col items-center justify-center gap-16">
        <h1 className="uppercase text-white text-6xl font-light">
          po<span className="text-cyan-500 font-bold">ro</span>do
          <span className="text-cyan-500 font-bold">mo</span>{" "}
          <span className="text-green-500 font-bold">timer</span>
        </h1>
        <div className="flex flex-col gap-8 items-center justify-center">
          <h2
            className={`text-6xl font-bold ${time <= 300 ? "text-red-500" : time <= 600 ? " text-orange-400" : "text-white"}`}
          >
            {m} :{" "}
            <span
              className={
                time <= 5
                  ? "text-red-600"
                  : time <= 10
                    ? "text-orange-400"
                    : "text-green-500"
              }
            >
              {s}
            </span>
          </h2>
          <button
            onClick={() => setIsActive(!isActive)}
            className="uppercase font-bold py-1 px-5 text-xl rounded-md bg-gray-600 text-white hover:bg-cyan-500 hover:text-black"
          >
            {isActive ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PorodomoTimer;
