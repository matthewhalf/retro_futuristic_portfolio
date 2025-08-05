"use client"
import DecryptedText from "./components/DecryptedText";
import Dock from "./components/Dock";
import { VscCallIncoming, VscCode, VscAccount } from "react-icons/vsc";
import RippleGrid from "./components/RippleGrid";
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import AnimatedList from "./components/AnimatedList";
import Particles from "./components/Particles";

export default function Home() {
    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


   const items = [
    { icon: <VscAccount size={18} classNameName="text-white" />, label: '[about me]', onClick: () => scrollToSection('about') },
    { icon: <VscCode size={18} classNameName="text-white" />, label: '[projects]', onClick: () => scrollToSection('projects') },
    { icon: <VscCallIncoming size={18} classNameName="text-white" />, label: '[contacts]', onClick: () => scrollToSection('contacts') },
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
   <div classNameName="relative w-full h-screen flex flex-col items-center justify-center text-center">
        <div classNameName="absolute top-0 left-0 w-full h-full -z-10">

            <RippleGrid
                enableRainbow={false}
                gridColor="#aaaa"
                rippleIntensity={0.20}
                gridSize={20}
                gridThickness={10}
                mouseInteraction={true}
                mouseInteractionRadius={1.2}
                opacity={0.2}
                fadeDistance={5}
            />

        </div>

        <DecryptedText
            text="Hi, im Matthew"
            animateOn="view"
            revealDirection="center"
            speed="200"
            maxIterations="20"
            classNameName="md:text-[4rem] text-[2rem] text-[var(--text)]"
            encryptedclassNameName="md:text-[4rem] text-[2rem] text-[var(--text)] "
            parentclassNameName=" md:text-[4rem]text-[2rem] text-[var(--text)] "
        />

        <h3 classNameName="text-[.8rem] md:text-[1rem]  text-[#aaaa] uppercase">[Web dev && designer based in Italy]</h3>
    </div>


     <div classNameName="w-full  flex flex-col items-center justify-center pt-10" id="about">
        <h2 classNameName="text-[2rem] text-[#aaaa] uppercase">[About me]</h2>
        <ScrollStack>
            <ScrollStackItem>
            <h3 classNameName="text-lg text-white pb-2">Whoami</h3>
            <p>I&apos;m a passionate web developer and designer with a strong focus on building custom WordPress websites tailored to client needs. With a solid background in PHP, HTML, CSS, Tailwind CSS, and JavaScript, I specialize in creating responsive, accessible, and performance-optimized digital experiences.
            </p>
            </ScrollStackItem>
            <ScrollStackItem>
            <h3 classNameName="text-lg text-white pb-2">Skills</h3>
            <div classNameName="flex gap-2 justify-center items-center">
                <p>[Html]</p>
                <div classNameName="flex gap-1">
                    <div classNameName="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div classNameName="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div classNameName="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div classNameName="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div classNameName="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                </div>
                <p>5/5</p>
            </div>

             <div classNameName="flex gap-2 justify-center items-center">
                <p>[CSS]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                </div>
                <p>5/5</p>
            </div>

            <div classNameName="flex gap-2 justify-center items-center">
                <p>[JS]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-700"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-700"></div>
                </div>
                <p>3/5</p>
            </div>

            <div classNameName="flex gap-2 justify-center items-center">
                <p>[PHP]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-700"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-700"></div>
                </div>
                <p>3/5</p>
            </div>

            <div classNameName="flex gap-2 justify-center items-center">
                <p>[Tw]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                </div>
                <p>5/5</p>
            </div>

              <div classNameName="flex gap-2 justify-center items-center">
                <p>[NextJS]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 bg-neutral-700"></div>
                    <div className="h-2 md:w-20 w-6 bg-neutral-700"></div>
                    <div className="h-2 md:w-20 w-6 bg-neutral-700"></div>
                </div>
                <p>2/5</p>
            </div>
            </ScrollStackItem>
        </ScrollStack>
    </div>



    <div classNameName="relative w-full md:min-h-screen flex flex-col items-center justify-center text-center" id="projects">
        <div classNameName="absolute top-0 left-0 w-full h-full -z-10">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={250}
                particleSpread={10}
                speed={0.2}
                particleBaseSize={150}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={false}
            />
        </div>

        <h2 classNameName="text-[2rem] text-[#aaaa] uppercase md:pt-20 pt-10">[Projects]</h2>
            <AnimatedList
            items={projects}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={false}
            enableArrowNavigation={false}
            displayScrollbar={false}
            />

        <h2 classNameName="text-[2rem] text-[#aaaa] uppercase mt-20" id="contacts">[Contacts]</h2>

        <a href="mailto:info@matthewdev.it"><p classNameName="text-2xl text-center text-white mt-5 pb-20">info@matthewdev.it</p></a>

    </div>

        <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            classNameName="fixed bottom-0 mb-3 bg-black"
        />
    </>
  );
}
