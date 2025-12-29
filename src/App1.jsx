import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Server } from 'lucide-react';
import ProfilePng from './assets/profile.png'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = ['About', 'Experience', 'Projects', 'Resume', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700 shadow-lg shadow-cyan-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 transition-all duration-300">
            Harshit Balodi
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fadeIn">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all duration-300"
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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fadeIn">
          <div className="relative inline-block mb-6">
            <img 
              src={ProfilePng} 
              alt="Harshit Balodi"
              className='w-32 h-32 mx-auto rounded-full border-4 border-cyan-400/30 shadow-xl shadow-cyan-500/20 hover:border-cyan-400 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105'
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 animate-spin-slow"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slideUp">
            Harshit <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Balodi</span>
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-400 mb-6 animate-slideUp delay-200">
            Full Stack Developer
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed animate-slideUp delay-300">
            Crafting robust web applications with MERN, Angular, and Python. Passionate about building scalable solutions and beautiful user experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slideUp delay-400">
            <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105">
              Get In Touch
            </a>
            <a href="#projects" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              View Work
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-12 animate-slideUp delay-500">
          <a href="https://github.com/harshitbalodi" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/harshit-balodi" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform">
            <Linkedin size={28} />
          </a>
          <a href="mailto:balodiharshit1907@gmail.com" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform">
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
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a passionate full stack developer with 5+ years of experience building web applications. I specialize in creating efficient, scalable, and user-friendly solutions that solve real-world problems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My expertise spans across modern JavaScript frameworks, backend development with Python and Node.js, and working with both SQL and NoSQL databases. I love learning new technologies and staying up-to-date with industry trends.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring new hiking trails.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((category) => (
              <div 
                key={category.name} 
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500/20 hover:text-cyan-400 hover:border hover:border-cyan-500/50 transition-all duration-300 cursor-default"
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
}

function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      location: 'Remote',
      description: 'Leading the development of enterprise-level web applications and microservices.',
      achievements: [
        'Led development of microservices architecture serving 100K+ daily users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Improved application performance by 45% through optimization'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2019 - 2021',
      location: 'Hybrid',
      description: 'Developed and maintained multiple client-facing web applications.',
      achievements: [
        'Built responsive web applications using React and Angular',
        'Developed RESTful APIs with Node.js and Python',
        'Optimized database queries improving performance by 40%',
        'Collaborated with UX team to implement modern design patterns'
      ],
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Redis', 'Git']
    },
    {
      title: 'Junior Full Stack Developer',
      company: 'StartUp Ventures',
      period: '2017 - 2019',
      location: 'On-site',
      description: 'Worked on various projects focusing on full-stack development.',
      achievements: [
        'Developed features for e-commerce platform',
        'Implemented user authentication and authorization systems',
        'Created automated testing suites increasing code coverage to 85%',
        'Participated in agile development processes'
      ],
      technologies: ['React', 'Express', 'MySQL', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50 z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
                    <div className="flex items-start justify-between mb-3">
                      <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                        <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-white font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="text-slate-400 text-sm">{exp.period} • {exp.location}</p>
                      <p className="text-slate-300 italic">{exp.description}</p>
                    </div>
                    
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start">
                          <span className={`text-cyan-400 mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}>•</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-xs border border-slate-600 hover:border-cyan-500/50 hover:bg-slate-600 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for timeline */}
                <div className="hidden md:block w-5/12"></div>
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 group"
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
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-cyan-500/50 hover:bg-slate-600 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="flex items-center text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    className="flex items-center text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
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

  const certifications = [
    'AWS Certified Solutions Architect',
    'MongoDB Certified Developer',
    'Google Cloud Professional'
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Resume</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 mr-3 rounded-full"></div>
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="border-l-2 border-slate-700 pl-6 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <h4 className="text-xl font-semibold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-slate-300 mb-1 font-medium">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-cyan-400 mr-2">▸</span>
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
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 mr-3 rounded-full"></div>
              Education
            </h3>
            <div className="space-y-8 mb-12">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="border-l-2 border-slate-700 pl-6 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <h4 className="text-xl font-semibold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-300 mb-1 font-medium">{edu.school}</p>
                  <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                  <p className="text-slate-300 text-sm">{edu.details}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 mr-3 rounded-full"></div>
              Certifications
            </h3>
            <div className="space-y-3 mb-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <p className="text-slate-300 text-sm flex items-center">
                    <span className="text-cyan-400 mr-2">✓</span>
                    {cert}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <span>balodiharshit1907@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                  <Github className="text-cyan-400" size={24} />
                </div>
                <a href="https://github.com/harshit-balodi" target="_blank" className="hover:text-cyan-400 transition-colors">github.com/harshitbalodi</a>
              </div>
              <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                  <Linkedin className="text-cyan-400" size={24} />
                </div>
                <a href="https://linkedin.com/in/harshit-balodi" target="_blank" className="hover:text-cyan-400 transition-colors">linkedin.com/in/harshit-balodi</a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2 font-medium" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                Send Message
              </button>
              {status && (
                <p className="text-green-400 text-center font-medium animate-fadeIn">{status}</p>
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
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400">
            © 2025 Harshit Balodi. Built with React and Tailwind CSS.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/harshitbalodi" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/harshit-balodi" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="mailto:balodiharshit1907@gmail.com" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-slate-500 text-sm">
            Designed & Developed with <span className="text-cyan-400">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;