import ecom from "../assets/ecom.avif";
import netflix from "../assets/netflix.png";
import slider from "../assets/slider.jpg";

const Projects = () => {
  const project = [
    {
      id: 1,
      title: "E-Commerce",
      img: ecom,
    },
    {
      id: 2,
      title: "Netflix-Clone",
      img: netflix,
    },
    {
      id: 3,
      title: "Image-Gallery",
      img: slider,
    },
  ];
  return (
    <>
      <div className="h-full flex flex-col gap-5 items-center justify-center p-5">
        <h2 className="text-4xl underline underline-offset-8 decoration-cyan-500 font-light">
          My <span className="text-cyan-500 font-bold">Projects</span>
        </h2>
        <div className="h-full flex items-center gap-8 p-10">
          {project.map((item, index) => (
            <div key={index} className="h-62 border flex flex-col rounded-md">
              <img
                src={item.img}
                alt=""
                className="w-64 h-64 object-cover rounded-md"
              />

              <h2 className="text-xl text-center flex items-center justify-center p-5">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
