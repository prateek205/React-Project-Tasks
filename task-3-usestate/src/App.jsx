import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter";
import InputBox from "./components/InputBoxString";
import Toggle from "./components/Toggle";

export default function App() {
  return (
    <div className="flex flex-col gap-5 py-5 px-8">
      <Toggle />
      <Counter />
      <InputBox/>
      <ColorPicker/>
    </div>
  );
}
