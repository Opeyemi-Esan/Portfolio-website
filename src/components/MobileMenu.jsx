import { useEffect } from "react"
import { TiTimes } from "react-icons/ti";

export const MobileMenu = ({openMenu, setOpenMenu}) => {

    return (
        <div className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                        ${openMenu ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                        `}>
            <button onClick={() => setOpenMenu(false)} className="absolute top-3 right-8 text-gray-400 hover:text-gray-300 text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                <TiTimes />
            </button>
            
            <a href="#home" 
                onClick={() => setOpenMenu(false)}
                className={`text-2xl font-semibold text-gray-400 bg-blue-500/10 px-30 py-2 rounded-xl hover:bg-blue-500/20 my-4 transform transition-all duration-700 ease-in-out
                            ${
                                openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}>Home</a> 

            <a href="#about" onClick={() => setOpenMenu(false)}
                className={`text-2xl font-semibold text-gray-400 bg-blue-500/10 px-30 py-2 rounded-xl hover:bg-blue-500/20 my-4 transform transition-all duration-700 ease-in-out
                            ${
                                openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}>About</a>

            <a href="#projects" onClick={() => setOpenMenu(false)}
                className={`text-2xl font-semibold text-gray-400 bg-blue-500/10 px-30 py-2 rounded-xl hover:bg-blue-500/20 my-4 transform transition-all duration-700 ease-in-out
                            ${
                                openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}>Project</a> 

            <a href="#contact" onClick={() => setOpenMenu(false)}
                className={`text-2xl font-semibold text-gray-400 bg-blue-500/10 px-30 py-2 rounded-xl hover:bg-blue-500/20 my-4 transform transition-all duration-700 ease-in-out
                            ${
                                openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}>Contact</a>
        </div>
    );
};