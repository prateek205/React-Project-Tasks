import Calculator from "./components/Calculator";
import Header from "./components/Header";
import ProfileCard from "./components/Profile";
import UserGreet from "./components/UserGreeting";
import Status from "./components/Status";
import TechStack from "./components/TechStack";
import Product from "./components/ProductItem";

export default function App() {
  return (
    <h1 className="text-2xl flex flex-col gap-4">
      <Header />
      <UserGreet name="Prateek Bahad" />
      <ProfileCard
        name="Prateek Bahad"
        city="Chh. Sambhajinagar"
        profession="MERN Developer"
      />
      <Calculator num1={5} num2={10} />
      <Status isOnline={true} />
      <TechStack/>
      <Product price={500}/>
    </h1>
  );
}
