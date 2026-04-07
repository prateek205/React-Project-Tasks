import { useState } from "react";

export default function Counter() {
  const [countStep, setCountStep] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl">Task-2 Counter(Number)</h1>
      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-xl flex items-center gap-5">
          Total Step Count:{" "}
          <span className="text-blue-500 text-2xl">{countStep}</span>{" "}
        </h3>

        <div className="flex flex-row gap-10">
          <button
            className="border-2 border-black py-1 px-2 rounded-md hover:bg-green-500 hover:text-white hover:border-white"
            onClick={() => setCountStep(countStep + 1)}
          >
            Steps Walk
          </button>

          <button
            className="border-2 border-black py-1 px-2 rounded-md hover:bg-red-500 hover:text-white hover:border-white"
            onClick={() => setCountStep(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
