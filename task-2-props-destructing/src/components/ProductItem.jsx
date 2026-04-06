// The Product: Create a ProductItem component that takes a price prop and adds a ₹ symbol in front of it.

export default function Product(props) {
  return (
    <div>
      <h1 className="font-bold">Task - 7 Product Item</h1>
      <p>Product Price: ₹ {props.price}</p>
    </div>
  );
}
