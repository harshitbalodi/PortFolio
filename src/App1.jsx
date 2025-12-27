import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Server } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = ['About', 'Projects', 'Resume', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            JD
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-6">
            JD
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            John Doe
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-400 mb-6">
            Full Stack Developer
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Crafting robust web applications with MERN, Angular, and Python. Passionate about building scalable solutions and beautiful user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </a>
            <a href="#projects" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Work
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-12">
          <a href="https://github.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:john@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  const skills = [
    { name: 'Frontend', items: ['React', 'Angular', 'TypeScript', 'Tailwind CSS'], icon: Code },
    { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI'], icon: Server },
    { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'], icon: Database },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 text-lg mb-6">
              I'm a passionate full stack developer with 5+ years of experience building web applications. I specialize in creating efficient, scalable, and user-friendly solutions that solve real-world problems.
            </p>
            <p className="text-slate-300 text-lg mb-6">
              My expertise spans across modern JavaScript frameworks, backend development with Python and Node.js, and working with both SQL and NoSQL databases. I love learning new technologies and staying up-to-date with industry trends.
            </p>
            <p className="text-slate-300 text-lg">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring new hiking trails.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((category) => (
              <div key={category.name} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center mb-4">
                  <category.icon className="text-cyan-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
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
}

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['Angular', 'Python', 'PostgreSQL', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.',
      tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with 7-day forecasts, location-based services, and interactive maps.',
      tech: ['React', 'Python', 'FastAPI', 'Redis'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Projects</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition-colors">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      points: [
        'Led development of microservices architecture serving 100K+ daily users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2019 - 2021',
      points: [
        'Built responsive web applications using React and Angular',
        'Developed RESTful APIs with Node.js and Python',
        'Optimized database queries improving performance by 40%'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      details: 'GPA: 3.8/4.0, Dean\'s List'
    }
  ];

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Resume</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-cyan-500 mr-3"></div>
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-slate-700 pl-6">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-1">{exp.title}</h4>
                  <p className="text-slate-300 mb-1">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-300 text-sm">• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-cyan-500 mr-3"></div>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-slate-700 pl-6">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-1">{edu.degree}</h4>
                  <p className="text-slate-300 mb-1">{edu.school}</p>
                  <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                  <p className="text-slate-300 text-sm">{edu.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="/resume.pdf"
                className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-slate-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <Mail className="text-cyan-400 mr-3" size={24} />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Github className="text-cyan-400 mr-3" size={24} />
                <a href="https://github.com" className="hover:text-cyan-400 transition-colors">github.com/johndoe</a>
              </div>
              <div className="flex items-center text-slate-300">
                <Linkedin className="text-cyan-400 mr-3" size={24} />
                <a href="https://linkedin.com" className="hover:text-cyan-400 transition-colors">linkedin.com/in/johndoe</a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
              {status && (
                <p className="text-green-400 text-center">{status}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400">
          © 2024 John Doe. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default App;