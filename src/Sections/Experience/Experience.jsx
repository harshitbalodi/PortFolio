const experiences = [
  {
    title: 'Senior Executive — AI Full Stack Engineer',
    company: 'Technip Energies',
    companyUrl: 'https://www.technipenergies.com',
    period: 'Oct 2024 – Present',
    location: 'Noida, India',
    description:
      'Building production-grade AI products end-to-end — LLM chat platforms, RAG systems, and intelligent document processing for enterprise scale.',
    achievements: [
      'TenGPT — Key developer on the enterprise AI chat platform (Angular, FastAPI, Azure) supporting GPT-4o, Mistral, and Bing Agent with intelligent query routing; scaled to 16,000+ users with 2,000+ daily active users after feature launches.',
      'Inside TenGPT — designed the Document Upload feature: an async microservice pipeline on Azure Functions (PDF, DOCX, PPTX, images) doing layout-aware extraction, vector embeddings, and per-user namespacing for semantic chat over user files.',
      'Inside TenGPT — built the Teams Transcripts feature to search and summarize up to 60 days of meeting history via Microsoft Graph API, auto-extracting action items, owners, and decisions with LLM summarization.',
      'Inside TenGPT — developed the Business 360 RAG feature over 7,000+ policy documents with hierarchical relevance re-ranking and citation-first answers; led cross-team UAT resolution and code quality.',
      'MDRB Review By AI — Sole full-stack developer of a standalone AI tool automating material document review for 40+ specialist inspectors, projected to cut review time from 7–14 days to 1–2 days.',
      'Promoted from Graduate Engineer Trainee to Senior Executive within 1 year for cross-functional ownership across multiple production AI systems.',
    ],
    technologies: ['Python', 'Angular', 'FastAPI', 'Azure Functions', 'Microservices', 'GPT-4o', 'RAG', 'Vector Search', 'Cosmos DB'],
  },
  {
    title: 'Full Stack Developer',
    company: 'CognoTools',
    companyUrl: 'https://cognotools.dev/',
    period: 'Aug 2024 – Oct 2024',
    location: 'Remote — Bangalore, India',
    description:
      'Built marketing site and an AI voice assistant for an enterprise client; deployed on Azure with Nginx and SSL.',
    achievements: [
      'Developed company website (React.js, Next.js) with SEO best practices and responsive design, contributing to measurable gains in performance and organic traffic.',
      'Built an AI-powered voice assistant for an enterprise client using Python Flask, deployed on Azure VM with Nginx and SSL.',
    ],
    technologies: ['React.js', 'Next.js', 'Python', 'Flask', 'Azure VM', 'Nginx'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-12 rounded-full"></div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-amber-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-lg shadow-violet-500/50 z-10"></div>

                <div className="w-full md:w-5/12">
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 group text-left">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-violet-300 group-hover:text-violet-200 transition-colors">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white font-medium hover:text-violet-300 transition-colors"
                      >
                        {exp.company}
                      </a>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-slate-400 text-sm">
                        <span className="inline-block bg-slate-700/60 text-violet-200 px-2 py-0.5 rounded mr-2">
                          {exp.period}
                        </span>
                        <span>{exp.location}</span>
                      </p>
                      <p className="text-slate-300 italic">{exp.description}</p>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start leading-relaxed">
                          <span className="text-violet-300 mr-2 mt-1 flex-shrink-0">▸</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-700 text-violet-300 px-3 py-1 rounded-full text-xs border border-slate-600 hover:border-violet-500/50 hover:bg-slate-600 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
