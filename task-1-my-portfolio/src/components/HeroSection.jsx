import heroImage from "../assets/heroBanner.png";
const HeroSection = () => {
  return (
    <>
      <section
        className="h-screen flex justify-between text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-gray-900/70 w-screen px-10 flex flex-col justify-center items-start">
          <h1 className="text-7xl font-bold">Hi, I'm Prateek 👋</h1>
          <h2 className="text-3xl mt-5 text-gray-800 font-bold">
            MERN Stack Developer
          </h2>
          <p className="text-lg mt-6 ">
            I Build Modern Reponsive Web Application.
          </p>
          <div className="flex gap-5 items-center">
            <button className="mt-5 text-md px-8 py-2 rounded-md bg-cyan-400 text-black cursor-pointer hover:bg-cyan-300 hover:transition-all hover:-translate-y-0.5">
              View Projects
            </button>
            <button className="text-md mt-5 rounded-md px-8 py-2 bg-white text-black cursor-pointer hover:bg-gray-500 hover:text-white hover:transition-all">
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
