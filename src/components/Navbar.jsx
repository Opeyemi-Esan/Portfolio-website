import { useEffect } from "react"
import { FaHamburger } from "react-icons/fa";

export const Navbar = ({openMenu, setOpenMenu}) => {

    useEffect (() => {
        document.body.style.overflow = openMenu ? "hidden" : "";
    }, [openMenu]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl md:max-w-none mx-auto px-4 md:px-50">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono font-bold text-gray-300 text-lg">
                        {""}
                        Enop<span className="text-blue-500">.tech</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=>setOpenMenu((prev) => !prev)}>
                        <FaHamburger className="text-xl" />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-blue-500 transition-colors">Home</a> 
                        <a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">About</a> 
                        <a href="#projects" className="text-gray-300 hover:text-blue-500 transition-colors">Project</a> 
                        <a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a> 
                    </div>
                </div>
            </div>
        </nav>
    )
}