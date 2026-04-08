// Start a setInterval that prints "Hello" every 2 seconds. Make sure you return a cleanup function.

import { useEffect, useState } from "react";

export default function Cleanup() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
      setMessage((prev) => prev + "Hello ");
    }, 2000);

    const timeOut = setTimeout(() => {
      clearInterval(interval);
    }, 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Task-5 Cleanup Act</h1>
      <div className="flex flex-col gap-5">
        <p className="text-lg font-bold">
          Count of Print Hello is
          <span className="font-bold text-2xl text-green-600"> {count} </span>
          Times!
        </p>
        <h3 className="text-lg">{message}</h3>
      </div>
    </div>
  );
}
