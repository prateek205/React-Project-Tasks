// Image Gallery: Create an ImageCard that takes url and caption as props.

export default function Image({ url, caption }) {
  return (
    <div>
      <h1 className="font-bold">Task - 9 Image Card</h1>
      <div className="w-56 h-full border-2 border-black rounded-md">
        <img
          className="w-full object-contain rounded-t-sm rounded-b-none"
          src={url}
          alt={caption}
        />
        <p className="text-center p-2">{caption}</p>
      </div>
    </div>
  );
}
