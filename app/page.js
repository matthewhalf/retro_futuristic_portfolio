import Noise from "./components/Noise";
import DecryptedText from "./components/DecryptedText";
import FuzzyText from "./components/FuzzyText";

export default function Home() {
  return (
    <div className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-center">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <DecryptedText
        text="Hi im Matt, web dev && designer"
        animateOn="view"
        revealDirection="center"
        speed="200"
        maxIterations="40"
        className="text-[var(--text)] text-[50px] font-bold"
        parentClassName="text-[var(--text)] text-[50px]"
        encryptedClassName="text-[var(--text)] text-[50px]"
      />

        <FuzzyText
        baseIntensity={0.1}
        hoverIntensity={0.8}
        enableHover={true}
        fontSize="2rem"
        >
        Hi im Matt, web dev && designer
        </FuzzyText>
    </div>
  );
}
