import AnimatedList from "./ui/AnimatedList";
import Particles from "./ui/Particles";

export default function Projects() {
    const projects = [
        { project: 'eiscafedolomiti', category: 'wordpress, elementor', url: 'https://www.eiscafedolomiti.eu'},
        { project: 'poketrainers', category: 'nextJS, poke-api, tailwind', url: 'https://poketrainers.vercel.app'},
        { project: 'music show time', category: 'nextJS, spoty-api, tailwind', url: 'https://music-show-time.vercel.app'},
        { project: 'modern portfolio', category: 'nextJS, tailwind', url: 'https://matthewhalf.vercel.app'},
        { project: '3d portfolio', category: 'nextJS, threejs, tailwind', url: 'https://firstdev.vercel.app'},
        ];

    return (
        <div className="relative w-full md:min-h-screen flex flex-col items-center justify-center text-center" id="projects">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
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

        <h2 className="text-[2rem] text-[#aaaa] uppercase md:pt-20 pt-10">[Projects]</h2>
            <AnimatedList
            items={projects}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={false}
            enableArrowNavigation={false}
            displayScrollbar={false}
            />

        <h2 className="text-[2rem] text-[#aaaa] uppercase mt-20" id="contacts">[Contacts]</h2>

        <a href="mailto:info@matthewdev.it"><p className="text-2xl text-center text-white mt-5 pb-20">info@matthewdev.it</p></a>

    </div>
    )
}
