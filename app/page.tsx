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
          <h1 className="text-2xl font-bold cursor-pointer">Manu Janardhana</h1>
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
          id="dev"
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-b-3xl"
        >
          <div className="text-center">
            <h2 className="text-5xl font-extrabold cursor-default">Manu Janardhana</h2>
            <p className="mt-4 text-lg cursor-default">Full Stack Developer with 4 years of experience in e-commerce, OTT, and healthcare sectors.</p>
          </div>
        </section>

        <section
          id="about"
          className='min-h-fit bg-gradient-to-r from-green-400 to-teal-500 text-white py-32'
        >
          <div className="min-h-fit flex items-center justify-center  my-36">
            <div className="text-center w-1/2">
              <h2 className="text-4xl font-bold cursor-default">About Me</h2>
              <p className="mt-4 text-lg cursor-default">
                Currently pursuing a Master’s in Applied Computer Science at SRH Heidelberg, with 4 years of experience in full-stack development
                across E-commerce, OTT platforms, and Healthcare. Optimized scalable systems, improving performance and reducing processing
                time, while overcoming architectural and scalability challenges to drive business growth.
              </p>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className='min-h-fit bg-gradient-to-r from-orange-400 to-red-500 py-32 cursor-default'>
          <div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r text-white  px-5 py-5"
          >
            <div className="text-left w-full max-w-4xl px-8 ">
              <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
              <div className="space-y-8">

                <div className="relative p-8 rounded-3xl bg-white shadow-lg">
                  <div className="w-full">
                    <div className="flex flex-row justify-between items-baseline text-lg font-medium">
                      <div className="bg-blue-400 px-2 py-1 rounded-md text-white">Brandeis Consulting GmbH</div>
                      <div className="ml-4 text-gray-700">(09/2024 – 03/2026)</div>
                    </div>
                    <p className="mt-2 font-medium  text-black">Software Developer (Working Student)</p>
                    <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Engineered a training portal using Gatsby, Strapi (Headless CMS), JavaScript, GraphQL, and REST APIs, reducing manual content updates by 80%.</li>
                      <li>Developed an algorithm to parse JSON data and establish relational models in Strapi, automating data migration and improving efficiency by 60%.</li>
                      <li>Introduced a freemium feature, boosting engagement by 35% and increasing lead conversion rates.</li>
                      <li>Refined frontend validation processes, minimizing input errors by 40% and enhancing user experience.</li>
                    </ul>
                  </div>
                </div>

                <div className="relative p-8 rounded-3xl bg-white shadow-lg mt-8">
                  <div className="w-full">
                    <div className="flex flex-row justify-between  items-baseline text-lg font-medium">
                      <div className="bg-blue-400 px-2 py-1 rounded-md text-white">Oracle Health, Bangalore India</div>
                      <div className="ml-4 text-gray-700">(01/2022 – 03/2024)</div>
                    </div>
                    <p className="mt-2 font-medium  text-black">Full Stack Developer</p>
                    <p className="mt-1 text-sm text-gray-600 italic">SYNAPSE (Health Care Domain)</p>
                    <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Led the development of the SYNAPSE application, reducing manual data entry time by 60% using JavaScript, React.js, Node.js, Ruby on Rails, and Clojure.</li>
                      <li>Developed a modular UI design, reducing development time by 40% for new feature rollouts.</li>
                    </ul>
                  </div>
                </div>

                <div className="relative p-8 rounded-3xl bg-white shadow-lg mt-8">
                  <div className="w-full">
                    <div className="flex flex-row justify-between  items-baseline text-lg font-medium">
                      <div className="bg-blue-400 px-2 py-1 rounded-md text-white">Openturf Technologies, Bangalore India</div>
                      <div className="ml-4 text-gray-700">(01/2020 – 01/2022)</div>
                    </div>
                    <p className="mt-2 font-medium  text-black">Front End Developer</p>
                    <p className="mt-1 text-sm text-gray-600 italic">Sling Media (OTT Platform)</p>
                    <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Designed and improved user interfaces for Sling TV using React.js, Redux Saga, RxJS, and TypeScript, reducing buffering issues.</li>
                      <li>Enhanced customer engagement by implementing real-time streaming optimizations, leading to a 20% increase in active viewing sessions.</li>
                      <li>Reduced page load times by 35%, improving video playback performance across web and smart TV applications.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-100 rounded-b-3xl cursor-default"
        >
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PantryPal Microservices Development */}
              <div className="relative p-8 rounded-3xl bg-white shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100">
                <div className="flex flex-col justify-between items-center">
                  <p className="text-lg font-medium">PantryPal Microservices Development</p>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    Built a microservice-based grocery application using Node.js for authentication and user management.
                    Implemented secure JWT-based authentication, user CRUD operations, Elastic search logger, rate limiter,
                    and API documentation with Swagger. Utilized Docker to containerize and run all services on the same network.
                    Leveraged Vue.js on the frontend for a seamless user experience.
                  </p>
                  <div className="w-full flex flex-row justify-between mt-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Jan 2025</p>
                  </div>
                </div>
              </div>

              {/* CampusCash Expense Manager Development */}
              <div className="relative p-8 rounded-3xl bg-white shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100">
                <div className="flex flex-col justify-between items-center h-full">
                  <p className="text-lg font-medium">CampusCash Expense Manager Development</p>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    Built an expense management application using Vue.js, JavaScript, HTML, and CSS. Implemented advanced expense editing with splitting and validation,
                    daily streak tracking to boost user engagement, and secure authentication with integrated search and filter functionalities for expenses.
                  </p>
                  <div className="w-full flex flex-row justify-between mt-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Dec 2024</p>
                  </div>
                </div>
              </div>

              {/* Integrated Property Management System (PMS) Development */}
              <div className="relative p-8 rounded-3xl bg-white shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100">
                <div className="flex flex-col justify-between items-center h-full">
                  <p className="text-lg font-medium">Integrated Property Management System (PMS) Development</p>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    Implemented a hotel management system using HTML, CSS, JavaScript, JSP, Java Servlets, JDBC, and MySQL. Features include admin and customer functionalities
                    like account management, reservations, and surge pricing.
                  </p>
                  <div className="w-full flex flex-row justify-between mt-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Jun 2024</p>
                  </div>
                </div>
              </div>

              {/* Comprehensive UI/UX Solution for E-commerce Platform */}
              <div className="relative p-8 rounded-3xl bg-white shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100">
                <div className="flex flex-col justify-between items-center h-full">
                  <p className="text-lg font-medium">Comprehensive UI/UX Solution for E-commerce Platform</p>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    Created a responsive landing page, store page, and about-us page for trekking tools using JavaScript, Tailwind, Material Design, custom fonts,
                    icons, and images.
                  </p>
                  <div className="w-full flex flex-row justify-between mt-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">
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
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-t-3xl cursor-default"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold">Contact</h2>
            <p className="mt-4 text-lg cursor-default">Feel free to reach out to me at <a href="mailto:manujanardhana55@gmail.com" className="underline">manujanardhana55@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/manu-janardhana/" className="underline">LinkedIn</a> || <a href="https://github.com/manuj55" className="underline">Github</a>.</p>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-white text-center">
        <p className="text-gray-600 cursor-progress">&copy; 2025 Manu Janardhana</p>
      </footer>
    </div>
  );
}
