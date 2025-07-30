import DecryptedText from "./components/DecryptedText";
import Dock from "./components/Dock";
import { VscCallIncoming, VscCode, VscAccount } from "react-icons/vsc";
import ScrollVelocity from "./components/ScrollVelocity";
import RippleGrid from "./components/RippleGrid";
import CardSwap, { Card } from './components/CardSwap'

export default function Home() {
    const items = [
    { icon: <VscAccount size={18} className="text-white" />, label: 'Chi sono' },
    { icon: <VscCode size={18} className="text-white" />, label: 'Progetti' },
    { icon: <VscCallIncoming size={18} className="text-white" />, label: 'Contatti'  },
  ];
  return (
    <>
    <ScrollVelocity
    texts={['Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet']}
    velocity={40}
    className="custom-scroll-text"
    scrollerClassName="w-full"
    />

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
            className="text-[4rem] text-[var(--text)] mt-20"
            encryptedClassName="text-[4rem] text-[var(--text)] mt-20"
            parentClassName="text-[4rem] text-[var(--text)] mt-20"
        />

        <h3 className="text-[1.5rem] text-white">Web dev && designer based in Italy</h3>
    </div>

    <div className="w-full h-screen relative flex gap-20 justify-center items-center text-center">
        <div className="md:w-[40%]">
            <h3 className="text-white md:text-[5rem] text-[2rem]">Chi sono </h3>
            <p  className="text-white text-lg">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum</p>
        </div>
        <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={3000}
        pauseOnHover={false}
    >
            <Card>
            <h3 className="border-b-1">Card 1</h3>
            <p className="mt-2">Your content here Your content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content here</p>
            </Card>
            <Card>
            <h3 className="border-b-1">Card 2</h3>
           <p className="mt-2">Your content here Your content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content here</p>
            </Card>
            <Card>
            <h3 className="border-b-1">Card 3</h3>
            <p className="mt-2">Your content here Your content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content hereYour content here</p>
            </Card>
    </CardSwap>

    </div>

        <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            className="fixed bottom-0 mb-3"
        />
    </>
  );
}
