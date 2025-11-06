import Rentora from '../assets/Rentora.png';
import Kentan from "../assets/Kentan.png";
import Mayflower from "../assets/Mayflower.png";
import Finora from "../assets/Finora.png"

export default function Projects() {
  const myProjects = [
    {
      title: "Rentora",
      description: "A modern property management platform that connects landlords and tenants through a sleek, data-driven dashboard. Enables rent tracking, tenant management, and automated payment reminders — built for efficiency and user experience.",
      link: "https://rentora-hy3hsbh2s-prince-nabanjis-projects.vercel.app/",
      github: "https://github.com/Nabanji/Rentora",
      image: Rentora,
      technologies: ["React", "Typescript", "TailwindCSS", "Supabase"]
    },
    {
      title: "FarmIT",
      description:        
        "An intelligent farm management system that helps farmers monitor crops, livestock, and field activities. Integrates Google Earth Engine for geospatial insights and Firebase for real-time data tracking — empowering smarter, more sustainable farming.",
      link: "https://farmit.co.ke/",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      technologies: [
        "Flutter",
        "Flutterflow",
        "Dart",
        "Google Earth Engine",
        "Heroku",
        "Firebase",
        "Firestore",
      ],
    },
    {
      title: "Kentan Safaris",
      description: "A full-featured travel agency website designed to showcase tours, destinations, and services. Includes dynamic data visualization dashboards for tracking bookings and user engagement using ChartJS and a robust Node.js–MySQL backend.",
      github: "https://github.com/Nabanji/Kentan-Safaris",
      image: Kentan,
      technologies: ["React", "Node.js", "Express", "MySQL", "ChartJS"],
    },
    {
      title: "Finora",
      description: "A cross-platform financial management mobile app that helps users manage budgets, track expenses, and visualize spending habits. Built with React Native and PostgreSQL for scalability, and secured using Clerk authentication.",
      github: "https://github.com/Nabanji/Finance-Tracker",
      image: Finora,
      technologies: [
        "React Native",
        "Node.js",
        "Express",
        "Clerk",
        "PostgreSQL",
        "Render",
      ],
    },
    {
      title: "EasyHire",
      description: "A responsive job portal connecting employers and job seekers through an intuitive interface. Features role-based authentication, job posting, and application management powered by a Node.js–Express backend and MySQL database.",
      github: "https://github.com/Nabanji/EasyHire",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      technologies: ["React", "Node.js", "Express", "MySQL", "Bootstrap"],
    },
    {
      title: "Mayflower Official Website",
      description:
        "A polished corporate website for Mayflower, highlighting their brand, services, and portfolio. Focused on performance, responsive design, and an elegant user experience built with React and Bootstrap.",
      link: "https://mayflower-rose.vercel.app/",
      github: "",
      image: Mayflower,
      technologies: ["React", "Bootstrap", "HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <div
              key={index}
              className="group border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] hover:-translate-y-1 cursor-pointer"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/images/placeholder.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                    >
                      Live Demo →
                    </a>
                  )} 
                  {/* <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                  >
                    Live Demo →
                  </a> */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
