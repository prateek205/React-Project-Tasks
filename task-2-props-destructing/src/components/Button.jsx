// Button Component: Create a CustomButton that takes text and color (e.g., "blue") as props to style a button.

export default function Button({ text, color }) {
  return (
    <div>
      <h1 className="font-bold">Task - 8 Custom Button</h1>
      <button
        style={{ backgroundColor: color, color: "white", padding: "10px 20px" }}
      >
        {text}
      </button>
    </div>
  );
}


