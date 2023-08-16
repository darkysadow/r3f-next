import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three-stdlib";
extend({ OrbitControls })
export default function Meshes() {
    const cubeRef = useRef()
    const sphereRef = useRef()
    const { camera, gl } = useThree();
    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
        cubeRef.current.rotation.x += delta;
        sphereRef.current.rotation.y -= delta;
        sphereRef.current.rotation.z -= delta;
    })

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />
            <mesh
                ref={cubeRef}
                position={[-2, 0, 0]}
                rotation={new THREE.Euler(Math.PI / 1, 2, 0)}
                scale={1.2}
            >
                <boxGeometry args={[2, 2, 2]} />
                <meshBasicMaterial args={[{ color: 'red', wireframe: true }]} />
            </mesh>
            <mesh
                ref={sphereRef}
                position={[2, 0, 0]}
                scale={[1.2, 1.2, 1.2]}
            >
                <sphereGeometry args={[1.25, 16, 8]} />
                <meshBasicMaterial color='red' wireframe />
            </mesh>
        </>
    )
}