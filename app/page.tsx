'use client';

import { useState, useEffect, useRef } from 'react';
import ParticleNetwork from '../components/ParticleNetwork';

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

// ─── Blinking Cursor ──────────────────────────────────────────────────────────
function Cursor() {
  return <span className="animate-blink text-portfolio-orange ml-0.5">█</span>;
}

// ─── Terminal Window ──────────────────────────────────────────────────────────
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

// ─── Section Label ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="section-label">{children}</span>
  );
}

// ─── Skill Badge ──────────────────────────────────────────────────────────────
function SkillBadge({ name, pct, visible, delay = 0 }: { name: string; pct: number; visible: boolean; delay?: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [visible, delay]);

  return (
    <div
      className={`skill-badge transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    >
      <span className="text-white text-sm">{name}</span>
      <span className="text-portfolio-orange text-xs ml-2 font-mono">{pct}%</span>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
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
  const line3 = useTypingEffect('Applied AI · E-commerce · OTT · Healthcare', 30, line2.done ? 200 : 99999);

  const SKILLS = [
    { name: 'TypeScript', pct: 90 },
    { name: 'JavaScript', pct: 95 },
    { name: 'Python', pct: 85 },
    { name: 'React.js / Vue.js', pct: 95 },
    { name: 'Applied AI (LangChain / LLMs / MCP (Model Context Protocol))', pct: 85 },
    { name: 'Node.js', pct: 85 },
    { name: 'HTML / CSS', pct: 92 },
    { name: 'GraphQL', pct: 80 },
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
        'Thesis project: Constructing Streamable HTTP MCP server consumed by LangChain agent with adapter for agentic API orchestration, transforming legacy app access into AI-ready unified experiences (70% UI reduction).',
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
      tags: ['Node.js', 'Vue.js', 'React.js', 'Docker', 'JWT', 'Swagger'],
      description:
        'Built a microservice-based grocery application using Node.js for authentication and user management. Implemented secure JWT-based authentication, user CRUD operations, Elastic search logger, rate limiter, and API documentation with Swagger. Dockerized all services on the same network.',
    },
    {
      title: 'CampusCash Expense Manager',
      filename: 'campus-cash.vue',
      date: 'Dec 2024',
      tags: ['React.js', 'JavaScript', 'CSS'],
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
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-portfolio-bg text-white relative">
      <ParticleNetwork />

      {/* ── Header ── */}
      <header className="fixed w-full z-50 border-b border-portfolio-border bg-portfolio-bg/90 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-mono text-lg font-semibold text-white tracking-tight">
              Manu Janardhana<span className="text-portfolio-orange">.</span>
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            className="md:hidden p-2 border border-portfolio-border hover:border-portfolio-orange transition-colors duration-200 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-xs font-mono">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-portfolio-secondary hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-5 bg-portfolio-border mx-2" />
            <a
              href="https://github.com/manuj55"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-portfolio-secondary hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/manu-janardhana/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-portfolio-secondary hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </nav>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-portfolio-border bg-portfolio-bg/95 backdrop-blur-md" aria-label="Mobile navigation">
            <div className="flex flex-col py-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-6 py-2.5 text-sm text-portfolio-secondary hover:text-white hover:bg-portfolio-surface transition-all duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-portfolio-border mx-6 my-2" />
              <div className="flex gap-4 px-6 py-2">
                <a
                  href="https://github.com/manuj55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-secondary hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/manu-janardhana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-secondary hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      <main className="relative z-10 pt-16">

        {/* ── Hero ── */}
        <section
          id="hero"
          ref={hero.ref}
          className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-20"
        >
          <div className={`w-full max-w-3xl transition-all duration-700 ease-out ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <SectionLabel>FULL-STACK DEVELOPER</SectionLabel>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold italic text-white mt-6 mb-6 leading-tight">
                I build things that
                <br />
                perform at <span className="text-portfolio-orange">scale.</span>
              </h1>
              <p className="text-portfolio-secondary text-lg sm:text-xl font-serif max-w-xl mx-auto">
                Building high-performance solutions in
                Applied AI, E-commerce, OTT, and Healthcare.
              </p>
            </div>

            {/* Command strip */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-portfolio-surface border border-portfolio-border rounded-lg font-mono text-sm">
                <span className="text-portfolio-muted">$</span>
                <span className="text-portfolio-secondary">whoami</span>
                <span className="text-portfolio-muted">→</span>
                <span className="text-white">manu-janardhana</span>
                <span className="text-portfolio-orange">--senior</span>
                <span className="text-portfolio-orange">--full-stack</span>
              </div>
            </div>

            {/* Terminal window with typing */}
            <TerminalWindow title="~/portfolio — bash">
              <div className="space-y-4 min-h-[160px] sm:min-h-[180px]">
                <div className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="text-portfolio-orange shrink-0 font-mono">❯</span>
                  <span className="text-portfolio-secondary font-mono">whoami</span>
                </div>
                <div className="pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <p className="text-white font-serif text-xl sm:text-2xl font-semibold">
                    {line1.displayed}{!line1.done && <Cursor />}
                  </p>
                  {line1.done && (
                    <p className="text-portfolio-secondary font-mono text-sm">
                      <span className="text-portfolio-orange">role: </span>
                      {line2.displayed}{!line2.done && <Cursor />}
                    </p>
                  )}
                  {line2.done && (
                    <p className="text-portfolio-muted font-mono text-sm">
                      <span className="text-portfolio-orange">exp:  </span>
                      {line3.displayed}{!line3.done && <Cursor />}
                    </p>
                  )}
                </div>
                {line3.done && (
                  <div className="pt-4 border-t border-portfolio-border space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-portfolio-orange shrink-0 font-mono">❯</span>
                      <span className="text-portfolio-secondary font-mono">ls ./sections</span>
                    </div>
                    <div className="pl-4 sm:pl-6 flex flex-wrap gap-4 font-mono">
                      <a href="#about" className="portfolio-link">about.md</a>
                      <a href="#experience" className="portfolio-link">experience.log</a>
                      <a href="#projects" className="portfolio-link">projects/</a>
                      <a href="#skills" className="portfolio-link">skills.json</a>
                      <a href="#contact" className="portfolio-link">contact.sh</a>
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
          className="py-24 sm:py-32 px-4 sm:px-8"
        >
          <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${about.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionLabel>ABOUT</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mt-4 mb-8">
              A bit about me
            </h2>
            <div className="space-y-5 font-serif text-lg leading-relaxed text-portfolio-secondary">
              <p>
                Master&apos;s graduate in{' '}
                <span className="text-white font-semibold">Applied Computer Science</span>{' '}
                from{' '}
                <span className="text-portfolio-orange font-semibold">SRH Heidelberg</span>,
                with extensive experience
                in Applied AI and full-stack development across E-commerce, OTT platforms, and Healthcare.
              </p>
              <p className="text-portfolio-muted">
                Optimized scalable systems, improving performance and reducing processing time,
                while overcoming architectural and scalability challenges to drive business growth.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-portfolio-border flex gap-8 flex-wrap font-mono text-sm">
              <span>
                <span className="text-portfolio-orange">location:</span>{' '}
                <span className="text-white">Germany 🇩🇪</span>
              </span>
              <span>
                <span className="text-portfolio-orange">status:</span>{' '}
                <span className="text-white">open to opportunities</span>
              </span>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          id="experience"
          ref={experience.ref}
          className="py-24 sm:py-32 px-4 sm:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className={`mb-12 transition-all duration-700 ease-out ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <SectionLabel>EXPERIENCE</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mt-4">
                Where I&apos;ve worked
              </h2>
            </div>
            <div className="space-y-6">
              {EXPERIENCE.map((job, idx) => (
                <div
                  key={job.company}
                  className={`transition-all duration-500 ease-out ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="experience-card">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link text-white font-semibold text-lg sm:text-xl"
                      >
                        {job.company}
                      </a>
                      <span className="text-portfolio-orange text-xs font-mono shrink-0">{job.period}</span>
                    </div>

                    {/* Role */}
                    <div className="mb-4">
                      <p className="text-white font-mono text-sm">{job.role}</p>
                      {job.project && (
                        <p className="text-portfolio-muted font-mono text-xs mt-1">
                          <span className="text-portfolio-orange">project:</span> {job.project}
                        </p>
                      )}
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-portfolio-secondary text-sm leading-relaxed">
                          <span className="text-portfolio-orange shrink-0 mt-1">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section
          id="projects"
          ref={projects.ref}
          className="py-24 sm:py-32 px-4 sm:px-8"
        >
          <div className="max-w-5xl mx-auto">
            <div className={`mb-12 transition-all duration-700 ease-out ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <SectionLabel>PROJECTS</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mt-4">
                Things I&apos;ve built
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PROJECTS.map((proj, idx) => (
                <div
                  key={proj.title}
                  className={`transition-all duration-500 ease-out ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <TerminalWindow title={proj.filename} className="h-full">
                    <div className="flex flex-col h-full gap-3">
                      <div className="flex justify-between items-start">
                        <p className="text-white font-semibold text-base">{proj.title}</p>
                        <span className="text-portfolio-orange text-xs shrink-0 ml-2 font-mono">{proj.date}</span>
                      </div>
                      <p className="text-portfolio-secondary text-sm leading-relaxed flex-1">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-portfolio-border">
                        {proj.tags.map(tag => (
                          <span
                            key={tag}
                            className="tag-pill"
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
          className="py-24 sm:py-32 px-4 sm:px-8"
        >
          <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${skills.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionLabel>SKILLS</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mt-4 mb-10">
              My toolkit
            </h2>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, idx) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  pct={skill.pct}
                  delay={idx * 80}
                  visible={skills.isVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          ref={contact.ref}
          className="py-24 sm:py-32 px-4 sm:px-8"
        >
          <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${contact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionLabel>CONTACT</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mt-4 mb-4">
              Let&apos;s connect
            </h2>
            <p className="font-serif text-lg text-portfolio-secondary italic mb-10">
              Available for new opportunities — I typically respond within 24 hours.
            </p>

            <TerminalWindow title="contact.sh">
              <div className="space-y-4 text-sm sm:text-base font-mono">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-portfolio-muted text-xs">echo $EMAIL</span>
                  <a href={`mailto:${email}`} className="portfolio-link font-semibold break-all">
                    {email}
                  </a>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-portfolio-muted text-xs">open $LINKEDIN</span>
                  <a
                    href="https://www.linkedin.com/in/manu-janardhana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link font-semibold"
                  >
                    linkedin.com/in/manu-janardhana
                  </a>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-portfolio-muted text-xs">open $GITHUB</span>
                  <a
                    href="https://github.com/manuj55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link font-semibold"
                  >
                    github.com/manuj55
                  </a>
                </div>
                <div className="pt-4 border-t border-portfolio-border">
                  <div className="flex items-center gap-2">
                    <span className="text-portfolio-orange font-mono">❯</span>
                    <span className="text-portfolio-secondary">_</span>
                    <Cursor />
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 py-8 border-t border-portfolio-border text-center">
        <p className="text-portfolio-muted text-xs font-mono">
          &copy; 2026 Manu Janardhana
        </p>
      </footer>
    </div>
  );
}
