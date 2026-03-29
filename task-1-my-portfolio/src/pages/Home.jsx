import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col bg-black text-white">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
