import ProfileImage from '../sections/Profile Image.png';
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsThreads, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'

export const Home = () => {

    const backroudUrl = "https://images.app.goo.gl/rxi5QTCgahesHBrF9";

    

    return(
        <section id="home" className="relative min-h-screen py-20 flex items-center justify-center gap-20 bg-[url('https://thumbs.dreamstime.com/b/javascript-web-developer-blue-illustration-react-node-angular-bootstrap-jquery-php-368566688.jpg?w=992')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
            <div className="z-10 px-4 flex flex-col md:flex-row gap-10 items-center">
                <div className=''>
                    <h1 className="text-4xl md:text-7xl font-bold pb-8 gradient-text text-center md:text-left">
                        Hello, I'm Opeyemi Esan
                    </h1>

                    <p className="text-gray-400 max-w-2xl text-center md:text-left mb-4">
                        I am a dedicated Full-Stack Developer skilled in creating accessible and user-friendly web applications. 
                        Proficient in React for dynamic front-end development and C# with ASP.NET for robust back-end solutions. 
                        I am passionate about fostering inclusive technology that caters to diverse user needs, ensuring that everyone 
                        can navigate and benefit from digital experiences.
                    </p>

                    <div className='flex justify-center md:justify-start items-center gap-6 mb-6'>
                        <a href='https://www.linkedin.com/in/opeyemiesan/' target='_blank' className='border border-white/10 hover:border-white/20 shadow-[0_0_5px_2px_rgba(59,130,246,0.75)] hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.75)] p-2 rounded-full text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><LiaLinkedin /></a>
                        <a href='https://x.com/Enop7156' target='_blank' className='border border-white/10 hover:border-white/20 shadow-[0_0_5px_2px_rgba(59,130,246,0.75)] hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.75)] p-2 rounded-full text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><BsTwitter /></a>
                        <a href='https://wa.me/message/IDZMGVIN3CT3G1' target='_blank' className='border border-white/10 hover:border-white/20 shadow-[0_0_5px_2px_rgba(59,130,246,0.75)] hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.75)] p-2 rounded-full text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><BsWhatsapp /></a>
                        <a href='https://github.com/Opeyemi-Esan' target='_blank' className='border border-white/10 hover:border-white/20 shadow-[0_0_5px_2px_rgba(59,130,246,0.75)] hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.75)] p-2 rounded-full text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><BsGithub /></a>
                    </div>

                    <div className="flex justify-center md:justify-start  gap-4">
                        <a href="#projects" className="border boder-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Projects
                        </a>

                        <a href="#contact" className="border boder-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className='home-image'>
                    <div className="image-box">
                        <div className="image-item">
                            <img src={ProfileImage} alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}