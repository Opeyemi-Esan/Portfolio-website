

export const Home = () => {

    const backroudUrl = "https://images.app.goo.gl/rxi5QTCgahesHBrF9";

    return(
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-[url('https://thumbs.dreamstime.com/b/javascript-web-developer-blue-illustration-react-node-angular-bootstrap-jquery-php-368566688.jpg?w=992')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-7xl font-bold pb-8 gradient-text">
                    Hello, I'm Opeyemi Esan
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto mb-4">
                    I am a dedicated Full-Stack Developer skilled in creating accessible and user-friendly web applications. 
                    Proficient in React for dynamic front-end development and C# with ASP.NET for robust back-end solutions. 
                    I am passionate about fostering inclusive technology that caters to diverse user needs, ensuring that everyone 
                    can navigate and benefit from digital experiences.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="#projects" className="border boder-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                        View Projects
                    </a>

                    <a href="#contact" className="border boder-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>
            
        </section>
    )
}