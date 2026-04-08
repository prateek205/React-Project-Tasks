// When the component first loads, wait for 5 seconds and then show an alert("Thanks for staying!").

import { useEffect } from "react";

export default function Alert() {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert("Thanks for Staying...");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-xl">Task-4 Alert Message</h1>
      <h1>Welcome to Component!!!</h1>
    </div>
  );
}
