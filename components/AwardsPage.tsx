import React from 'react';

const awards = [
  {
    title: '2nd Prize, Carbon Nanomaterials Presentation',
    description: 'Awarded by Metallum 5.0, IIEST Shibpur for a presentation on advancing carbon nanomaterials for automotive applications. Includes a cash prize of Rs. 2000.',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/ac3748de-academic-award.png',
  },
  {
    title: 'Certificate of Appreciation',
    description: 'From the E-Drive Workshop for active participation and contribution during the workshop on electric vehicles.',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/c5f8e02b-certificate.png',
  },
  {
    title: 'Winner & Best Player Award',
    description: 'At the Diamond City West Football Tournament (2022) for leading the team to victory.',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/a2b1d9c4-football-trophy.png',
  },
  {
    title: 'Tournament Winner (Multiple)',
    description: 'Achieved victory in several competitive cricket and online BGMI tournaments, earning cash awards.',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/8f0e5d1a-esports-award.png',
  },
  {
    title: '2nd Prize, Intra-School Table Tennis',
    description: 'Secured the runner-up position in the intra-school table tennis competition at VMS (2018).',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/7e2d4c9b-table-tennis-medal.png',
  },
   {
    title: 'Certificate of Participation',
    description: 'Represented the school in the inter-school table tennis tournament at Birla Bharati (2019).',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/e1a9b8c0-participation-certificate.png',
  }
];


const AwardsPage: React.FC = () => {
  return (
    <div className="py-8 md:py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">Awards & Recognitions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src={award.imageUrl} 
                alt={award.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-bold text-gray-800">{award.title}</h3>
              <p className="mt-2 text-sm text-gray-600 text-justify">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;
