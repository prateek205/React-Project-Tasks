import { useState } from "react";

export default function InputBox() {
  const [name, setName] = useState("");

  return (
    <div className="w-1/5 flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Task-3 Input Box String</h1>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Type Name here"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="px-2 py-1 text-sm border-2 outline-0 border-black rounded-md "
        />
        <h2>
          Hello, My Name is : <span className="font-bold">{name}</span>{" "}
        </h2>
      </div>
    </div>
  );
}
