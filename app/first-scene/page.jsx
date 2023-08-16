"use client";
import * as THREE from 'three'
import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls })

import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useRef } from 'react';
import Meshes from '@/components/canvas/Meshes';

export default function FirstScene() {

    return (
        <div className="canvas-container">

            <Canvas>
                <Meshes />
            </Canvas>
        </div>
    )
}