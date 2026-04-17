import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import ProfilePng from '../../assets/profile.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      {/* Animated grid backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(rgba(167,139,250,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      ></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="my-8 animate-fadeIn">
          {/* Modern profile frame — rotated rounded square + gradient border */}
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 rounded-[2rem] blur-md opacity-70 animate-pulse"></div>
            <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-[2rem] overflow-hidden border-2 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img
                src={ProfilePng}
                alt="Harshit Balodi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating tech badges */}
            <span className="hidden sm:flex absolute -top-3 -right-6 bg-slate-800/90 border border-violet-500/40 text-violet-200 text-xs px-2.5 py-1 rounded-full backdrop-blur-sm shadow-lg shadow-violet-500/20">
              🧠 LLMs
            </span>
            <span className="hidden sm:flex absolute -bottom-2 -left-8 bg-slate-800/90 border border-fuchsia-500/40 text-fuchsia-200 text-xs px-2.5 py-1 rounded-full backdrop-blur-sm shadow-lg shadow-fuchsia-500/20">
              ⚡ FastAPI
            </span>
            <span className="hidden sm:flex absolute top-1/2 -right-14 bg-slate-800/90 border border-amber-400/40 text-amber-200 text-xs px-2.5 py-1 rounded-full backdrop-blur-sm shadow-lg">
              ☁️ Azure
            </span>
            <span className="hidden sm:flex absolute -top-3 -left-6 bg-slate-800/90 border border-amber-400/40 text-amber-200 text-xs px-2.5 py-1 rounded-full backdrop-blur-sm shadow-lg">
              ⚛️ React
            </span>
            <span className="hidden sm:flex absolute -bottom-2 -right-14 bg-slate-800/90 border border-amber-400/40 text-amber-200 text-xs px-2.5 py-1 rounded-full backdrop-blur-sm shadow-lg">
              🗄️ Database
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slideUp tracking-tight">
            Harshit{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-amber-400">
              Balodi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4 animate-slideUp delay-200">
            I architect{' '}
            <span className="text-violet-300 font-semibold">AI systems</span> that scale from{' '}
            <span className="text-fuchsia-300 font-semibold">prototype</span> to{' '}
            <span className="text-amber-300 font-semibold">production</span>.
          </p>
          <div className="flex justify-center mb-6 animate-slideUp delay-200">
            <span className="inline-flex items-center gap-2 bg-slate-800/60 border border-violet-500/30 text-slate-200 text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Currently shipping AI products @ Technip Energies
            </span>
          </div>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed animate-slideUp delay-300">
            Full-stack engineer focused on{' '}
            <span className="text-violet-300">LLM chat platforms</span>,{' '}
            <span className="text-fuchsia-300">RAG pipelines</span>, and{' '}
            <span className="text-amber-300">intelligent document processing</span> — designed for
            real-world enterprise scale, not just demos. Python · Angular/React · FastAPI · Azure · Node · Microservices.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slideUp delay-400">
            <a
              href="#contact"
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-violet-500 text-violet-200 hover:bg-violet-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Work
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 border-2 border-amber-400/70 text-amber-200 hover:bg-amber-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <FileText size={18} /> View Resume
            </a>
          </div>

          {/* By the numbers strip */}
          {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slideUp delay-500">
            {
            [
              { n: '16,000+', l: 'Platform Users' },
              { n: '7,000+', l: 'Docs in RAG' },
              { n: '700+', l: 'LeetCode Solved' },
              { n: '1 yr', l: 'To Promotion' },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-slate-800/40 border border-slate-700 rounded-lg px-3 py-3 backdrop-blur-sm hover:border-violet-500/50 transition-colors"
              >
                <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-amber-300">
                  {s.n}
                </div>
                <div className="text-xs text-slate-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex justify-center space-x-6 mt-12 animate-slideUp delay-500">
          <a
            href="https://github.com/harshitbalodi"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:scale-110 transform"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/harshit-balodi"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:scale-110 transform"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:balodiharshit1907@gmail.com"
            className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:scale-110 transform"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
