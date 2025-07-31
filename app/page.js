import DecryptedText from "./components/DecryptedText";
import Dock from "./components/Dock";
import { VscCallIncoming, VscCode, VscAccount } from "react-icons/vsc";
import RippleGrid from "./components/RippleGrid";
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'


export default function Home() {
    const items = [
    { icon: <VscAccount size={18} className="text-white" />, label: 'Chi sono' },
    { icon: <VscCode size={18} className="text-white" />, label: 'Progetti' },
    { icon: <VscCallIncoming size={18} className="text-white" />, label: 'Contatti'  },
  ];
  return (
    <>
   <div className="relative w-full h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10">

            <RippleGrid
                enableRainbow={false}
                gridColor="#1000DC"
                rippleIntensity={0.17}
                gridSize={15}
                gridThickness={7}
                mouseInteraction={true}
                mouseInteractionRadius={1.2}
                opacity={0.5}
                fadeDistance={1}
            />

        </div>

        <DecryptedText
            text="Hi, im Matthew"
            animateOn="view"
            revealDirection="center"
            speed="200"
            maxIterations="30"
            className="md:text-[4rem] text-[2rem] text-[var(--text)] mt-20"
            encryptedClassName="md:text-[4rem] text-[2rem] text-[var(--text)] mt-20"
            parentClassName=" md:text-[4rem]text-[2rem] text-[var(--text)] mt-20"
        />

        <h3 className="text-[1rem] text-white">Web dev && designer based in Italy</h3>
    </div>


     <div className="w-full min-h-screen flex flex-col items-center justify-center pt-40">
        <ScrollStack>
            <ScrollStackItem>
            <h2>Card 1</h2>
            <p>This is the first card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
            <h2>Card 2</h2>
            <p>This is the second card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
            <h2>Card 3</h2>
            <p>This is the third card in the stack</p>
            </ScrollStackItem>
        </ScrollStack>
    </div>




        <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            className="fixed bottom-0 mb-3 bg-black"
        />
    </>
  );
}
