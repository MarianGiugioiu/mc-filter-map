import React from 'react'
import { ItemsMap } from './ItemsMap'
import { Canvas } from "@react-three/fiber";

export const MainComponent = () => {
  return (
    <Canvas shadows camera={{ position: [0, 12, 0], fov: 40 }}>
        <color attach="background" args={["#ececec"]} />
        <ItemsMap />
    </Canvas>
  )
}
