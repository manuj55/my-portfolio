'use client';

import { useState, useEffect, useRef, useMemo } from 'react';

// ─── Intersection Observer Hook ───────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

// ─── Typing Effect Hook ───────────────────────────────────────────────────────
function useTypingEffect(text: string, speed = 45, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);
  return { displayed, done };
}

// ─── Matrix Rain Background ───────────────────────────────────────────────────
function MatrixRain() {
  const columns = useMemo(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: `${(i / 24) * 100}%`,
      duration: `${8 + (i % 7) * 2}s`,
      delay: `${-(i * 0.7)}s`,
      text: Array.from({ length: 30 }, () => chars[Math.floor(Math.random() * chars.length)]).join('\n'),
    }));
  }, []);

  return (
    <div className="matrix-bg" aria-hidden="true">
      {columns.map(col => (
        <div
          key={col.id}
          className="matrix-column"
          style={{ left: col.left, animationDuration: col.duration, animationDelay: col.delay }}
        >
          {col.text}
        </div>
      ))}
    </div>
  );
}

// ─── Terminal Window Wrapper ──────────────────────────────────────────────────
function TerminalWindow({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-title-bar">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
        <span className="terminal-title-text">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

// ─── Skill Bar ────────────────────────────────────────────────────────────────
function SkillBar({ name, pct, delay = 0, visible }: { name: string; pct: number; delay?: number; visible: boolean }) {
  const [animPct, setAnimPct] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setAnimPct(pct), delay);
    return () => clearTimeout(t);
  }, [visible, pct, delay]);

  const filled = Math.round((animPct / 100) * 20);
  const empty = 20 - filled;
  return (
    <div className="skill-bar-track flex items-center gap-3 text-xs sm:text-sm font-mono">
      <span className="text-terminal-comment w-28 sm:w-36 shrink-0">{name}</span>
      <span className="text-terminal-green">
        {'█'.repeat(filled)}
        <span style={{ color: 'rgba(0,255,65,0.12)' }}>{'░'.repeat(empty)}</span>
      </span>
      <span className="text-terminal-amber ml-1">{animPct}%</span>
    </div>
  );
}

// ─── Blinking Cursor ──────────────────────────────────────────────────────────
function Cursor() {
  return <span className="animate-blink text-terminal-green ml-0.5">█</span>;
}

