const HeroSection = () => {
  return (
    <>
      <section className="h-screen flex justify-between px-10 py-5 bg-gray-900 text-white">
        <div className="flex flex-col basis-1/2 justify-center items-start">
          <h1 className="text-7xl font-bold">Hi, I'm Prateek 👋</h1>
          <h2 className="text-2xl mt-5 text-cyan-500">MERN Stack Developer</h2>
          <p className="text-lg mt-6 ">
            I Build Modern Reponsive Web Application.
          </p>
          <button className="mt-5 text-lg px-5 py-2 rounded-md bg-cyan-400 text-black cursor-pointer hover:bg-cyan-300 hover:transition-all hover:-translate-y-0.5">
            View Projects
          </button>
        </div>
        <div className="flex justify-center basis-1/2">
          <img
            src="./profileImage.png"
            alt=""
            className="w-46 h-46 object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
