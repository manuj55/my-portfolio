import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
      <Head>
        <title>Manu Janardhana | Portfolio</title>
        <meta name="description" content="Portfolio of Manu Janardhana, Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manu Janardhana</h1>
          <nav>
            <a href="#about" className="mx-4 text-gray-700 hover:text-black">
              About
            </a>
            <a href="#experience" className="mx-4 text-gray-700 hover:text-black">
              Experience
            </a>
            <a href="#projects" className="mx-4 text-gray-700 hover:text-black">
              Projects
            </a>
            <a href="#contact" className="mx-4 text-gray-700 hover:text-black">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-16 bg-gradient-to-r from-green-400 to-teal-500">
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-b-full"
        >
          <div className="text-center">
            <h2 className="text-5xl font-extrabold">Manu Janardhana</h2>
            <p className="mt-4 text-lg">Full Stack Developer with 4 years of experience in e-commerce, OTT, and healthcare sectors.</p>
          </div>
        </section>

        <section
          id="about"
          className="min-h-fit flex items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 text-white my-10"
        >
          <div className="text-center w-1/2">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-lg ">
              I am currently pursuing a Master’s degree in Applied Computer Science at SRH Heidelberg. With 4 years of professional experience,
              I have developed full-stack systems, overcoming architectural and scalability challenges in the e-commerce, OTT, and healthcare sectors.
            </p>
          </div>
        </section>
        <section
          id="experience"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-t-full"
        >
          <div className="text-left w-full max-w-4xl px-8 ">
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">

              <div className="relative p-8 rounded-3xl bg-white shadow-lg ">
                <div className="w-full md:w-3/4">
                  <div className="flex flex-row items-baseline text-lg font-medium">
                    <div className="bg-blue-400 px-2 py-1 rounded-md text-white">Oracle Cerner</div> <div className="text-gray-700">(2022 – 2024)</div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Spearheaded the development of the SYNAPSE application in the healthcare domain, enhancing data flow by 40% using JavaScript, React.js, Node.js, Ruby on Rails, and Clojure. Improved team productivity by 25% through Agile practices.
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative p-8 rounded-3xl bg-white shadow-lg flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="w-full md:w-3/4">
                  <p className="text-sm text-gray-500 mb-2">April 2023</p>
                  <p className="text-lg font-medium">Front End Developer at Openturf Technologies (2020 – 2022)</p>
                  <p className="mt-4 text-sm text-gray-600">Engineered interfaces for Sling TV using React.js, Redux Saga, RxJS, and TypeScript, increasing customer engagement by 30%. Optimized Autopilot's front-end for better data visualization, reducing load times by 25%.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-100 rounded-b-full"
        >
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 ">
              {/* Project 1 */}
              <div className="relative p-8 rounded-3xl bg-white shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100">
                <span className="absolute top-4 left-4 px-3 py-1 text-sm font-semibold text-white bg-orange-500 rounded-full">Master's Project</span>
                <p className="mt-8 text-lg font-medium">Integrated Property Management System (PMS)</p>
                <p className="mt-4 text-sm text-gray-600">Developed a hotel management system with features like account management, reservations, and dynamic pricing using HTML, CSS, JavaScript, JSP, Java Servlets, JDBC, and MySQL.</p>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">May 2024</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="relative p-8 rounded-3xl bg-white shadow-lg transition-transform transform hover:scale-105 hover:bg-green-100">
                <span className="absolute top-4 left-4 px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">Master's Project</span>
                <p className="mt-8 text-lg font-medium">Comprehensive UI/UX Solution for E-commerce Platform</p>
                <p className="mt-4 text-sm text-gray-600">Created a responsive landing page, store page, and about us page for trekking tools using JavaScript, Tailwind, Material Design, custom fonts, icons, and images.</p>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">July 2024</p>
                </div>
              </div>

              {/* Add more project blocks as needed */}
            </div>
          </div>
        </section>

        {/* To-do: Fix responsive */}
        {/* To-do: Fix project cards grid styling */}
        {/* To-do: Re-look into color */}
        {/* To-do: Add skills section */}

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-t-full"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold">Contact</h2>
            <p className="mt-4 text-lg">Feel free to reach out to me at <a href="mailto:manujanardhana55@gmail.com" className="underline">manujanardhana55@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/manu-janardhana/" className="underline">LinkedIn</a>.</p>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-white text-center">
        <p className="text-gray-600">&copy; 2024 Manu Janardhana</p>
      </footer>
    </div>
  );
}
