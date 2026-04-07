// Boolean Props: Create a Status component that takes isOnline. If true, show a green dot; if false, show a red dot (Use Ternary!).

export default function Status(props) {
  return (
    <div>
      <h1 className="font-bold">Task - 5 Status</h1>
      <p>Status Show: {props.isOnline ? "🟢" : "🔴"}</p>
    </div>
  );
}
