export const About = () => {

  const forntendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS"
  ];

  const backendSkiils = [
    ".Net",
    "ASP.Net",
    "C#",
    "SQL",
    "Azure",
    "AWS",
    "EntityFramework"
  ];



  const workExperience = [
    {
      company: "ReadO Edutech",
      year: "January 2025 - Present",
      position: "Backend Developer",
      obligation: "Led the development of the ReadO EdTech app’s backend using .NET 8, implementing core features like progress tracking, customizable timers, digital notebooks, course outlines, and email notifications. Integrated Pusher for real-time OTP notifications and Elastic Email for account registration. Also contributed to the frontend using React and collaborated on UI/UX design in Figma to deliver an engaging, student-focused learning experience."
    },
    {
      company: "Mercyland Group",
      year: "January 2023 - December 2024",
      position: "Fullstack Developer",
      obligation: "Actively participated in project planning and meetings, providing input on technical feasibility, design considerations, and project timelines. Worked closely with backend developers, providing frontend support and ensuring seamless integration of frontend and backend components. Collaborated with the marketing team to create visually compelling graphics, banners,and illustrations for web and social media campaigns. Conducted thorough testing and debugging to identify and resolve frontend issues,ensuring a seamless user experience. Conducted user research and usability testing to gather feedback and make data-driven design decisions. Created and maintained a design system to ensure consistency across multiple web applications and platforms."
    },
    {
      company: "Bincom Academy",
      year: "October 2024 - November 2024",
      position: "Backend Developer",
      obligation: "Developed RESTful APIs that facilitated communication between the front-end and back-end systems. This involved designing endpoints, handling routing, and ensuring proper data exchange through JSON. Used Entity Framework for ORM to efficiently manage database operations."
    },
    {
      company: "Enop-Tech Solutions",
      year: "January 2021 - Present",
      position: "Fullstack Developer",
      obligation: "Developed and maintained enterprise-level web applications using .Net Technologies and react.Js. Collaborated with UI/UX designers to implement responsive and user-friendly interfaces. Designed and optimized SQL Server databases, improving query performance. Implemented RESTful services for seamless integration with front-end applications. Participated in Agile ceremonies, including sprint planning and daily stand-ups."
    }
  ];

  const myEducation = [
    {
      institution: "Federal University of Technology, Akure",
      year: "January 2013 - November 2018",
      course: "Industrial Design"
    }
  ];

 

  return (
    <div 
        id='about'
        className="relative min-h-screen py-20 flex justify-center items-center  
        bg-[url('https://thumbs.dreamstime.com/b/skilled-front-end-developer-optimizing-websites-modern-coding-standards-professional-space-generated-ai-352206618.jpg?w=992')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/92 backdrop-blur-xl"></div>
          <div className="max-w-3xl md:max-w-5xl mx-auto px-4 z-10">
              <h1 className='text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent lead-right font-bold mb-10 text-center'
              >About Me</h1>

              <div className="rounded-lg md:border border-white/10 md:p-8 flex flex-col gap-10 md:gap-4">
                <p className="mb-4 text-center">I am a full stack developer with 4 years of experience building responsive, dynamic and RESTful API using React.js and ASP.NET technologies.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-4">
                    {forntendSkills.map((tech)=>(
                      <span className="bg-blue-500/10 text-blue-500 py-1 px-2 hover:bg-blue-500/20 transition-all duration-300"
                      >{tech}</span>
                    ))}
                    </div>
                  </div>

                   <div className="rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-4">
                    {backendSkiils.map((tech)=>(
                      <span className="bg-blue-500/10 text-blue-500 py-1 px-2 hover:bg-blue-500/20 transition-all duration-300"
                      >{tech}</span>
                    ))}
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="rounded-xl md:p-6 md:border border-white/10 flex flex-col gap-4">
                    <h1 className="text-xl font-bold mx-auto text-gray-300">Work Experience</h1>
                    <div className="flex flex-col gap-4">
                      {workExperience.map((work, index)=>(
                        <div key={index}
                        className="bg-blue-500/10 text-gray-300 p-4 hover:bg-blue-500/20 flex flex-col gap-2 transition-all duration-300">
                          <div className="bg-blue-500/50 py-1 px-2 font-bold flex justify-between items-center">
                            <h3 className="text-lg text-gray-300">{work.company}</h3>
                            <h3 className="italic text-gray-300">{work.year}</h3>
                          </div>
                          <h3 className="text-blue-500 font-bold text-lg italic">{work.position}</h3>
                          <ul className="text-gray-300">
                            <li>
                              {work.obligation}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-4 md:p-6 m-auto w-full">
                  <h3 className="font-bold text-xl mx-auto text-gray-300">Education</h3>
                  {myEducation.map((edu, index)=> (
                    <div key={index}
                    className="bg-blue-500/10 text-gray-300 p-4 hover:bg-blue-500/20 flex flex-col gap-2 transition-all duration-300">
                          <div className="bg-blue-500/50 py-1 px-2 font-bold flex justify-between items-center">
                            <h3 className="text-lg text-gray-300">{edu.institution}</h3>
                          </div>
                          <h3 className="text-blue-500 font-bold text-lg italic">{edu.year}</h3>
                          <p>{edu.course}</p>
                        </div>
                  ))}
                </div>
              </div>
          </div>
    </div>
  )
}
