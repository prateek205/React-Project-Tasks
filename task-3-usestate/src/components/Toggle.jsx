import { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Task-1 Toggle</h1>

      <div className="w-1/6 flex flex-col gap-3">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="w-full border-2 border-black py-1 px-3 rounded-md hover:bg-blue-500 hover:text-white"
        >
          {!isVisible ? "Hide" : "Show"}
        </button>

        {!isVisible && <p className="font-slim text-lg">React is Awesome!</p>}
      </div>
    </div>
  );
}
