import { useState } from 'react';
import {
  Github,
  ExternalLink,
  Lock,
  Users,
  FileSearch,
  Zap,
  Network,
  Database,
  Upload,
  Mic,
  BookOpen,
} from 'lucide-react';

/* ----------------------------- Featured Systems -----------------------------
 * Enterprise systems I designed & shipped at Technip Energies.
 * Code/live access is restricted (internal-only), so these are presented as
 * system-design case studies: problem → architecture → impact.
 *
 * NOTE on structure:
 *   - TenGPT is the umbrella enterprise AI platform.
 *   - Document Upload, Teams Transcripts, and Business 360 RAG are
 *     features built INSIDE TenGPT (rendered as sub-modules).
 *   - MDRB Review By AI is a separate standalone product.
 * -------------------------------------------------------------------------- */
const featuredSystems = [
  {
    id: 'tengpt',
    name: 'TenGPT',
    tagline: 'Enterprise AI chat platform — and the home of multiple AI features I built',
    icon: Users,
    accent: 'from-violet-500 to-fuchsia-500',
    problem:
      'A global workforce needed one governed interface to use multiple LLMs and query enterprise knowledge — without leaking data to public chatbots. Beyond chat, users needed deeper features: ingest their own documents, mine meeting history, and ask policy questions with citations.',
    architecture: [
      'Angular SPA ↔ FastAPI gateway with JWT + SSO (Azure AD)',
      'Intelligent router selecting between GPT-4o, Mistral, and Bing Agent per intent',
      'Microservices per feature (chat, ingestion, transcripts, RAG) — independently deployable',
      'Cosmos DB for chat history, feature flags, and rate-limit buckets; Azure Storage for blobs',
    ],
    stack: ['Angular', 'FastAPI', 'Microservices', 'Azure AD', 'GPT-4o', 'Cosmos DB'],
    impact: [
      { n: '16,000+', l: 'Users onboarded' },
      { n: '2,000+', l: 'Daily active users' },
      { n: '3', l: 'LLM backends unified' },
    ],
    // Sub-features that live inside TenGPT
    features: [
      {
        id: 'doc-upload',
        name: 'Document Upload',
        icon: Upload,
        accent: 'from-violet-500 to-fuchsia-500',
        oneLiner:
          'Bring-your-own-document chat — upload PDFs, DOCX, PPTX, images and chat with their contents.',
        architecture: [
          'Async ingestion via Azure Functions — decouples upload from heavy parsing',
          'Microservice pipeline: extractor → chunker → embedder → vector index',
          'Layout-aware text + image extraction (incl. OCR for scanned pages)',
          'Per-user vector namespace so context never leaks across users',
          'Status events streamed back to UI so users see progress in real time',
        ],
        stack: ['Azure Functions', 'Microservices', 'Vector Search', 'Doc Intelligence', 'Async'],
      },
      {
        id: 'teams-transcripts',
        name: 'Teams Transcripts',
        icon: Mic,
        accent: 'from-fuchsia-500 to-amber-400',
        oneLiner:
          'Search and summarize up to 60 days of MS Teams meeting history — auto-extract action items, owners, and key decisions.',
        architecture: [
          'Pulls transcripts via Microsoft Graph API on a rolling 60-day window',
          'LLM summarization with structured output (decisions, action items, owners)',
          'Semantic search over historical meetings — "what did we decide about X?"',
          'Result cards link back to the original Teams meeting for traceability',
        ],
        stack: ['MS Graph API', 'LLM Summarization', 'FastAPI', 'Vector Search'],
      },
      {
        id: 'b360',
        name: 'Business 360 RAG',
        icon: BookOpen,
        accent: 'from-amber-400 to-violet-500',
        oneLiner:
          'Citation-first RAG over 7,000+ enterprise policy & process documents.',
        architecture: [
          'Chunking pipeline preserving section hierarchy (title → subsection → clause)',
          'Vector embeddings with hierarchical relevance re-ranking',
          'Every answer cites source clauses — no claim without a reference',
          'Feedback loop: thumbs-down signals recycled into eval set & re-ranker tuning',
        ],
        stack: ['RAG', 'Vector Search', 'Hierarchical Re-ranking', 'Python', 'Azure'],
      },
    ],
  },
  {
    id: 'mdrb',
    name: 'MDRB Review By AI',
    tagline: 'AI-assisted material document review (standalone product)',
    icon: FileSearch,
    accent: 'from-fuchsia-500 to-amber-400',
    problem:
      'Specialist inspectors were manually reviewing material document packages — a 7–14 day turnaround that bottlenecked engineering procurement.',
    architecture: [
      'PDF/DOCX ingestion → Azure Document Intelligence for layout-aware parsing',
      'Rule engine + LLM critic cross-checking specs against supplier submittals',
      'Reviewer console surfaces findings with page-level evidence & confidence',
      'Human-in-the-loop approvals feed back into prompt + rule refinement',
    ],
    stack: ['Python', 'FastAPI', 'Azure Doc Intelligence', 'LLM', 'Angular'],
    impact: [
      { n: '40+', l: 'Inspectors served' },
      { n: '7–14 → 1–2', l: 'Days per review' },
      { n: 'Sole', l: 'Full-stack dev' },
    ],
  },
];

