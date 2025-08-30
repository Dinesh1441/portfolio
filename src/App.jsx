import { useState } from 'react';

export default function PortfolioDashboard() {
  const [activeSection, setActiveSection] = useState('skills');

  // Skill icons mapping
  const skillIcons = {
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Tailwind CSS': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Shopify': 'https://cdn.freebiesupply.com/logos/large/2x/shopify-logo-png-transparent.png'
  };

  // Projects data
  const projects = [
    { 
      name: 'Car Street India', 
      url: 'https://www.carstreetindia.com/',
      category: 'E-commerce',
      description: 'Automotive marketplace with advanced filtering and booking system'
    },
    { 
      name: 'Ruzain Alwafi', 
      url: 'https://www.ruzainalwafi.com/',
      category: 'Portfolio',
      description: 'Professional portfolio website with modern design'
    },
    { 
      name: 'Micropath Laboratory', 
      url: 'https://www.micropathlaboratory.com/',
      category: 'Healthcare',
      description: 'Medical laboratory website with appointment booking system'
    },
    { 
      name: 'Parshwanath Industries', 
      url: 'https://www.parshwanathindustries.in/',
      category: 'Industrial',
      description: 'Industrial company website showcasing products and services'
    },
    { 
      name: 'My Inner Side', 
      url: 'https://myinnerside.com/',
      category: 'Wellness',
      description: 'Mental wellness platform with resources and community features'
    },
    { 
      name: 'Ishmi Herbal', 
      url: 'https://ishmiherbal.com/',
      category: 'E-commerce',
      description: 'Herbal products e-commerce store with intuitive shopping experience'
    },
    { 
      name: 'The Influential Wardrobe', 
      url: 'https://theinfluentialwardrobe.com/',
      category: 'Fashion',
      description: 'Fashion blog and e-commerce platform with modern UI'
    },
    { 
      name: 'Health Story', 
      url: 'https://healthstory.net.in/',
      category: 'Healthcare',
      description: 'Healthcare information portal with patient resources'
    },
    { 
      name: 'Taj Petro', 
      url: 'https://tajpetro.com/',
      category: 'Industrial',
      description: 'Petroleum products company website with service information'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 p-4">
      {/* Document Head */}
      <head>
        <title>Dinesh Sahu | Senior Web Developer</title>
        <meta name="description" content="Professional portfolio of Dinesh Sahu, Senior Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 p-6 bg-white rounded-xl shadow-md">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 mr-4 shadow-md">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DS</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">DINESH SAHU</h1>
              <h2 className="text-blue-500 font-medium">SR. WEB DEVELOPER</h2>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['skills', 'portfolio',  'experience', 'about'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - About & Contact */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">ABOUT ME</h3>
              <p className="text-gray-600 mb-4">
                Skilled Web Developer with 2.5 years of experience in designing and developing dynamic, 
                responsive, and SEO-friendly websites. Proficient in both frontend and backend technologies.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">CONTACT</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 8595821441
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    dineshsahu225678@gmail.com
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Inderpuri, New Delhi - 110012
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    https://www.linkedin.com/in/dinesh-sahu-/
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">EDUCATION</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">JULY 2021 - AUGUST 2023</p>
                  <p className="text-blue-500">IGNOU</p>
                  <p className="text-gray-600">Pursuing Bachelor of Computer Applications (BCA)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-700">JUNE 2022 - JULY 2023</p>
                  <p className="text-blue-500">SYNTAX WORLD</p>
                  <p className="text-gray-600">Completed Web Development course</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-700">APRIL 2020 - APRIL 2021</p>
                  <p className="text-blue-500">NP SR SEC SCHOOL, NEW DELHI</p>
                  <p className="text-gray-600">Completed higher secondary education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Dynamic Content */}
          <div className="lg:col-span-2">
            {activeSection === 'skills' && (
              <div className="bg-white rounded-xl p-6 h-full shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-500">TECHNICAL SKILLS</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {Object.entries(skillIcons).map(([skill, icon]) => (
                    <div key={skill} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center shadow-sm">
                      <img src={icon} alt={skill} className="h-12 w-12 mb-2" />
                      <span className="text-sm font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">LANGUAGES</h3>
                  <div className="flex gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center flex-1 shadow-sm">
                      English
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center flex-1 shadow-sm">
                      Hindi
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="bg-white rounded-xl p-6 h-full shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-500">WORK EXPERIENCE</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-500">Webkart Digital Pvt. Ltd.</h3>
                    <p className="font-semibold mb-4 text-gray-700">Senior Web Developer</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Developed a secure, interactive web application with a modern front-end framework and an intuitive user interface</li>
                      <li>Developed a content management system for a media company</li>
                      <li>Refactored legacy code to improve reliability, scalability and maintainability</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-500">Recreators Design and Media Private Limited</h3>
                    <p className="font-semibold mb-4 text-gray-700">Senior Web Developer</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Expanded skills in MERN Stack Development to build high-performance web applications</li>
                      <li>Developed and deployed projects using React for dynamic front-end interfaces</li>
                      <li>Designed and implemented Shopify eCommerce websites with custom themes and integrations</li>
                      <li>Built a booking system website with an integrated CRM to manage and assign bookings efficiently</li>
                      <li>Focused on scalable architecture, modern UI/UX, and secure deployment practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'portfolio' && (
              <div className="bg-white rounded-xl p-6 h-full shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-500">PORTFOLIO</h2>
                <p className="text-gray-600 mb-6">Here are some of the websites I've developed, showcasing my skills in various technologies and industries.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-sm border border-gray-100">
                      <div className="h-40 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center relative">
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium text-blue-600 shadow-sm">
                          {project.category}
                        </div>
                        <div className="text-center p-4">
                          <span className="text-4xl font-bold text-blue-500">{project.name[0]}</span>
                          <h3 className="text-lg font-semibold mt-2 text-gray-800">{project.name}</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
                        >
                          Visit Website
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'about' && (
              <div className="bg-white rounded-xl p-6 h-full shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-500">PROFILE</h2>
                <p className="text-gray-600 mb-6">
                  Dinesh Sahu is a skilled Web Developer with 2.5 years of experience in designing and developing dynamic, responsive, and SEO-friendly websites. 
                  Proficient in both frontend and backend technologies, Dinesh excels in creating seamless user interfaces, optimizing website functionality, 
                  and implementing innovative web solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-blue-500">MY APPROACH</h3>
                    <p className="text-gray-600">
                      I believe in creating web solutions that not only look beautiful but also function flawlessly
                      across all devices. My focus is on performance, accessibility, and user experience.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-blue-500">MY MISSION</h3>
                    <p className="text-gray-600">
                      To deliver high-quality web applications that solve real-world problems and provide
                      exceptional value to users and businesses alike.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-8 py-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Dinesh Sahu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}