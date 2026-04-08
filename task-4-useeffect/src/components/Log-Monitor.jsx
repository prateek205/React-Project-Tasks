// Create two state variables: name and age. Write a useEffect that only logs "Name changed!" when the name changes, but NOT when age changes.

import { useEffect, useState } from "react";

export default function LogUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    if(name !== "")
    console.log("Name Change");
  },[name]);

  return (
    <div>
      <h1 className="font-bold text-xl">Task-3 Log Monitor</h1>
      <div className="flex flex-col gap-4 w-1/6">
        <input
          className="border-2 border-black rounded-md px-2 py-1"
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 border-black rounded-md px-2 py-1"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    </div>
  );
}