/* ----------------------------- Personal Projects ---------------------------- */
const personalProjects = [
  {
    title: 'Library Seat Booking App',
    description:
      'A platform to digitize local libraries — online seat booking by shift and hall, with an admin dashboard featuring drag-and-drop layout and subscription management. Reduced manual booking time by 85%.',
    tech: ['React.js', 'Redux', 'Vercel'],
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop',
    github: 'https://github.com/harshitbalodi',
    live: 'https://library-client-dun.vercel.app/',
  },
  {
    title: 'Bloglist App',
    description:
      'Full-stack blogging app with CRUD, commenting, JWT auth, and bcrypt hashing. Achieved 95% test coverage with Jest (unit) and Cypress (integration & e2e).',
    tech: ['React.js', 'Redux Toolkit', 'Express.js', 'MongoDB', 'JWT'],
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    github: 'https://github.com/harshitbalodi',
    live: 'https://blog-repository-zeta.vercel.app/',
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState(featuredSystems[0].id);
  const active = featuredSystems.find((s) => s.id === activeId);
  const ActiveIcon = active.icon;

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-3 rounded-full"></div>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Shipped systems and side projects — where the fun is always in the system design.
        </p>

        {/* ---------------- Featured Systems (case-study tabs) ---------------- */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Network size={22} className="text-violet-300" />
                Featured Systems
              </h3>
              <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                <Lock size={14} /> Internal-only products — presented as system-design case studies.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {featuredSystems.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? `bg-gradient-to-r ${s.accent} text-white border-transparent shadow-lg shadow-violet-500/30`
                      : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-violet-500/50 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  {s.name}
                </button>
              );
            })}
          </div>

          {/* Active case study */}
          <div
            key={active.id}
            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl shadow-violet-500/5 animate-fadeIn"
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${active.accent} flex items-center justify-center shadow-lg shrink-0`}
              >
                <ActiveIcon size={22} className="text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">{active.name}</h4>
                <p className="text-violet-200 text-sm">{active.tagline}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2 flex items-center gap-2">
                  <Zap size={14} /> The Problem
                </p>
                <p className="text-slate-300 leading-relaxed text-[15px]">{active.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-fuchsia-300 font-semibold mb-2 flex items-center gap-2">
                  <Database size={14} /> Architecture
                </p>
                <ul className="space-y-2">
                  {active.architecture.map((a, i) => (
                    <li key={i} className="text-slate-300 text-sm flex gap-2 leading-relaxed">
                      <span className="text-violet-300 mt-1 flex-shrink-0">▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {active.stack.map((t) => (
                <span
                  key={t}
                  className="bg-slate-700/70 text-violet-200 px-3 py-1 rounded-full text-xs border border-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-700">
              {active.impact.map((m) => (
                <div key={m.l} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-amber-300">
                    {m.n}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{m.l}</div>
                </div>
              ))}
            </div>

            {/* Nested features (only for TenGPT umbrella) */}
            {active.features && active.features.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-xs uppercase tracking-wider text-violet-300 font-semibold mb-4 flex items-center gap-2">
                  <Network size={14} /> Features I built inside {active.name}
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {active.features.map((f) => {
                    const FIcon = f.icon;
                    return (
                      <div
                        key={f.id}
                        className="bg-slate-900/60 border border-slate-700 rounded-xl p-4 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${f.accent} flex items-center justify-center shrink-0`}
                          >
                            <FIcon size={16} className="text-white" />
                          </div>
                          <h5 className="text-white font-semibold group-hover:text-violet-200 transition-colors">
                            {f.name}
                          </h5>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed mb-3">
                          {f.oneLiner}
                        </p>
                        <ul className="space-y-1.5 mb-3">
                          {f.architecture.map((a, i) => (
                            <li key={i} className="text-slate-300 text-xs flex gap-2 leading-relaxed">
                              <span className="text-violet-300 flex-shrink-0">▸</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1">
                          {f.stack.map((t) => (
                            <span
                              key={t}
                              className="bg-slate-800 text-violet-300 px-2 py-0.5 rounded text-[10px] border border-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ---------------- Personal / Public Projects ---------------- */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Open Source &amp; Side Projects</h3>
          <p className="text-slate-400 text-sm mb-6">
            Fully accessible — browse the code, run the live app.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20 hover:scale-[1.02] group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-700 text-violet-200 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-violet-500/50 hover:bg-slate-600 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-slate-300 hover:text-violet-300 transition-all duration-300 hover:scale-110"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-slate-300 hover:text-violet-300 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
