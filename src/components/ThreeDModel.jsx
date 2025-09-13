// src/components/ThreeDModel.jsx

"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TorusKnot, OrbitControls } from "@react-three/drei";

export default function ThreeDModel() {
  // A ref to access the 3D mesh directly
  const meshRef = useRef();

  // The useFrame hook runs on every single frame, perfect for animations
  useFrame((state, delta) => {
    // Rotate the mesh a little bit on each frame
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      {/* OrbitControls allows the user to rotate, zoom, and pan with the mouse */}
      <OrbitControls
        enableZoom={false} // Disable zoom to maintain the layout
        autoRotate // Gently rotate the object automatically
        autoRotateSpeed={4.0}
      />

      {/* Add some lights to the scene */}
      {/* Increased ambient light for softer global illumination */}
      <ambientLight intensity={7.5} />
      {/* Added a strong directional light from the side */}
      <directionalLight position={[2, 5, 2]} intensity={3} />
      {/* Kept the point light for extra highlights */}
      <pointLight position={[-10, -10, -10]} intensity={11.5} />

      {/* This is our 3D shape */}
      <TorusKnot ref={meshRef} args={[3, 0.3, 200, 32]}>
        {/* This is the material, or "skin," of the shape */}
        <meshStandardMaterial
          color="#6a0dad" // A nice purple color
          metalness={0.99} // Makes it look metallic
          roughness={0.2} // Makes the surface shiny and reflective
        />
      </TorusKnot>
    </>
  );
}
