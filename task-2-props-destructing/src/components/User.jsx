// Object Prop: Pass an entire object (e.g., user = {name: "Aman", age: 22}) as a single prop and destructure it inside the child.

export default function Users({ user }) {

  const { name, age } = user;

  return (
    <div>
      <h1 className="font-bold">Task - 14 User</h1>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}
