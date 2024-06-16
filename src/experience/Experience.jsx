/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Text } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { ScreenSizer } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
import { GradientTexture, MeshDistortMaterial } from "@react-three/drei";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";
import { useState } from "react";
import Logo from "./Logo";

function Experience() {
  const { mouse } = useThree();
  const data = useScroll();
  const materialRef = useRef();

  const [mousePos, setMousePos] = useState([0, 0]);

  useFrame(() => {
    console.log(mouse.x, mouse.y);
    setMousePos([Math.floor(mouse.x * 100), Math.floor(mouse.y * 100)]);
  });

  useControls({ color: "#ffffff" });

  useFrame(() => {
    materialRef.current.distort = 0.4 + Math.min(0.5, data.delta * 5000);
  });

  return (
    <>
      <Logo position={[-5.5, 3.3, 0]} scale={0.5} />
      {/* <Logo /> */}
      <Text>
        {mousePos[0]} , {mousePos[1]}
      </Text>
      <Perf />
      <ScreenSizer
        scale={1} // scale factor
      ></ScreenSizer>
      <ambientLight intensity={1} />
      {/* <pointLight position={[-10, -10, -10]} intensity={5} /> */}
      <mesh>
        <Sparkles count={300} scale={5 * 2} size={1} speed={0.4} />
        {/* <sphereGeometry args={[15, 32, 16]} /> */}
        <planeGeometry args={[20, 10, 32, 32]} />
        <MeshDistortMaterial
          ref={materialRef}
          distort={0.3}
          // opacity={0.3}
          speed={3}
        >
          <GradientTexture
            stops={[0, 0.4, 1.0]}
            // colors={["#ffffff", "#8888ff", "#ffffff"]}
            colors={["#4488ff", "#ffffff", "#ffffff"]}
            // colors={["#ffffff", color, "#000"]}
            // colors={["000000", "#ffffff", "#000000"]}
            size={10}
          />
        </MeshDistortMaterial>
      </mesh>
      <mesh position={[0, 30, 0]}>
        <boxGeometry args={[10, 10, 10]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default Experience;
//
// /* eslint-disable react/no-unknown-property */
// import { OrbitControls } from "@react-three/drei";
//
// function Experience() {
//   return (
//     <>
//       <OrbitControls />
//       <mesh>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshNormalMaterial />
//       </mesh>
//     </>
//   );
// }
//
// export default Experience;
