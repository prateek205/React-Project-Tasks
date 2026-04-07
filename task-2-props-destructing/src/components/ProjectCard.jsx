// Portfolio Section: Build a ProjectCard that includes a title, a description, and a link. Use Tailwind CSS for the styling.

export default function ProjectCard({ title, description, link }) {
  return (
    <div>
      <h1 className="font-bold">Task - 15 Project Card</h1>
      <div className="border-2 border-black w-1/4 h-64 rounded-md px-2 py-3 flex flex-col justify-around">
        <h1 className="text-center font-bold">{title}</h1>
        <p className="text-sm text-start">{description}</p>
        <p className="text-sm py-2">
          <a href={link}>
            <button className="border-2 border-black rounded-md py-2 px-3 bg-gray-200 font-bold hover:text-white hover:bg-blue-700">
              View Project
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}
