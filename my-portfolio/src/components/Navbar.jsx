import { useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Navbar({ menuOpen, setMenuOpen }) {
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.3)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            nabanji 
            <span className="text-blue-500">.tech</span>
          </a>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#x2630;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://github.com/Nabanji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-400 transition-transform transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prince-nabanji-833538282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-400 transition-transform transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
