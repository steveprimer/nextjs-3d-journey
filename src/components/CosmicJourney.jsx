// src/components/CosmicJourney.jsx

"use client"; // This is a client component because it uses hooks

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Star, Code } from "lucide-react"; // Using icons for visual elements

// This is the main component that orchestrates the entire scroll-based animation.
export default function CosmicJourney() {
  // We use a ref to target the specific section we want to track the scroll progress of.
  const targetRef = useRef(null);

  // The useScroll hook from Framer Motion tracks the scroll progress of the targetRef.
  // "start start" means the animation starts when the top of the target hits the top of the viewport.
  // "end end" means the animation ends when the bottom of the target hits the bottom of the viewport.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // --- TEXT ANIMATIONS ---
  // We transform the scroll progress (a value from 0 to 1) into different opacity values.
  const text1Opacity = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.25],
    [0, 1, 0]
  );
  const text1Y = useTransform(scrollYProgress, [0.05, 0.15], ["30px", "0px"]);

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text2Y = useTransform(scrollYProgress, [0.3, 0.4], ["30px", "0px"]);

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75],
    [0, 1, 0]
  );
  const text3Y = useTransform(scrollYProgress, [0.55, 0.65], ["30px", "0px"]);

  const finaltextOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const finaltextY = useTransform(
    scrollYProgress,
    [0.85, 0.95],
    ["30px", "0px"]
  );

  // --- CENTRAL ROCKET ANIMATION ---
  // The rocket starts small and scales up dramatically, creating the feeling of flying towards it.
  const rocketScale = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.8],
    [1, 3, 15]
  );
  const rocketOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]); // Fade out at the end
  const rocketRotate = useTransform(scrollYProgress, [0.1, 0.4], [0, 20]);

  // --- BACKGROUND & FOREGROUND ELEMENTS ---
  // These elements move at different speeds (parallax) to create depth.
  const starfieldScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // Background zooms slowly
  const code1X = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]); // Moves across the screen
  const code1Y = useTransform(scrollYProgress, [0, 1], ["10%", "30%"]);
  const star1X = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);
  const star1Y = useTransform(scrollYProgress, [0, 1], ["20%", "80%"]);
  const code2X = useTransform(scrollYProgress, [0, 1], ["120%", "-20%"]); // Moves the other way
  const code2Y = useTransform(scrollYProgress, [0, 1], ["70%", "40%"]);

  return (
    // The container needs a defined height to create the scrollable area. 300vh = 3 times the viewport height.
    <div ref={targetRef} className="relative h-[300vh] w-full bg-black">
      {/* The sticky container holds all our animated elements. It stays in the center of the viewport while we scroll. */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Layer 1: The Background (Slowest) */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3e%3crect fill='%23000000' width='1600' height='900'/%3e%3cg fill='%23ffffff'%3e%3ccircle cx='400' cy='225' r='1'/%3e%3ccircle cx='800' cy='450' r='1'/%3e%3ccircle cx='1200' cy='675' r='1'/%3e%3ccircle cx='200' cy='112' r='1'/%3e%3ccircle cx='600' cy='337' r='1'/%3e%3ccircle cx='1000' cy='562' r='1'/%3e%3ccircle cx='1400' cy='787' r='1'/%3e%3ccircle cx='300' cy='168' r='1'/%3e%3ccircle cx='700' cy='393' r='1'/%3e%3ccircle cx='1100' cy='618' r='1'/%3e%3ccircle cx='1500' cy='843' r='1'/%3e%3ccircle cx='100' cy='56' r='1'/%3e%3ccircle cx='500' cy='281' r='1'/%3e%3ccircle cx='900' cy='506' r='1'/%3e%3ccircle cx='1300' cy='731' r='1'/%3e%3c/g%3e%3c/svg%3e\")",
            scale: starfieldScale,
          }}
        />

        {/* Layer 2: Floating Parallax Elements */}
        <motion.div
          style={{ x: code1X, y: code1Y }}
          className="absolute text-slate-500 opacity-50"
        >
          <Code size={60} />
        </motion.div>
        <motion.div
          style={{ x: star1X, y: star1Y }}
          className="absolute text-yellow-300 opacity-50"
        >
          <Star size={40} />
        </motion.div>
        <motion.div
          style={{ x: code2X, y: code2Y }}
          className="absolute text-slate-500 opacity-50"
        >
          <Code size={80} />
        </motion.div>

        {/* Layer 3: The Central Object */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            scale: rocketScale,
            opacity: rocketOpacity,
            rotate: rocketRotate,
          }}
        >
          <Rocket className="text-white" size={64} />
        </motion.div>

        {/* Layer 4: The Animated Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute text-4xl md:text-6xl font-bold text-white text-center"
          >
            Scroll to begin your journey.
          </motion.h2>
          <motion.h2
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute text-4xl md:text-6xl font-bold text-white text-center"
          >
            Explore new dimensions.
          </motion.h2>
          <motion.h2
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute text-4xl md:text-6xl font-bold text-white text-center"
          >
            Push the boundaries.
          </motion.h2>
          <motion.div
            style={{ opacity: finaltextOpacity, y: finaltextY }}
            className="absolute text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Welcome to the Future.
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mt-4">
              This is the power of scroll-driven animation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
