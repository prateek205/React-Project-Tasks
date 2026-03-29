import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col bg-black text-white">
        <Navbar />
        <HeroSection />
        <About/>
      </div>
    </>
  );
};

export default Home;
