import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./experience/Experience";
import { Perf } from "r3f-perf";

function App() {
  return (
    <>
      <Canvas>
        <Perf />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
