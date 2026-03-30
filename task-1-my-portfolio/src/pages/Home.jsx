import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <div className="flex flex-col bg-black text-white">
        <Navbar />
        <HeroSection />
        <About/>
        <Skills/>
        <Projects/>
      </div>
    </>
  );
};

export default Home;
