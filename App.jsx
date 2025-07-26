import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <boxGeometry args={[4, 1, 8]} />
      <meshStandardMaterial color="#3fa34d" />
    </mesh>
  )
}

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [10, 5, 10], fov: 50 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
