import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Harshit Balodi. Built with React and Tailwind CSS.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/harshitbalodi"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/harshit-balodi"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:balodiharshit1907@gmail.com"
              className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-slate-500 text-sm">
            Designed &amp; Developed with <span className="text-violet-300">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
