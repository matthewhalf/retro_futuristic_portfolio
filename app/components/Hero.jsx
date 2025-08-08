"use client"
import RippleGrid from "./ui/RippleGrid";
import DecryptedText from "./ui/DecryptedText";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <RippleGrid
          enableRainbow={false}
          gridColor="#aaaa"
          rippleIntensity={0.2}
          gridSize={20}
          gridThickness={10}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.2}
          fadeDistance={5}
        />
      </div>

      <DecryptedText
        text="Hi, I'm Matthew"
        animateOn="view"
        revealDirection="center"
        speed="200"
        maxIterations="20"
        className="md:text-[4rem] text-[2rem] text-[var(--text)]"
        encryptedClassName="md:text-[4rem] text-[2rem] text-[var(--text)]"
        parentClassName="md:text-[4rem] text-[2rem] text-[var(--text)]"
      />

      <h3 className="text-[.8rem] md:text-[1rem] text-[#aaaa] uppercase">
        [Web dev && designer based in Italy]
      </h3>
    </div>
  );
}
