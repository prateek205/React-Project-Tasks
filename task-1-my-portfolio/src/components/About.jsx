const About = () => {
  return (
    <>
      <section className="flex items-start p-5 gap-5">
        <div className="flex items-center justify-center">
          <img
            src="/profileImage.png"
            alt=""
            className="w-45 h-45 object-cover basis-1/2"
          />
        </div>
        <div className="w-screen basis-2/2 flex flex-col">
          <h1 className="text-4xl mt-5 px-10 underline underline-offset-8 decoration-cyan-500">
            About <span className="text-cyan-500 font-bold">Me</span>
          </h1>
          <p className="py-12 px-10">
            I am a passionate Full Stack MERN Developer with experience in
            building modern and scalable web applications. I specialize in
            developing responsive user interfaces using React.js and creating
            backend services using Node.js and Express.I completed my Bachelor
            of Technology in Mechanical Engineering from Aurangabad College of
            Engineering with a CGPA of 8.20. During my academic journey, I
            developed a strong interest in software development and started
            focusing on web technologies. I enjoy solving problems, building
            clean user interfaces, and developing full stack applications using
            the MERN stack.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
