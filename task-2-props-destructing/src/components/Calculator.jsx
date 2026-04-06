// Number Props: Create a Calculator component that takes num1 and num2 as props and displays their sum.

export default function Calculator(props) {
  return (
    <div>
      <h1 className="font-bold">Task-4 Calculator</h1>
      <p>Number:{props.num1}</p>
      <p>Number:{props.num2}</p>
      <p>Total:{props.num1 + props.num2}</p>
    </div>
  );
}
