export default function Projects() {

  const myProjects = [
    {
      title: "FarmIT",
      description: "A comprehensive farm management system for tracking crops, livestock, and farm activities.",
      link: "https://farmit.co.ke/",
      technologies: ["Flutter", "Flutterflow", "Dart", "Google Earth Engine", "Heroku", "Firebase", "Firestore"]
    },
    {
      title: "Kentan Safaris",
      description: "A travel agency website showcasing tours and services.",
      link: "https://github.com/Nabanji/Kentan-Safaris",
      technologies: ["React", "Node.js", "Express", "MySQL", "ChartJS"]
    }, 
    {
      title: "Finora",
      description: "A financial management app for personal budgeting.",
      link: "https://github.com/Nabanji/Finance-Tracker",
      technologies: ["React Native", "Node.js", "Express", "MongoDB", "Clerk", "PostgreSQL", "Render"]
    },
    {
      title: "EasyHire",
      description: "A job portal connecting employers and job seekers.",
      link: "https://github.com/Nabanji/EasyHire",
      technologies: ["React", "Node.js", "Express", "MySQL", "Bootstrap"]
    },
    {
      title: "Mayflower Official Website",
      description: "The official website for Mayflower, showcasing their services and portfolio.",
      link: "https://mayflower-rose.vercel.app/",
      technologies: ["React", "Bootstrap", "HTML", "CSS", "Javascript"]
    }
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myProjects.map((project, index) => (
            <div key={index} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] px-3 transition-all">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p  className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {
                project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] px-3 transition"
                  >
                    {tech}
                  </span>
                ))
              }
            </div>
            <div className="flex justify-between items-center">
              <a href={project.link} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
