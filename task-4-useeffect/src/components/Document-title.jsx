// Create a counter. Use useEffect to make the browser tab title say "You clicked [X] times".

import { useEffect, useState } from "react";

export default function BrowserTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} Times`;
  }, [count]);

  return (
    <div className="w-1/5 flex flex-col gap-3">
      <h1 className="font-bold text-xl">Task-1 Document Title Count</h1>
      <button
        className="border-2 border-black rounded-md py-1 px-2 hover:bg-blue-400 hover:text-white"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}
