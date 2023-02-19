import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

export interface ILoad3D {
  position: number[];
}

const Load3D: React.FC<ILoad3D> = ({ position }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/guru.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(nodes);
    //actions.Armature|mixamo.com.play();
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