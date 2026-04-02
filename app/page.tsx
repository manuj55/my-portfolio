'use client';

import { useState, useEffect, useRef } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hero = useInView();
  const about = useInView();
  const experience = useInView(0.05);
  const projects = useInView(0.05);
  const contact = useInView();

  const email = ['manujanardhana55', 'gmail.com'].join('@');

  return (
    <div className="min-h-screen text-gray-900">
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold cursor-pointer">Manu Janardhana</h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex">
            <a href="#about" className="mx-4 text-gray-700 hover:text-black transition-colors duration-200">
              About
            </a>
            <a href="#experience" className="mx-4 text-gray-700 hover:text-black transition-colors duration-200">
              Experience
            </a>
            <a href="#projects" className="mx-4 text-gray-700 hover:text-black transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="mx-4 text-gray-700 hover:text-black transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col items-center space-y-4">
              <a href="#about" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#experience" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </a>
              <a href="#projects" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="pt-16 bg-gradient-to-r from-green-400 to-teal-500">
        <section
          id="dev"
          ref={hero.ref}
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-b-3xl px-4 sm:px-8"
        >
          <div className={`text-center transition-all duration-700 ease-out ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold cursor-default">Manu Janardhana</h2>
            <p className="mt-4 text-base sm:text-lg cursor-default max-w-2xl mx-auto">Full Stack Developer with 5 years of experience in e-commerce, OTT, and healthcare sectors.</p>
          </div>
        </section>

        <section
          id="about"
          ref={about.ref}
          className='min-h-fit bg-gradient-to-r from-green-400 to-teal-500 text-white py-16 sm:py-32 px-4 sm:px-8'
        >
          <div className={`min-h-fit flex items-center justify-center my-12 sm:my-36 transition-all duration-700 ease-out ${about.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center w-full sm:w-3/4 lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold cursor-default">About Me</h2>
              <p className="mt-4 text-base sm:text-lg cursor-default">
                Master's graduate in Applied Computer Science from SRH Heidelberg, with 5 years of experience in full-stack development
                across E-commerce, OTT platforms, and Healthcare. Optimized scalable systems, improving performance and reducing processing
                time, while overcoming architectural and scalability challenges to drive business growth.
              </p>
            </div>
          </div>
        </section>
        <section
          id="experience"
          ref={experience.ref}
          className='min-h-fit bg-gradient-to-r from-orange-400 to-red-500 py-16 sm:py-32 cursor-default'>
          <div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r text-white px-4 sm:px-5 py-5"
          >
            <div className="text-left w-full max-w-4xl px-4 sm:px-8">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-700 ease-out ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Experience</h2>
              <div className="space-y-6 sm:space-y-8">
                <div className={`relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-base sm:text-lg font-medium gap-2">
                      <a
                        href="https://www.sap.com/germany/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 px-2 py-1 rounded-md text-white text-sm sm:text-base w-fit transition-colors duration-200 hover:bg-blue-500"
                      >
                        SAP, Walldorf Germany
                      </a>
                      <div className="text-gray-700 text-sm sm:text-base">(05/2025 – present)</div>
                    </div>
                    <p className="mt-2 font-medium  text-black">Full-Stack Developer (Working Student)</p>
                    <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Thesis project: Constructing Streamable HTTP MCP server consumed by LangChain agent with adapter for agentic API orchestration, transforming legacy app access into AI-ready unified experiences (70% UI reduction targeted).</li>
                      <li>Piloted Joule AI proof-of-concept, onboarding Joule AI and developing AI agents tailored to internal use cases, driving innovation in cloud infrastructure automation.</li>
                      <li>Enhanced test coverage for the "Cloud Infrastructure Cockpit" application (UI5, Java Script) by adding missing Jest test cases, aiming for 80% overall coverage.</li>
                    </ul>
                  </div>
                </div>
                <div className={`relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-base sm:text-lg font-medium gap-2">
                      <a
                        href="https://www.brandeis.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 px-2 py-1 rounded-md text-white text-sm sm:text-base w-fit transition-colors duration-200 hover:bg-blue-500"
                      >
                        Brandeis Consulting GmbH
                      </a>
                      <div className="text-gray-700 text-sm sm:text-base">(09/2024 – 04/2025)</div>
                    </div>
                    <p className="mt-2 font-medium  text-black">Software Developer (Working Student)</p>
                    <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Engineered a training portal using Gatsby, Strapi (Headless CMS), JavaScript, GraphQL, and REST APIs, migrating an MDX-based content system into Strapi collections, reducing manual content updates by 80%.</li>
                      <li>Devised an algorithm interpreting JSON data to build Strapi relational models, eliminating manual intervention, improving data loading times by 60% and reducing data errors to less than 5%.</li>
                    </ul>
                  </div>
                </div>

                <div className={`relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg mt-6 sm:mt-8 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-base sm:text-lg font-medium gap-2">
                      <a
                        href="https://www.oracle.com/in/health/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 px-2 py-1 rounded-md text-white text-sm sm:text-base w-fit transition-colors duration-200 hover:bg-blue-500"
                      >
                        Oracle Health, Bangalore India
                      </a>
                      <div className="text-gray-700 text-sm sm:text-base">(01/2022 – 03/2024)</div>
                    </div>
                    <p className="mt-2 font-medium  text-black">Full Stack Developer</p>
                    <p className="mt-1 text-sm text-gray-600 italic">SYNAPSE (Health Care Domain)</p>
                    <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Led the development of the SYNAPSE application, integrating clinical workflows and automating patient data exchange, reducing manual data entry time by 60% using JavaScript, React.js, Node.js, Ruby on Rails, and Clojure.</li>
                      <li>Developed a modular UI design, utilizing analytical insights and conceptual thinking to enable faster customization and reduce development time by 40% for new feature rollouts.</li>
                      <li>Refined frontend validation processes, minimizing input errors by 40%, improving form interactions, and enhancing user experience.</li>
                    </ul>
                  </div>
                </div>

                <div className={`relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg mt-6 sm:mt-8 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 ${experience.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-base sm:text-lg font-medium gap-2">
                      <a
                        href="https://www.openturf.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 px-2 py-1 rounded-md text-white text-sm sm:text-base w-fit transition-colors duration-200 hover:bg-blue-500"
                      >
                        Openturf Technologies, Bangalore India
                      </a>
                      <div className="text-gray-700 text-sm sm:text-base">(01/2020 – 01/2022)</div>
                    </div>
                    <p className="mt-2 font-medium  text-black">Front End Developer</p>
                    <p className="mt-1 text-sm text-gray-600 italic">Sling Media (OTT Platform)</p>
                    <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Implemented user interfaces for Sling TV leveraging React, Redux Saga, RxJS, and TypeScript, decreasing average API response time by 75ms which minimized buffering events by 18%.</li>
                      <li>Enhanced customer engagement by implementing real-time streaming optimizations, leading to a 20% increase in active viewing sessions.</li>
                      <li>Reduced page load times by 35%, improving video playback performance across web and smart TV applications.</li>
                      <li>Led Agile development cycles, ensuring on-time feature delivery and reducing bug resolution time by 25% through efficient debugging and testing.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={projects.ref}
          className="min-h-screen flex items-center justify-center bg-gray-100 rounded-b-3xl cursor-default px-4 sm:px-8 py-16 sm:py-24"
        >
          <div className="text-center max-w-6xl mx-auto w-full">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 transition-all duration-700 ease-out ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {/* PantryPal Microservices Development */}
              <div className={`relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-blue-100 hover:shadow-xl ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-lg font-medium">PantryPal Microservices Development</p>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    Built a microservice-based grocery application using Node.js for authentication and user management.
                    Implemented secure JWT-based authentication, user CRUD operations, Elastic search logger, rate limiter,
                    and API documentation with Swagger. Utilized Docker to containerize and run all services on the same network.
                    Leveraged Vue.js on the frontend for a seamless user experience.
                  </p>
                  <div className="w-full flex flex-row justify-between mt-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 hover:scale-110 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Jan 2025</p>
                  </div>
                </div>
              </div>

              {/* CampusCash Expense Manager Development */}
              <div className={`relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-blue-100 hover:shadow-xl ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                <div className="flex flex-col justify-between items-center h-full">
                  <p className="text-lg font-medium">CampusCash Expense Manager Development</p>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    Built an expense management application using Vue.js, JavaScript, HTML, and CSS. Implemented advanced expense editing with splitting and validation,
                    daily streak tracking to boost user engagement, and secure authentication with integrated search and filter functionalities for expenses.
                  </p>
                  <div className="w-full flex flex-row justify-between mt-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 hover:scale-110 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Dec 2024</p>
                  </div>
                </div>
              </div>

              {/* Integrated Property Management System (PMS) Development */}
              <div className={`relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-blue-100 hover:shadow-xl ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
                <div className="flex flex-col justify-between items-center h-full">
                  <p className="text-lg font-medium">Integrated Property Management System (PMS) Development</p>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    Implemented a hotel management system using HTML, CSS, JavaScript, JSP, Java Servlets, JDBC, and MySQL. Features include admin and customer functionalities
                    like account management, reservations, and surge pricing.
                  </p>
                  <div className="w-full flex flex-row justify-between mt-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 hover:scale-110 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Jun 2024</p>
                  </div>
                </div>
              </div>

              {/* Comprehensive UI/UX Solution for E-commerce Platform */}
              <div className={`relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-blue-100 hover:shadow-xl ${projects.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                <div className="flex flex-col justify-between items-center h-full">
                  <p className="text-lg font-medium">Comprehensive UI/UX Solution for E-commerce Platform</p>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    Created a responsive landing page, store page, and about-us page for trekking tools using JavaScript, Tailwind, Material Design, custom fonts,
                    icons, and images.
                  </p>
                  <div className="w-full flex flex-row justify-between mt-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 hover:scale-110 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Oct 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* To-do: Fix responsive */}
        {/* To-do: Fix project cards grid styling */}
        {/* To-do: Re-look into color */}
        {/* To-do: Add skills section */}

        <section
          id="contact"
          ref={contact.ref}
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-t-3xl cursor-default px-4 sm:px-8"
        >
          <div className={`text-center max-w-2xl transition-all duration-700 ease-out ${contact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
            <p className="mt-4 text-base sm:text-lg cursor-default">
              Feel free to reach out to me at{' '}
              <a href={`mailto:${email}`} className="underline break-all sm:break-normal hover:text-blue-200 transition-colors duration-200">{email}</a>
            </p>
            <p className="mt-2 text-base sm:text-lg">
              Connect with me on{' '}
              <a href="https://www.linkedin.com/in/manu-janardhana/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 transition-colors duration-200">LinkedIn</a>
              {' '}|{' '}
              <a href="https://github.com/manuj55" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 transition-colors duration-200">Github</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-white text-center">
        <p className="text-gray-600 cursor-progress">&copy; 2026 Manu Janardhana</p>
      </footer>
    </div>
  );
}
