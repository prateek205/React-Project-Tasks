const Skills = () => {
  const Skill = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind",
    "Postman",
    "Vercel",
    "GitHub",
    "Netlify",
  ];

  return (
    <div className="h-full flex flex-col gap-10 items-center mt-5 p-5 bg-gray-600">
      <h2 className="text-4xl font-light underline underline-offset-8 decoration-cyan-500">
        My <span className="font-bold text-cyan-500">Skills</span>
      </h2>
      <div className="flex gap-2 p-10">
        {Skill.map((item, index) => (
          <span
            key={index}
            className="text-white text-sl px-7 py-2 rounded-md cursor-pointer hover:bg-cyan-300 hover:text-black hover:-translate-y-1 bg-gray-500 transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
