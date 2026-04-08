import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("white");

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl ">Task-4 Color Picker</h1>

      <div
        style={{
          backgroundColor: color,
          padding: "35px",
          border: "1px solid black",
          display: "flex",
          gap: "10px",
          borderRadius: "5px",
          width: "24%",
        }}
      >
        <button
          className="border-2 border-black py-1 px-3 rounded-md hover:bg-gray-700 hover:text-white"
          onClick={() => setColor("Red")}
        >
          Red
        </button>
        <button
          className="border-2 border-black py-1 px-3 rounded-md hover:bg-gray-700 hover:text-white"
          onClick={() => setColor("Green")}
        >
          Green
        </button>
        <button
          className="border-2 border-black py-1 px-3 rounded-md hover:bg-gray-700 hover:text-white"
          onClick={() => setColor("Blue")}
        >
          Blue
        </button>
        <button
          className="border-2 border-black py-1 px-3 rounded-md hover:bg-gray-700 hover:text-white"
          onClick={() => setColor("White")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
