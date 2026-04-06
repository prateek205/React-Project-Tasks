// Array Mapping: Create a TechStack component that takes an array of strings ["React", "Vite", "Tailwind"] and maps them into an <li> list.

export default function TechStack() {
  let techStack = ["React", "Vite", "Tailwind"];

  return (
    <div>
      <h1 className="font-bold">Task-6 TechStack Components</h1>
      {techStack.map((item) => {
        return (
          <div>
            <ul>
              <li>{item}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
