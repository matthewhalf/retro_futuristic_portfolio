import AnimatedList from "./ui/AnimatedList";
import Particles from "./ui/Particles";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Projects() {
    const projects = [
        { project: 'eiscafedolomiti', category: 'wordpress, elementor', url: 'https://www.eiscafedolomiti.eu'},
        { project: 'poketrainers', category: 'nextJS, poke-api, tailwind', url: 'https://poketrainers.vercel.app'},
        { project: 'music show time', category: 'nextJS, spoty-api, tailwind', url: 'https://music-show-time.vercel.app'},
        { project: 'modern portfolio', category: 'nextJS, tailwind', url: 'https://matthewhalf.vercel.app'},
        { project: '3d portfolio', category: 'nextJS, threejs, tailwind', url: 'https://firstdev.vercel.app'},
        { project: 'custom wordpress theme', category: 'wordpress, PHP, tailwind', url: 'https://github.com/matthewhalf/first_child'},
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

        <div className="flex gap-6">
            <a href="https://it.linkedin.com/in/matteo-mezzatesta-9b1829289?trk=people-guest_people_search-card" target="_blank"><BsLinkedin size={40} className="mt-4 mb-12" /></a>
            <a href="https://github.com/matthewhalf" target="_blank"><FaGithubSquare size={48} className="mt-3 mb-12" /></a>
        </div>

    </div>
    )
}
