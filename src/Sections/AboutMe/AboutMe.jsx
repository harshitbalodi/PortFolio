import { Code, Database, Server, Cloud } from 'lucide-react';

const skills = [
  {
    name: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'FastAPI', 'Flask', 'Angular', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Redux'],
    icon: Code,
  },
  {
    name: 'AI & Cloud',
    items: ['LLM Integration', 'RAG', 'Prompt Engineering', 'Vector Search', 'Azure Document Intelligence', 'Azure Functions', 'CI/CD', 'Git'],
    icon: Cloud,
  },
  {
    name: 'Tools & Testing',
    items: ['Jest', 'Cypress', 'SonarQube', 'Snyk', 'Figma', 'HTML5', 'CSS3'],
    icon: Server,
  },
  {
    name: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Cosmos DB'],
    icon: Database,
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm an <span className="text-violet-300 font-semibold">AI Full Stack Engineer</span> with 1+ year of experience
              delivering production-grade AI applications — from LLM chat platforms and RAG pipelines to intelligent
              document processing systems used by thousands of enterprise users.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I work end-to-end across frontend, backend, and cloud — primarily with{' '}
              <span className="text-violet-300 font-semibold">Python, Angular, FastAPI and Azure</span>. At Technip
              Energies I was promoted from Graduate Engineer Trainee to Senior Executive within a year for
              cross-functional ownership of multiple production AI systems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not shipping AI features, I sharpen my problem-solving — with{' '}
              <span className="text-violet-300 font-semibold">700+ coding challenges</span> solved on LeetCode.
            </p>

            {/* Beyond code — personal */}
            <div className="mt-8 bg-gradient-to-br from-slate-800/60 to-slate-800/20 border border-slate-700 rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center gap-2">
                <span>✦</span> Beyond the code
              </h3>
              <ul className="space-y-2.5 text-slate-300 text-[15px] leading-relaxed">
                <li className="flex gap-3">
                  <span aria-hidden="true">📖</span>
                  <span>
                    In a world of infinite scroll, I still keep a stack of{' '}
                    <span className="text-violet-300">physical books</span> on my desk —
                    paper feels like a deliberate act of attention.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true">🌀</span>
                  <span>
                    A self-confessed{' '}
                    <span className="text-fuchsia-300">Wikipedia &amp; history rabbit-hole</span>{' '}
                    addict — one tab inevitably becomes thirty.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true">🎶</span>
                  <span>
                    Indie tracks &amp; folk wisdom on loop — especially the{' '}
                    <span className="text-amber-300">dohas of Kabir</span>, which somehow read
                    like the cleanest debug logs of life.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((category) => (
              <div
                key={category.name}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <category.icon
                    className="text-violet-300 mr-3 group-hover:scale-110 transition-transform duration-300"
                    size={24}
                  />
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm hover:bg-violet-500/20 hover:text-violet-300 hover:border hover:border-violet-500/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
