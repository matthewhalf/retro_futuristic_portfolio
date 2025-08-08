import Dock from "./ui/Dock";
import { VscCallIncoming, VscCode, VscAccount } from "react-icons/vsc";

export default function BottomNav() {
    const items = [
        { icon: <VscAccount size={18} className="text-white" />, label: '[about me]', onClick: () => scrollToSection('about') },
        { icon: <VscCode size={18} className="text-white" />, label: '[projects]', onClick: () => scrollToSection('projects') },
        { icon: <VscCallIncoming size={18} className="text-white" />, label: '[contacts]', onClick: () => scrollToSection('contacts') },
    ];

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
         <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            className="fixed bottom-0 mb-3 bg-black"
        />
    )
}
