"use client";
import * as THREE from 'three'
import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls })

import { Canvas, extend } from "@react-three/fiber";

export default function FirstScene() {
    return (
        <div className="canvas-container">

            <Canvas>
                <mesh
                    position={[-1, 0, 0]}
                    rotation={new THREE.Euler(Math.PI / 1, 2, 0)}
                >
                    <boxGeometry args={[2, 2, 2]} />
                    <meshBasicMaterial args={[{ color: 'red', wireframe: true }]} />
                </mesh>
                <mesh
                    position={[2, 0, 0]}>
                    <sphereGeometry args={[1.25, 16, 8]} />
                    <meshBasicMaterial color='red' wireframe />
                </mesh>
            </Canvas>
        </div>
    )
}