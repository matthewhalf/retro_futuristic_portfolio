"use client"
import DecryptedText from "./components/DecryptedText";
import Dock from "./components/Dock";
import { VscCallIncoming, VscCode, VscAccount } from "react-icons/vsc";
import RippleGrid from "./components/RippleGrid";
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import AnimatedList from "./components/AnimatedList";
import Particles from "./components/Particles";

export default function Home() {
    const items = [
    { icon: <VscAccount size={18} className="text-white" />, label: '[about me]' },
    { icon: <VscCode size={18} className="text-white" />, label: '[projects]' },
    { icon: <VscCallIncoming size={18} className="text-white" />, label: '[contacts]'  },
    ];

    const projects = [
    { project: 'eiscafedolomiti', category: 'wordpress, elementor', url: 'https://www.eiscafedolomiti.eu'},
    { project: 'poketrainers', category: 'nextJS, poke-api, tailwind', url: 'https://poketrainers.vercel.app'},
    { project: 'music show time', category: 'nextJS, spoty-api, tailwind', url: 'https://music-show-time.vercel.app'},
    { project: 'modern portfolio', category: 'nextJS, tailwind', url: 'https://matthewhalf.vercel.app'},
    { project: '3d portfolio', category: 'nextJS, threejs, tailwind', url: 'https://firstdev.vercel.app'},
    ];

  return (
    <>
   <div className="relative w-full h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10">

            <RippleGrid
                enableRainbow={false}
                gridColor="#aaaa"
                rippleIntensity={0.17}
                gridSize={15}
                gridThickness={30}
                mouseInteraction={true}
                mouseInteractionRadius={1.2}
                opacity={0.2}
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

        <h3 className="text-[.8rem] md:text-[1rem]  text-[#aaaa] uppercase">[Web dev && designer based in Italy]</h3>
    </div>


     <div className="w-full flex flex-col items-center justify-center pt-40">
        <h2 className="text-[2rem] text-[#aaaa] uppercase">[About me]</h2>
        <ScrollStack>
            <ScrollStackItem>
            <p>Breve descrizione su chi sono</p>
            </ScrollStackItem>
            <ScrollStackItem>
            <p>Skills e competenze</p>
            </ScrollStackItem>
            <ScrollStackItem>
            <p>bho</p>
            </ScrollStackItem>
        </ScrollStack>
    </div>



    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center">

        <div className="absolute top-0 left-0 w-full h-full -z-10">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.2}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={false}
            />
        </div>

        <h2 className="text-[2rem] text-[#aaaa] uppercase">[Projects]</h2>
            <AnimatedList
            items={projects}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={false}
            enableArrowNavigation={false}
            displayScrollbar={false}
            />
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
