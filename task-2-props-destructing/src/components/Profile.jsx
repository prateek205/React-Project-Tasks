// The Profile: Create a ProfileCard that accepts name, city, and profession as props.

export default function ProfileCard(props) {
  return (
    <div>
      <h1 className="font-bold">Task - 3 Student Profile</h1>
      <h2>Name: {props.name}</h2>
      <h3>City: {props.city}</h3>
      <p>Profession: {props.profession}</p>
    </div>
  );
}
