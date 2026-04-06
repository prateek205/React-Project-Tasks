//Simple Props: Create a UserGreeting component that accepts a name prop and displays "Hello, [name]".

export default function UserGreet(props) {
  return (
    <div>
      <h1 className="font-bold">Task - 2 User Greeting</h1>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}
