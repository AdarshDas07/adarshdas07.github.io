import React from 'react';
import { BuildingIcon, EmailIcon, GithubIcon, LinkedInIcon } from './Icons';

const academicLinks = [
  { Icon: BuildingIcon, text: 'Indian Institute of Engineering Science and Technology Shibpur (IIESTS)', href: 'https://www.iiests.ac.in/' },
  { Icon: EmailIcon, text: 'Email', href: 'mailto:adarshdass07@gmail.com' },
  { Icon: GithubIcon, text: 'GitHub', href: 'https://github.com/AdarshDas07' },
  { Icon: LinkedInIcon, text: 'LinkedIn', href: 'https://www.linkedin.com/in/adarshdas07', colorClass: 'text-[#007BB6]' },
];

const recentActivitiesTimeline = [
    { date: 'August 22, 2021', description: 'Began Bachelor of Technology in Metallurgy and Materials Engineering at Indian Institute of Engineering Science and Technology (IIEST) Shibpur.' },
    { date: '2022', description: 'Received Winner + Best Player Award at Diamond City West Football Tournament.' },
    { date: '2023', description: 'Attended the E-drive workshop on Electric Vehicles organized by Tech Analogy.' },
    { date: 'Ongoing', description: 'Actively seeking research opportunities in Molecular Dynamics Simulation, Carbon Nanomaterials, and Internal Combustion Engines.' },
];

const researchProjectsTimeline = [
  {
    date: 'Summer 2023',
    title: 'Carbon Nanomaterials',
    details: [
      'Research Intern (Mentor: Prof. Anirban)',
      'Investigated h-BN nanosheets and W nanoparticles as lubricant additives using Molecular Dynamics.'
    ],
  },
  {
    date: 'Summer 2022',
    title: 'F1 Chassis Aerodynamics',
    details: [
        'Course Project (Mentors: Tech Analogy)',
        'Designed an F1 car chassis in SolidWorks and performed aerodynamic analysis using Ansys and MATLAB.'
    ],
  },
  {
    date: 'Spring 2022',
    title: 'Adhesive EEG Device',
    details: [
        'Bachelor Capstone Project',
        'Constructed a compact wearable EEG chip (based on TGAM) for monitoring sleep spindle.'
    ],
  },
  {
    date: 'Fall 2021',
    title: 'Material Characterization',
    details: [
        'Course Project',
        'Analyzed mechanical properties of various alloys using tensile testing and microscopy.'
    ],
  },
];


const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row py-8 md:py-12 gap-8">
      <aside className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
        <div className="sticky top-8 text-left">
          
          <img 
            src="/images/profile-photo.png" 
            alt="Adarsh Das"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <h2 className="text-3xl font-bold mt-4 text-gray-800">Adarsh Das</h2>
          <p className="text-lg text-gray-600 mt-1">Undergraduate Student</p>
          
          <ul className="mt-6 space-y-3">
             {academicLinks.map(({ Icon, text, href, colorClass }) => (
                <li key={text} className="flex items-center">
                    <Icon className={`w-6 h-6 mr-3 flex-shrink-0 ${colorClass || 'text-gray-500'}`} />
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors duration-200">
                        {text}
                    </a>
                </li>
             ))}
          </ul>
        </div>
      </aside>

      <main className="w-full md:w-2/3 lg:w-3/4">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">About Me</h2>
          <div className="mt-4 text-lg text-gray-700 space-y-4 leading-relaxed text-justify">
            <p>
              I am a final year undergraduate student at the Indian Institute of Engineering Science and Technology (IIEST) Shibpur, majoring in Metallurgy and Materials Engineering. I have a strong passion for computational materials science and engineering applications, with specific research interests in Molecular Dynamics Simulation, Carbon Nanomaterials, and Internal Combustion Engines.
            </p>
            <p>
              My academic journey has equipped me with a solid foundation in Materials Engineering principles and hands-on experience with various software tools like Python, MATLAB, SolidWorks, and Ansys. I am eager to apply my skills to solve challenging problems and contribute to innovative research projects. I am applying for PhD programs in Material Science and Engineering at US universities with a goal to expand my learning and potentially grow in my research career.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">Recent Activities</h2>
          <ul className="mt-4 space-y-6">
            {recentActivitiesTimeline.map((item, index) => (
              <li key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <p className="font-mono font-bold text-lg text-red-500 w-full sm:w-40 flex-shrink-0">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="mt-12">
            {/* FIX: Removed the link from the section title */}
            <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">Research Projects</h2>
            <div className="relative mt-12 w-full max-w-4xl mx-auto pt-4 pb-4">
                <div 
                    className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 transform -translate-x-1/2"
                    style={{ background: 'linear-gradient(to bottom, transparent, #333333 10%, #333333 90%, transparent)' }}
                ></div>
                
                <div className="space-y-12 md:space-y-16">
                    {researchProjectsTimeline.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            // FIX: Changed the outer element back to a div
                            <div key={index} className="relative flex items-start md:items-center">
                                {/* Dot */}
                                <div className="absolute left-6 md:left-1/2 top-2 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full border-4 border-[#FF6F61] z-10"></div>
                                
                                {/* Content */}
                                <div className={`w-full pl-12 text-left md:w-1/2 md:pl-0 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'}`}>
                                    <div className={`inline-flex items-center gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                        {/* FIX: Wrapped only the title box in the 'a' tag */}
                                        <a href="/projects" className="relative px-4 py-2 bg-gray-100 rounded-lg shadow-sm hover:opacity-80 transition-opacity">
                                            <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                                            <div className={`
                                                absolute top-1/2 -translate-y-1/2 w-0 h-0 
                                                border-t-8 border-t-transparent border-b-8 border-b-transparent
                                                left-[-8px] border-r-8 border-r-gray-100 
                                                ${isLeft ? 'md:left-auto md:right-[-8px] md:border-r-0 md:border-l-8 md:border-l-gray-100' : ''}
                                            `}></div>
                                        </a>
                                        <span className="text-sm italic text-[#FF6F61]">{item.date}</span>
                                    </div>
                                    
                                    <div className="mt-3 space-y-1">
                                      {item.details.map((line, i) => (
                                          <p key={i} className={i === 0 ? 'text-base text-gray-900' : 'text-sm text-gray-600'}>
                                            {line}
                                          </p>
                                      ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
