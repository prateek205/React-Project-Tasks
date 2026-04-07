import Calculator from "./components/Calculator";
import Header from "./components/Header";
import ProfileCard from "./components/Profile";
import UserGreet from "./components/UserGreeting";
import Status from "./components/Status";
import TechStack from "./components/TechStack";
import Product from "./components/ProductItem";
import Button from "./components/Button";
import Image from "./components/ImageCard";
import Users from "./components/User";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const user = {
    name: "prateek",
    age: 33,
  };
  return (
    <h1 className="py-10 px-5 text-2xl flex flex-col gap-4 items-start justify-evenly">
      <Header />
      <UserGreet name="Prateek Bahad" />
      <ProfileCard
        name="Prateek Bahad"
        city="Chh. Sambhajinagar"
        profession="MERN Developer"
      />
      <Calculator num1={5} num2={10} />
      <Status isOnline={true} />
      <TechStack />
      <Product price={500} />
      <Button text="Login" color="Blue" />
      <Image
        url={
          "https://i0.wp.com/picjumbo.com/wp-content/uploads/detailed-shot-of-ripples-at-sunset-free-image.jpeg?w=600&quality=80"
        }
        caption="Sample Image"
      />
      <Users user={user} />
      <ProjectCard
        title="E-commerce App"
        description="A responsive static eCommerce website built using HTML, CSS, and JavaScript featuring product listings, modern UI design, and a clean shopping layout."
        link="https://ecommercestaticwebsiteprateek.netlify.app/"
      />
    </h1>
  );
}
