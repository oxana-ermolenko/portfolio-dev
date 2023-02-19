import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Load3D from "./Load3D";

export interface IBot {}

const Bot: React.FC<IBot> = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Load3D position={[-1, -1.4, 2.5]} />
      </Suspense>
    </Canvas>
  );
};
export default Bot;
