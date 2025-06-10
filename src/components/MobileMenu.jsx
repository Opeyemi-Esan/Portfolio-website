import { useEffect } from "react"

export const MobileMenu = ({openMenu, setOpenMenu}) => {

    return (
        <div className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                        ${openMenu ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                        `}>
            <button onClick={() => setOpenMenu(false)} className="absolute top-3 right-7 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                &times;
            </button>
            
            <a href="#home" 
                onClick={() => setOpenMenu(false)}
                className={`text-2xl font-semibold text-white hover:text-blue-500 my-4 transform transition-transform duration-300
                            ${
                                openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}>Home</a> 

            <a href="#about" onClick={() => setOpenMenu(false)}
                className={`text-2xl font-semibold text-white hover:text-blue-500 my-4 transform transition-transform duration-300
                            ${
                                openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}>About</a>

            <a href="#project" onClick={() => setOpenMenu(false)}
                className={`text-2xl font-semibold text-white hover:text-blue-500 my-4 transform transition-transform duration-300
                            ${
                                openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}>Project</a> 

            <a href="#contact" onClick={() => setOpenMenu(false)}
                className={`text-2xl font-semibold text-white hover:text-blue-500 my-4 transform transition-transform duration-300
                            ${
                                openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}>Contact</a>
        </div>
    );
};