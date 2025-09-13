// src/components/HeroSection.jsx

"use client";

import { Canvas } from "@react-three/fiber";
import ThreeDModel from "./ThreeDModel";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* The Canvas component is where the 3D magic happens */}
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ThreeDModel />
      </Canvas>

      {/* We can overlay text on top of the 3D canvas */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-5xl md:text-8xl font-bold text-white text-center mix-blend-difference">
          Beyond the Standard
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mt-4 mix-blend-difference">
          An interactive 3D experience.
        </p>
      </div>
    </div>
  );
}
