import { useRef, useEffect } from "react";
import { Gltf, useAnimations, useGLTF } from "@react-three/drei";
//import { GLTF } from "three-stdlib";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export interface ILoad3D {
  position: number[];
}

interface GLTFResult extends GLTF  {
  nodes: any;
  materials: { SpacePirate_M: THREE.MeshStandardMaterial };
  animations: any;
};
// declare module "three" {
//   interface GLTF {
//     nodes: any;
//   }
// }

const Load3D: React.FC<ILoad3D> = ({ position }) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/guru.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.run.play();
  });
  return (
    <group ref={group} position={position} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.02, 0.02]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh material={materials.SpacePirate_M} geometry={nodes.Mesh.geometry} skeleton={nodes.Mesh.skeleton} />
      </group>
    </group>
  );
};
useGLTF.preload("/guru.glb");
export default Load3D;