// ─── Prompt Line ─────────────────────────────────────────────────────────────
function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-sm sm:text-base">
      <span className="text-terminal-green shrink-0">manu@portfolio:~$</span>
      <span className="text-terminal-cyan">{children}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hero = useInView(0.05);
  const about = useInView(0.1);
  const experience = useInView(0.05);
  const projects = useInView(0.05);
  const skills = useInView(0.1);
  const contact = useInView(0.1);

  const email = ['manujanardhana55', 'gmail.com'].join('@');

  const line1 = useTypingEffect('Hello, World. I\'m Manu Janardhana.', 50, 300);
  const line2 = useTypingEffect('Senior Full-Stack Developer', 45, line1.done ? 200 : 99999);
  const line3 = useTypingEffect('6+ years · E-commerce · OTT · Healthcare', 30, line2.done ? 200 : 99999);

  const SKILLS = [
    { name: 'React.js / Vue.js', pct: 95 },
    { name: 'TypeScript', pct: 90 },
    { name: 'JavaScript', pct: 95 },
    { name: 'Node.js', pct: 85 },
    { name: 'HTML / CSS', pct: 92 },
    { name: 'GraphQL', pct: 80 },
    { name: 'Ruby on Rails', pct: 75 },
    { name: 'Docker', pct: 72 },
    { name: 'Git', pct: 90 },
  ];

  const EXPERIENCE = [
    {
      company: 'SAP, Walldorf Germany',
      href: 'https://www.sap.com/germany/index.html',
      period: '05/2025 – 03/2026',
      role: 'Full-Stack Developer (Working Student)',
      project: null,
      bullets: [
        'Thesis project: Constructing Streamable HTTP MCP server consumed by LangChain agent with adapter for agentic API orchestration, transforming legacy app access into AI-ready unified experiences (70% UI reduction targeted).',
        'Piloted Joule AI proof-of-concept, onboarding Joule AI and developing AI agents tailored to internal use cases, driving innovation in cloud infrastructure automation.',
        'Enhanced test coverage for the "Cloud Infrastructure Cockpit" application (UI5, JavaScript) by adding missing Jest test cases, aiming for 80% overall coverage.',
      ],
    },
    {
      company: 'Brandeis Consulting GmbH',
      href: 'https://www.brandeis.de/',
      period: '09/2024 – 04/2025',
      role: 'Software Developer (Working Student)',
      project: null,
      bullets: [
        'Engineered a training portal using Gatsby, Strapi (Headless CMS), JavaScript, GraphQL, and REST APIs, migrating an MDX-based content system into Strapi collections, reducing manual content updates by 80%.',
        'Devised an algorithm interpreting JSON data to build Strapi relational models, eliminating manual intervention, improving data loading times by 60% and reducing data errors to less than 5%.',
      ],
    },
    {
      company: 'Oracle Health, Bangalore India',
      href: 'https://www.oracle.com/in/health/',
      period: '01/2022 – 03/2024',
      role: 'Full Stack Developer',
      project: 'SYNAPSE (Health Care Domain)',
      bullets: [
        'Led the development of the SYNAPSE application, integrating clinical workflows and automating patient data exchange, reducing manual data entry time by 60% using JavaScript, React.js, Node.js, Ruby on Rails, and Clojure.',
        'Developed a modular UI design, utilizing analytical insights and conceptual thinking to enable faster customization and reduce development time by 40% for new feature rollouts.',
        'Refined frontend validation processes, minimizing input errors by 40%, improving form interactions, and enhancing user experience.',
      ],
    },
    {
      company: 'Openturf Technologies, Bangalore India',
      href: 'https://www.openturf.in/',
      period: '01/2020 – 01/2022',
      role: 'Front End Developer',
      project: 'Sling Media (OTT Platform)',
      bullets: [
        'Implemented user interfaces for Sling TV leveraging React, Redux Saga, RxJS, and TypeScript, decreasing average API response time by 75ms which minimized buffering events by 18%.',
        'Enhanced customer engagement by implementing real-time streaming optimizations, leading to a 20% increase in active viewing sessions.',
        'Reduced page load times by 35%, improving video playback performance across web and smart TV applications.',
        'Led Agile development cycles, ensuring on-time feature delivery and reducing bug resolution time by 25% through efficient debugging and testing.',
      ],
    },
  ];

  const PROJECTS = [
    {
      title: 'PantryPal Microservices',
      filename: 'pantry-pal.ts',
      date: 'Jan 2025',
      tags: ['Node.js', 'Vue.js', 'Docker', 'JWT', 'Swagger'],
      description:
        'Built a microservice-based grocery application using Node.js for authentication and user management. Implemented secure JWT-based authentication, user CRUD operations, Elastic search logger, rate limiter, and API documentation with Swagger. Dockerized all services on the same network.',
    },
    {
      title: 'CampusCash Expense Manager',
      filename: 'campus-cash.vue',
      date: 'Dec 2024',
      tags: ['Vue.js', 'JavaScript', 'CSS'],
      description:
        'Built an expense management app with advanced expense editing, splitting, validation, daily streak tracking to boost engagement, and secure authentication with integrated search and filter functionalities.',
    },
    {
      title: 'Property Management System',
      filename: 'pms.java',
      date: 'Jun 2024',
      tags: ['Java', 'JSP', 'MySQL', 'JDBC'],
      description:
        'Implemented a hotel management system using HTML, CSS, JavaScript, JSP, Java Servlets, JDBC, and MySQL. Features include admin and customer functionalities like account management, reservations, and surge pricing.',
    },
    {
      title: 'E-commerce UI/UX Solution',
      filename: 'ecommerce-ui.tsx',
      date: 'Oct 2024',
      tags: ['JavaScript', 'Tailwind', 'Material Design'],
      description:
        'Created a responsive landing page, store page, and about-us page for a trekking tools brand using JavaScript, Tailwind, Material Design, custom fonts, icons, and images.',
    },
  ];

  const navLinks = [
    { href: '#about', label: 'cd /about' },
    { href: '#experience', label: 'cd /experience' },
    { href: '#projects', label: 'cd /projects' },
    { href: '#skills', label: 'cd /skills' },
    { href: '#contact', label: 'cd /contact' },
  ];

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-green font-mono relative">
      <MatrixRain />

      {/* ── Header ── */}
      <header className="fixed w-full z-50 border-b border-terminal-border bg-terminal-bg/90 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-terminal-comment text-sm hidden sm:inline">~</span>
            <h1 className="text-sm sm:text-base font-semibold text-terminal-green glitch">
              manu<span className="text-terminal-cyan">@</span>portfolio
            </h1>
            <Cursor />
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            className="md:hidden p-2 border border-terminal-border hover:border-terminal-green transition-colors duration-200 text-terminal-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-xs">{mobileMenuOpen ? '[×]' : '[≡]'}</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs text-terminal-comment hover:text-terminal-green hover:bg-terminal-border/50 transition-all duration-200 border border-transparent hover:border-terminal-border"
              >
                <span className="text-terminal-green">$ </span>{link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-terminal-border bg-terminal-bg/95" aria-label="Mobile navigation">
            <div className="flex flex-col py-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-6 py-2.5 text-sm text-terminal-comment hover:text-terminal-green hover:bg-terminal-border/40 transition-all duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-terminal-green">$ </span>{link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="relative z-10 pt-16">

        {/* ── Hero ── */}
        <section
          id="dev"
          ref={hero.ref}
          className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-20"
        >
          <div className={`w-full max-w-3xl transition-all duration-700 ease-out ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TerminalWindow title="~/portfolio — bash — 120×40">
              <div className="space-y-4 min-h-[180px] sm:min-h-[200px]">
                <Prompt>whoami</Prompt>
                <div className="pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <p className="text-terminal-green text-glow-green text-xl sm:text-2xl md:text-3xl font-semibold">
                    {line1.displayed}{!line1.done && <Cursor />}
                  </p>
                  {line1.done && (
                    <p className="text-terminal-cyan text-lg sm:text-xl">
                      <span className="text-terminal-amber">role: </span>
                      {line2.displayed}{!line2.done && <Cursor />}
                    </p>
                  )}
                  {line2.done && (
                    <p className="text-terminal-comment text-sm sm:text-base">
                      <span className="text-terminal-amber">exp:  </span>
                      {line3.displayed}{!line3.done && <Cursor />}
                    </p>
                  )}
                </div>
                {line3.done && (
                  <div className="pt-4 border-t border-terminal-border space-y-1 text-xs sm:text-sm text-terminal-comment">
                    <Prompt>ls ./links</Prompt>
                    <div className="pl-4 sm:pl-6 flex flex-wrap gap-4">
                      <a href="#about" className="terminal-link">about.md</a>
                      <a href="#experience" className="terminal-link">experience.log</a>
                      <a href="#projects" className="terminal-link">projects/</a>
                      <a href="#skills" className="terminal-link">skills.json</a>
                      <a href="#contact" className="terminal-link">contact.sh</a>
                    </div>
                  </div>
                )}
              </div>
            </TerminalWindow>
          </div>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          ref={about.ref}
          className="py-20 sm:py-28 px-4 sm:px-8"
        >
          <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${about.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <Prompt>cat about.txt</Prompt>
            </div>
            <TerminalWindow title="about.txt">
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <div className="text-terminal-comment text-xs border-b border-terminal-border pb-3 mb-4">
                  # Manu Janardhana — About Me
                </div>
                <p className="text-terminal-green">
                  Master&apos;s graduate in{' '}
                  <span className="text-terminal-cyan">Applied Computer Science</span>{' '}
                  from{' '}
                  <span className="text-terminal-amber">SRH Heidelberg</span>,
                  with{' '}
                  <span className="text-terminal-cyan">6 years of experience</span>{' '}
                  in full-stack development across E-commerce, OTT platforms, and Healthcare.
                </p>
                <p className="text-terminal-comment">
                  Optimized scalable systems, improving performance and reducing processing time,
                  while overcoming architectural and scalability challenges to drive business growth.
                </p>
                <div className="mt-6 pt-4 border-t border-terminal-border text-xs space-y-1">
                  <div className="flex gap-4 flex-wrap">
                    <span><span className="text-terminal-amber">location:</span> <span className="text-terminal-green">Germany 🇩🇪</span></span>
                    <span><span className="text-terminal-amber">status:</span> <span className="text-terminal-green">open to opportunities</span></span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          id="experience"
          ref={experience.ref}
          className="py-20 sm:py-28 px-4 sm:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className={`mb-8 transition-all duration-700 ease-out ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Prompt>tail -f experience.log</Prompt>
            </div>
            <div className="space-y-5">
              {EXPERIENCE.map((job, idx) => (
                <div
                  key={job.company}
                  className={`transition-all duration-500 ease-out ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <TerminalWindow title={`job_${String(idx + 1).padStart(2, '0')}.log`}>
                    <div className="space-y-3 text-sm">
                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-terminal-border pb-3">
                        <a
                          href={job.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="terminal-link text-terminal-cyan font-semibold text-base"
                        >
                          {job.company}
                        </a>
                        <span className="text-terminal-amber text-xs font-mono">[{job.period}]</span>
                      </div>
                      <div>
                        <span className="text-terminal-green">
                          <span className="text-terminal-comment">role: </span>{job.role}
                        </span>
                        {job.project && (
                          <p className="text-terminal-comment text-xs mt-0.5">
                            <span className="text-terminal-amber">project: </span>{job.project}
                          </p>
                        )}
                      </div>
                      {/* Bullet log entries */}
                      <ul className="space-y-1.5 mt-2">
                        {job.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-2 text-terminal-comment text-xs sm:text-sm">
                            <span className="text-terminal-green shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TerminalWindow>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section
          id="projects"
          ref={projects.ref}
          className="py-20 sm:py-28 px-4 sm:px-8"
        >
          <div className="max-w-5xl mx-auto">
            <div className={`mb-8 transition-all duration-700 ease-out ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Prompt>ls -la ./projects/</Prompt>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PROJECTS.map((proj, idx) => (
                <div
                  key={proj.title}
                  className={`transition-all duration-500 ease-out ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <TerminalWindow title={proj.filename} className="h-full">
                    <div className="flex flex-col h-full gap-3 text-sm">
                      <div className="flex justify-between items-start">
                        <p className="text-terminal-green font-semibold">{proj.title}</p>
                        <span className="text-terminal-amber text-xs shrink-0 ml-2">{proj.date}</span>
                      </div>
                      <p className="text-terminal-comment text-xs sm:text-sm leading-relaxed flex-1">{proj.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-terminal-border">
                        {proj.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 border border-terminal-border text-terminal-cyan bg-terminal-bg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TerminalWindow>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section
          id="skills"
          ref={skills.ref}
          className="py-20 sm:py-28 px-4 sm:px-8"
        >
          <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${skills.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <Prompt>cat skills.json | jq .</Prompt>
            </div>
            <TerminalWindow title="skills.json">
              <div className="space-y-3">
                <div className="text-terminal-comment text-xs border-b border-terminal-border pb-3 mb-4">
                  # Technical proficiency — hover to inspect
                </div>
                {SKILLS.map((skill, idx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    pct={skill.pct}
                    delay={idx * 80}
                    visible={skills.isVisible}
                  />
                ))}
              </div>
            </TerminalWindow>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          ref={contact.ref}
          className="py-20 sm:py-28 px-4 sm:px-8"
        >
          <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${contact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <Prompt>./contact.sh --init</Prompt>
            </div>
            <TerminalWindow title="contact.sh">
              <div className="space-y-4 text-sm sm:text-base">
                <div className="text-terminal-comment text-xs border-b border-terminal-border pb-3">
                  #!/bin/bash  # Let&apos;s connect!
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-terminal-comment text-xs">echo $EMAIL</span>
                    <a href={`mailto:${email}`} className="terminal-link break-all">
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-terminal-comment text-xs">open $LINKEDIN</span>
                    <a
                      href="https://www.linkedin.com/in/manu-janardhana/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link"
                    >
                      linkedin.com/in/manu-janardhana
                    </a>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-terminal-comment text-xs">open $GITHUB</span>
                    <a
                      href="https://github.com/manuj55"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link"
                    >
                      github.com/manuj55
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t border-terminal-border">
                  <p className="text-terminal-comment text-xs">
                    <span className="text-terminal-green">▸</span> Response time: typically within 24h
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Prompt>_</Prompt>
                    <Cursor />
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 py-6 border-t border-terminal-border text-center">
        <p className="text-terminal-comment text-xs font-mono">
          <span className="text-terminal-green">Process exited with code 0.</span>
          {' '}Uptime: 6+ years. &copy; 2026 Manu Janardhana
        </p>
      </footer>
    </div>
  );
}
