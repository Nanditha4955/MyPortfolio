import React, { useState } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  FileText,
  Code2,
  Database,
  Terminal,
  Cpu,
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  ChevronRight,
  ArrowUp,
  Layers,
  Wrench,
  CheckCircle2,
  FolderGit2,
  BookOpen,
  Eye
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [projectTab, setProjectTab] = useState('all'); // 'all' | 'personal' | 'academic'
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const skillGroups = [
    {
      category: 'Frontend & UI Engineering',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      skills: ['React JS', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3 / SASS', 'Figma (UI/UX)', 'Responsive Web Design']
    },
    {
      category: 'Backend Architecture & APIs',
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      skills: ['Node JS', 'Express JS', 'PHP', 'RESTful APIs', 'Firebase', 'Role-Based Access Control']
    },
    {
      category: 'Databases & Query Optimization',
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Queries', 'DBMS Schemas', 'MySQL Workbench']
    },
    {
      category: 'Programming Languages',
      icon: <Code2 className="w-5 h-5 text-teal-400" />,
      skills: ['JavaScript', 'Java', 'Python', 'PHP', 'C']
    },
    {
      category: 'Developer Tools & Platforms',
      icon: <Terminal className="w-5 h-5 text-violet-400" />,
      skills: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Apache', 'Postman', 'Vite']
    },
    {
      category: 'Quality & Upcoming Tech',
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      skills: ['Root-Cause Analysis', 'Debugging', 'Troubleshooting', 'Currently Learning: Next.js', 'Currently Learning: TypeScript']
    }
  ];

  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'INDBIN CRM Fintech Services LLP',
      period: 'Aug 2026 – Present',
      technologies: ['PHP', 'MySQL', 'XAMPP', 'MySQL Workbench', 'Git'],
      highlights: [
        'Architect and manage role-based user access control (RBAC) across an enterprise CRM platform built on PHP and MySQL.',
        'Diagnose and resolve full-stack regressions across client views and complex SQL database layers.',
        'Configure and support CRM modules: user accounts, dynamic notifications, third-party integrations, and reporting.',
        'Coordinate in agile sprints using Git and XAMPP environments to ensure smooth deployments.'
      ]
    },
    {
      role: 'UI/UX Designing with AI Intern',
      company: 'Teklearn',
      period: 'Dec 2024',
      technologies: ['Figma', 'AI-assisted design tools'],
      highlights: [
        'Crafted modern user-centric interfaces and responsive design systems for enterprise software in Figma.',
        'Leveraged AI-assisted design tooling to accelerate wireframing, color harmony testing, and rapid prototyping.'
      ]
    },
    {
      role: 'Python Programming Intern',
      company: 'NEST Cyber Campus',
      period: 'May 2023',
      technologies: ['Python'],
      highlights: [
        'Engineered Python automation scripts for data cleansing, file parsing, and recurring data workflows.',
        'Strengthened foundational algorithmic problem-solving and structured program modularity.'
      ]
    }
  ];

  const personalProjects = [
    {
      title: 'Expense Tracker',
      type: 'Personal Project',
      technologies: ['React', 'JavaScript', 'Vite', 'LocalStorage', 'CSS3'],
      description: 'A snappy personal finance application designed for real-time income and expense tracking. Computes dynamic balances, categorizes spending (Food, Travel, Shopping, Salary, Other), supports instant transaction filters, and securely persists state via localStorage.',
      github: 'https://github.com/Nanditha4955/expense-tracker',
      demo: null,
      hasRepo: true
    }
  ];

  const academicProjects = [
    {
      title: 'Mock Interview Training Platform Using AI Agents',
      type: 'Academic Project',
      period: '2025 – 2026',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Speech Analysis'],
      description: 'An AI-powered training platform that listens to speech and candidate responses in real-time, evaluating articulation, keyword relevance, and answer structure to generate instant, actionable interview feedback.',
      hasRepo: false
    },
    {
      title: 'School Bus Tracking System',
      type: 'Academic Project',
      period: '2025',
      technologies: ['Java', 'Firebase Realtime Database', 'GPS', 'Android'],
      description: 'A telemetry and navigation application engineered in Java. Connects with Firebase Realtime Database for live GPS coordinate streaming and seamless student transit oversight.',
      hasRepo: false
    }
  ];

  const certifications = [
    {
      title: 'MERN Stack & Full Stack Development',
      issuer: 'Infosys Springboard',
      category: 'Web Architecture',
      credentialText: 'Verified Full Stack Foundation'
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services (AWS)',
      category: 'Cloud Infrastructure',
      credentialText: 'Cloud Principles & Core Services'
    },
    {
      title: 'Python For Data Science',
      issuer: 'NPTEL',
      category: 'Data Science & Algorithms',
      credentialText: 'NPTEL Certified Examination'
    },
    {
      title: 'Foundations Of Prompt Engineering',
      issuer: 'Amazon Web Services (AWS)',
      category: 'Artificial Intelligence',
      credentialText: 'Generative AI & LLM Interactions'
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(contactForm.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:mnanditha186@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-emerald-400 selection:text-black">
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-base font-bold tracking-tight text-white flex items-center gap-2 group">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span>Nanditha M</span>
              <span className="text-zinc-600 font-mono text-xs">/ full-stack</span>
            </a>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-1.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-semibold uppercase tracking-wider transition shadow-[0_0_15px_rgba(52,211,153,0.25)]"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-zinc-400 hover:text-white p-2 rounded-lg focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-zinc-900 bg-black/98 px-4 pt-2 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-zinc-950 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"></div>

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-950/80 text-zinc-300 border border-zinc-800/80 mb-8 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Full Stack Developer • Computer Science Graduate</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Nanditha M</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-4">
            Building scalable systems & modern web experiences.
          </p>

          <p className="text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed max-w-2xl font-light">
            Specialized in React, JavaScript, PHP, and database architectures. Turning complex challenges into fast, resilient, and intuitive applications from pixel to database.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 py-5 mb-10 border-y border-zinc-900/90 max-w-xl">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-mono">3+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Shipped Projects</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-mono">7.53</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">B.Tech CGPA</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-mono">2026</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Class of 2026</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm transition shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              Explore Projects
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 text-zinc-200 text-sm font-medium transition cursor-pointer hover:bg-zinc-900"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              Preview Resume
            </button>
            <a
              href={`${import.meta.env.BASE_URL}Nanditha_M_Resume.pdf`}
              download="Nanditha_M_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-900 hover:border-zinc-800 bg-black text-zinc-300 text-sm font-medium transition hover:text-white"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              Download PDF
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href="https://github.com/Nanditha4955"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-zinc-900 hover:border-zinc-700 bg-zinc-950/80 text-zinc-400 hover:text-white transition"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/Nanditha2004"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-zinc-900 hover:border-zinc-700 bg-zinc-950/80 text-zinc-400 hover:text-white transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:mnanditha186@gmail.com"
                className="p-3 rounded-full border border-zinc-900 hover:border-zinc-700 bg-zinc-950/80 text-zinc-400 hover:text-white transition"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-950/60 border-t border-b border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">Background</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">About Me</h2>
            <div className="w-10 h-0.5 bg-emerald-400 rounded mb-6"></div>
            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg mb-4">
              I am pursuing my Bachelor of Technology in Computer Science and Engineering at Mangalam College of Engineering (CGPA 7.53/10) alongside a Minor Degree in Robotics and Automation.
            </p>
            <p className="text-zinc-400 leading-relaxed text-base">
              My hands-on experience bridges full-stack web engineering, enterprise CRM platform troubleshooting, and AI-assisted UI/UX prototyping. I focus on writing modular code, understanding system architecture, and delivering responsive user interfaces that perform reliably under real-world conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black border border-zinc-900 hover:border-zinc-800 transition">
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 w-fit mb-4 text-emerald-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">CS Engineering Foundation</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Strong understanding of data structures, algorithms, object-oriented software engineering, relational databases, and networks.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-zinc-900 hover:border-zinc-800 transition">
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 w-fit mb-4 text-sky-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Full Stack Architecture</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Skilled in React JS, JavaScript (ES6+), Tailwind CSS, Node.js, PHP, and REST APIs, actively learning Next.js and TypeScript.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-zinc-900 hover:border-zinc-800 transition">
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 w-fit mb-4 text-teal-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Analytical Problem Solving</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Methodical debugger experienced in identifying root causes, diagnosing database regressions, and communicating cleanly in teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">Track Record</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">Training & Experience</h2>
          <div className="w-10 h-0.5 bg-emerald-400 rounded mb-6"></div>
          <p className="text-zinc-400">Professional internships in CRM platform development, UI/UX prototyping, and Python scripting.</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 transition shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-emerald-400 text-sm font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-black text-zinc-300 border border-zinc-800 self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-black text-zinc-300 font-mono border border-zinc-900">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-950/60 border-t border-b border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">Technical Skills</h2>
            <div className="w-10 h-0.5 bg-emerald-400 rounded mb-6"></div>
            <p className="text-zinc-400">Structured competencies across full-stack engineering disciplines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.category} className="p-6 rounded-2xl bg-black border border-zinc-900 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800">{group.icon}</div>
                    <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800/80 text-xs font-mono text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mb-8">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">Selected Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">Projects</h2>
          <div className="w-10 h-0.5 bg-emerald-400 rounded mb-6"></div>
          <p className="text-zinc-400">Explore personal development builds and academic engineering systems.</p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 mb-10 border-b border-zinc-900 pb-4">
          <button
            type="button"
            onClick={() => setProjectTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition ${
              projectTab === 'all'
                ? 'bg-white text-black font-semibold'
                : 'bg-zinc-950 text-zinc-400 border border-zinc-850 hover:text-white'
            }`}
          >
            All Projects
          </button>
          <button
            type="button"
            onClick={() => setProjectTab('personal')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition flex items-center gap-1.5 ${
              projectTab === 'personal'
                ? 'bg-white text-black font-semibold'
                : 'bg-zinc-950 text-zinc-400 border border-zinc-850 hover:text-white'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
            Personal Projects
          </button>
          <button
            type="button"
            onClick={() => setProjectTab('academic')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition flex items-center gap-1.5 ${
              projectTab === 'academic'
                ? 'bg-white text-black font-semibold'
                : 'bg-zinc-950 text-zinc-400 border border-zinc-850 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            Academic Projects
          </button>
        </div>

        <div className="space-y-12">
          {/* Personal Projects Subsection */}
          {(projectTab === 'all' || projectTab === 'personal') && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-xs">
                  Personal Projects
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalProjects.map((proj) => (
                  <div
                    key={proj.title}
                    className="rounded-2xl bg-zinc-950 border border-zinc-850 overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition shadow-lg"
                  >
                    <div className="p-6 border-b border-zinc-900 bg-gradient-to-b from-zinc-900/40 to-transparent">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                          {proj.type}
                        </span>
                        {proj.demo && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Live App
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-white leading-tight">{proj.title}</h4>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <p className="text-xs text-zinc-400 leading-relaxed mb-6">{proj.description}</p>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {proj.technologies.map((t) => (
                            <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-md bg-black text-zinc-300 font-mono border border-zinc-900">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition px-3.5 py-1.5 rounded-md bg-black border border-zinc-800"
                          >
                            <Github className="w-3.5 h-3.5 text-zinc-400" /> GitHub Repo
                          </a>
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition px-3.5 py-1.5 rounded-md ml-auto"
                            >
                              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Academic Projects Subsection */}
          {(projectTab === 'all' || projectTab === 'academic') && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-xs">
                  Academic Projects
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {academicProjects.map((proj) => (
                  <div
                    key={proj.title}
                    className="rounded-2xl bg-zinc-950 border border-zinc-850 p-6 flex flex-col justify-between hover:border-sky-500/40 transition"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                          {proj.type}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">
                          {proj.period}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{proj.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-6">{proj.description}</p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                        {proj.technologies.map((t) => (
                          <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-md bg-black text-zinc-300 font-mono border border-zinc-900">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificates" className="py-24 bg-zinc-950/60 border-t border-b border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">Certifications & Workshops</h2>
            <div className="w-10 h-0.5 bg-emerald-400 rounded mb-6"></div>
            <p className="text-zinc-400">Formal professional credentials, technical exams, and workshop specializations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 rounded-2xl bg-black border border-zinc-900 hover:border-zinc-700 transition flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-semibold block mb-1">
                    {cert.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">{cert.title}</h4>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-900">
                  <p className="text-xs text-emerald-400 font-medium">{cert.issuer}</p>
                  <p className="text-[11px] text-zinc-500 mt-1 font-mono">{cert.credentialText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Download Resume Section */}
      <section id="resume" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">Curriculum Vitae</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">Download My Resume</h2>
          <div className="w-10 h-0.5 bg-emerald-400 rounded mb-6"></div>
          <p className="text-zinc-400">
            Access the complete verified resume detailing education, engineering background, and core technical skills.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-850 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-black text-zinc-300 border border-zinc-800">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Nanditha_M_Resume.pdf (Official Document)</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Nanditha M — Full Stack Developer Resume
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Contains complete academic records from Mangalam College of Engineering (B.Tech CS 2026, Minor in Robotics), fintech software development internship, and verified AWS/Infosys credentials.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full-Stack Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>PHP CRM Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AWS & MERN Certified</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm transition shadow-[0_0_20px_rgba(52,211,153,0.3)] cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              Preview Resume Online
            </button>
            <a
              href={`${import.meta.env.BASE_URL}Nanditha_M_Resume.pdf`}
              download="Nanditha_M_Resume.pdf"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-800 font-semibold text-sm transition shadow-md"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              Download Resume (PDF)
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Nanditha_M_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-zinc-400 hover:text-white text-xs font-medium transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open PDF in New Tab
            </a>
          </div>
        </div>

        {/* Education Breakdown inside Resume Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h4 className="text-base font-bold text-white">Degree Education</h4>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-zinc-500 font-mono">
                <span>2022 – 2026</span>
                <span className="text-emerald-400 font-semibold">CGPA: 7.53 / 10</span>
              </div>
              <p className="text-sm font-semibold text-white pt-1">B.Tech in Computer Science and Engineering</p>
              <p className="text-xs text-zinc-400">Mangalam College of Engineering</p>
              <p className="text-xs text-zinc-500 font-mono pt-1">Minor Degree in Robotics and Automation</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <h4 className="text-base font-bold text-white">Higher Secondary</h4>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-zinc-500 font-mono">
                <span>2020 – 2022</span>
              </div>
              <p className="text-sm font-semibold text-white pt-1">Metropolitan Higher Secondary School</p>
              <p className="text-xs text-zinc-400">Science and Mathematics concentration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-950/60 border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">Connect</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">Get In Touch</h2>
            <div className="w-10 h-0.5 bg-emerald-400 rounded mb-6"></div>
            <p className="text-zinc-400">
              Open for full stack opportunities, engineering roles, and technical discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black border border-zinc-900">
                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-850 text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Email</h3>
                  <a
                    href="mailto:mnanditha186@gmail.com"
                    className="text-sm font-medium text-zinc-200 hover:text-emerald-400 transition break-all"
                  >
                    mnanditha186@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black border border-zinc-900">
                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-855 text-sky-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Phone</h3>
                  <a
                    href="tel:+918590573071"
                    className="text-sm font-medium text-zinc-200 hover:text-sky-400 transition"
                  >
                    +91 8590573071
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black border border-zinc-900">
                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-850 text-indigo-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-mono">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/Nanditha2004"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-zinc-200 hover:text-indigo-400 transition"
                  >
                    linkedin.com/in/Nanditha2004
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black border border-zinc-900">
                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-850 text-teal-400 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-mono">GitHub</h3>
                  <a
                    href="https://github.com/Nanditha4955"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-zinc-200 hover:text-teal-400 transition"
                  >
                    github.com/Nanditha4955
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Free Mailto Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4 p-6 sm:p-8 rounded-3xl bg-black border border-zinc-900">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                  placeholder="Full Stack Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                  placeholder="Hi Nanditha, I'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-sm font-semibold uppercase tracking-wider transition shadow-[0_0_20px_rgba(52,211,153,0.3)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 font-mono">
            &copy; {new Date().getFullYear()} Nanditha M. All rights reserved.
          </p>
          <a href="#home" className="text-xs text-zinc-400 hover:text-white transition flex items-center gap-1 font-mono">
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>

      {/* Interactive Resume Preview Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-850 bg-black">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-white">Nanditha M — Official Resume</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`${import.meta.env.BASE_URL}Nanditha_M_Resume.pdf`}
                  download="Nanditha_M_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-semibold transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Nanditha_M_Resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
                  title="Open in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setResumeModalOpen(false)}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition ml-1 cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF iframe */}
            <div className="flex-1 bg-zinc-900 relative">
              <iframe
                src={`${import.meta.env.BASE_URL}Nanditha_M_Resume.pdf`}
                className="w-full h-full border-none"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
