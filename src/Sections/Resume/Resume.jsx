const experiences = [
  {
    title: 'Senior Executive — AI Full Stack Engineer',
    company: 'Technip Energies',
    period: 'Oct 2024 – Present',
    points: [
      'Key developer on TenGPT enterprise AI chat platform (Angular, FastAPI, Azure) — scaled to 16,000+ users.',
      'Inside TenGPT: built Document Upload as an async microservice pipeline on Azure Functions with vector embeddings.',
      'Inside TenGPT: built Teams Transcripts (MS Graph API + LLM) and Business 360 RAG over 7,000+ policy docs.',
      'Sole full-stack dev for MDRB Review By AI (standalone) — projected to cut review time from 7–14 days to 1–2 days.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'CognoTools',
    period: 'Aug 2024 – Oct 2024',
    points: [
      'Built React.js / Next.js company website with SEO best practices and responsive design.',
      'Developed AI-powered voice assistant (Python Flask) deployed on Azure VM with Nginx and SSL.',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Maharaja Surajmal Institute of Technology',
    period: '2021 – 2024',
    details: '8.9 CGPA · Delhi, India',
  },
];

const achievements = [
  '700+ coding challenges solved on LeetCode',
  'Promoted to Senior Executive within 1 year at Technip Energies',
  '95% test coverage on personal full-stack projects (Jest + Cypress)',
];

const RESUME_FILE_ID = '1AlY8FW1qvozGTk-IKa2N-Owv9oI8EqM3';
const RESUME_DRIVE_FOLDER_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=sharing`;
const RESUME_EMBED_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Resume</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-12 rounded-full"></div>

        {/* Resume Preview (Google Drive folder) */}
        <div className="mb-12 bg-slate-900/60 rounded-xl border border-slate-700 hover:border-violet-500/50 transition-all duration-300 shadow-lg shadow-violet-500/5 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700 bg-slate-800/60">
            <p className="text-slate-300 text-sm">
              <span className="text-violet-300 font-semibold">Live Resume</span> — synced from Google Drive
            </p>
            <a
              href={RESUME_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
            >
              Open in Google Drive ↗
            </a>
          </div>
          <iframe
            src={RESUME_EMBED_URL}
            title="Harshit Balodi — Resume (Google Drive)"
            className="w-full h-[760px] bg-white"
            loading="lazy"
            allow="autoplay"
          />
          <p className="px-5 py-3 text-xs text-slate-500 border-t border-slate-700">
            Preview powered by Google Drive · always shows the latest version.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500 mr-3 rounded-full"></div>
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-slate-700 pl-6 hover:border-violet-500 transition-all duration-300 group"
                >
                  <h4 className="text-xl font-semibold text-violet-300 mb-1 group-hover:text-violet-200 transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-slate-300 mb-1 font-medium">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-violet-300 mr-2">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500 mr-3 rounded-full"></div>
              Education
            </h3>
            <div className="space-y-8 mb-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-slate-700 pl-6 hover:border-violet-500 transition-all duration-300 group"
                >
                  <h4 className="text-xl font-semibold text-violet-300 mb-1 group-hover:text-violet-200 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-300 mb-1 font-medium">{edu.school}</p>
                  <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                  <p className="text-slate-300 text-sm">{edu.details}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500 mr-3 rounded-full"></div>
              Highlights
            </h3>
            <div className="space-y-3 mb-8">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
                >
                  <p className="text-slate-300 text-sm flex items-center">
                    <span className="text-violet-300 mr-2">✓</span>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={RESUME_DRIVE_FOLDER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
              >
                View Resume on Google Drive ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
