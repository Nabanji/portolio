export default function About() {

  const frontendSkills = [
    "React",
    "React Native",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Bootstrap"
  ]

  const backendSkills = [
    "Python",
    "MongoDB",
    "NodeJS",
    "MySQL",
    "Render"
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

        <div className="glass rounded-xl p-8 border-white/10 border hoverL-translate-y-1 transition">
          <p className="text-gray-300 mb3-6">
            Passionate developer with expertise in building scalable web applications and creating innovative solutions. Proficient in JavaScript, React, and Node.js.
          </p>

          <div className="grid grid-cols-1m md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hver:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                    {skill}
                  </span>
                  ))
                }
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hver:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                    {skill}
                  </span>
                  ))
                }
              </div>
            </div>
          </div>        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-trnaslate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc text-gray-300 list-inside space-y-2">
              <li>
                <strong>Bachelor of Science in Software Engineering</strong> - Cooperative University of Kenya (2021 - 2025)
              </li>
              <li>
                Relevant Coursework: Data Structures, Web Development, Database Management
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-trnaslate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">Software Engineer at FarmIT (2024-2025)</h4>
                <p>Designed and Developed the FarmIT app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
