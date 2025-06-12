import React from 'react'

export const Projects = () => {

    const myProjects = [
        {
            title: "ReadO EduTech App",
            description: "READO is a beautifully designed reading companion app that combines progress tracking, personalized recommendations, and community engagement ideal for avid readers who want to stay organized and motivated.",
            link: "https://github.com/Opeyemi-Esan",
            technology: ".Net 8"
        },
        {
            title: "Real Estate App",
            description: "Developed a fully responsive and user-friendly real estate website using React.js. The platform allows users to browse property listings, view detailed information, and make secure payments through integrated payment gateways. Collaborated closely with the design team to create an intuitive and visually appealing user interface, ensuring a seamless experience across all devices.",
            link: "https://mercylandgroup.com",
            technology: ".Net 8 and React.Js"
        },
        {
            title: "Admin Panel",
            description: "Built and maintained a real estate admin web application that enables company staff to securely log in and perform full CRUD operations on property listings. The admin panel allows uploading, reading, updating, and deleting property data, which syncs directly with the client-facing website. The backend, developed using the .NET Framework, handles business logic, API services, and data management. SQL was used for robust and efficient database operations. The system ensures real-time content updates, keeping the platform dynamic and current.",
            link: "https://admin.mercylandgroup.com",
            technology: ".Net 8 and React.Js"
        },
        {
            title: "Portfolio Website",
            description: "Designed and developed a personal portfolio website to showcase projects, skills, and professional experience. The site features a clean, responsive layout for optimal viewing across devices, with interactive sections for project demos, contact forms, and downloadable résumés. Built with modern web technologies, the portfolio emphasizes user experience, smooth navigation, and visual appeal, serving as a central hub for personal branding and client outreach.",
            link: "https://opeyemi-esan-portfolio.vercel.app/",
            technology: "React.Js"
        },
        {
            title: "Banking App",
            description: "The Banking App backend enables core financial operations through a secure and efficient API. Users can create new bank accounts by submitting personal details and an initial deposit, with the system generating a unique account number. Key features include transferring funds between accounts with validation and balance checks, and depositing funds with real-time balance updates and transaction logging. All data is securely stored and managed in a database, ensuring accuracy and traceability of financial records.",
            link: "https://github.com/Opeyemi-Esan/Banking-App",
            technology: ".Net 8"
        },
        {
            title: "Book Store",
            description: "The bookstore application features a secure and scalable backend developed using C# and ASP.NET Core. It supports user registration and login through JWT-based authentication, ensuring secure access control. A comprehensive RESTful API enables full CRUD operations for managing the book inventory. Entity Framework was used to streamline data access and interaction with the database. The system also incorporates security best practices, including password hashing and proper session management, to protect user data and maintain application integrity.",
            link: "https://github.com/Opeyemi-Esan",
            technology: ".Net 8"
        },
        {
            title: "E-Commerce Website",
            description: "Developed a scalable e-commerce platform using ASP.NET Core and SQL, featuring secure user authentication, product management, and payment processing. Built RESTful APIs to handle product listings, order management, and integrated payment gateways. Focused on performance optimization to ensure a smooth and reliable shopping experience for users.",
            link: "https://github.com/Opeyemi-Esan",
            technology: ".Net 8"
        }
    ]

    const handleLink = (url) => {
        window.open(url, '_blank');
    };

  return (
    <div id='projects'
    className="py-20 relative min-h-screen flex justify-center items-center  
        bg-[url('https://thumbs.dreamstime.com/b/skilled-front-end-developer-optimizing-websites-modern-coding-standards-professional-space-generated-ai-352206618.jpg?w=992')] bg-cover bg-center">x
        <div className="absolute inset-0 bg-black/92 backdrop-blur-xl"></div>
        <div className='z-10  flex flex-col gap-10'>
            <h1 className='text-3xl md:text-4xl font-bold gradient-text pb-6  text-center'>My Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {myProjects.map((project, index)=>(
                    <div key={index}
                    onClick={()=>handleLink(project.link)} 
                    className='bg-blue-500/10 rounded-xl flex flex-col gap-4 justify-center items-center py-8 px-4 md:px-10 hover:bg-blue-500/20 hover:translate-y-1 max-w-xl md:min-h-80 cursor-pointer transition-all duration-300'>
                        <h1 className='font-bold text-xl text-center text-gray-300'>{project.title}</h1>
                        <h3 className='font-bold text-lg text-blue-500 italic'>{project.technology}</h3>
                        <p className='text-gray-300 text-center'>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}
