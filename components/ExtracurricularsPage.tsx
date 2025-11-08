
import React from 'react';

const workshops = [
  {
    title: 'E-drive Workshop (Electric Vehicle)',
    organizer: 'Tech Analogy',
    year: 2023,
    link: { text: '[doc]', href: '#' }
  },
  {
    title: 'Autodrift Workshop (SolidWorks, Ansys, Matlab)',
    organizer: 'Tech Analogy',
    year: 2021,
    link: { text: '[doc]', href: '#' }
  }
];

const sports = [
  "Winner + Best Player Award at Diamond City West Football Tournament (2022)",
  "Won several cricket and BGMI tournaments",
  "2nd prize for Intra-School Table Tennis at VMS (2018)",
  "Certificate of Participation for Inter-School Table Tennis at Birla Bharati (2019)"
];

const hobbies = [
    { category: 'Outdoor & Indoor Sports', activities: 'Football, Basketball, Cricket, Table Tennis' },
    { category: 'Online Gaming', activities: 'BGMI, Valorant' }
];

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <span className="text-blue-500 mt-1 mr-3">&#10148;</span>
        <span>{children}</span>
    </li>
);

const ExtracurricularsPage: React.FC = () => {
  return (
    <div className="py-8 md:py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Extracurriculars & Interests</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">Sports Achievements</h2>
        <ul className="space-y-3 text-gray-700">
          {sports.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">Workshops Attended</h2>
        <div className="space-y-4">
            {workshops.map((ws, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg text-gray-800">{ws.title}</h3>
                    <p className="text-gray-600">{ws.organizer} - {ws.year}</p>
                    <a href={ws.link.href} className="text-blue-600 hover:underline font-semibold mt-1 inline-block">{ws.link.text}</a>
                </div>
            ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">Hobbies & Interests</h2>
        <div className="space-y-4">
            {hobbies.map((hobby, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg text-gray-800">{hobby.category}</h3>
                    <p className="text-gray-600">{hobby.activities}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ExtracurricularsPage;
