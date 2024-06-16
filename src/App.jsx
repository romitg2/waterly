import { Canvas } from "@react-three/fiber";
import { Scroll } from "@react-three/drei";
import "./App.css";
import Experience from "./experience/Experience";
import { ScrollControls } from "@react-three/drei";
import ExperienceDynamic from "./experience/ExperienceDynamic";
import Content from "./content/Content";

import Navbar from "./content/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Canvas>
        <ScrollControls pages={5}>
          <Experience />
          <Scroll>
            <ExperienceDynamic />
          </Scroll>
          <Scroll html>
            <Content />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
