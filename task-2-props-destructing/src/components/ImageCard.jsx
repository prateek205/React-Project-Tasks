// Image Gallery: Create an ImageCard that takes url and caption as props.

export default function Image({ url, caption }) {
  return (
    <div>
      <h1 className="font-bold">Task - 9 Image Card</h1>
      <div className="w-56 h-full border border-12 border-black">
        <img className="w-full object-contain" src={url} alt={caption} />
        <p className="text-center">{caption}</p>
      </div>
    </div>
  );
}
