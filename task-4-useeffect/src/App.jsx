import Cleanup from "./components/CleanupAct";
import BrowserTitle from "./components/Document-title";
import LogUser from "./components/Log-Monitor";
import Alert from "./components/The5SecondAlert";

export default function App() {
  return (
    <div className="flex flex-col gap-3 py-5 px-3">
      <BrowserTitle />
      <LogUser />
      {/* <Alert /> */}
      <Cleanup />
    </div>
  );
}
