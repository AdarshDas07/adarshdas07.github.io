import React from 'react';

const awards = [
  {
    title: '2nd Prize, Carbon Nanomaterials Presentation',
    description: 'Awarded by Metallum 5.0, IIEST Shibpur for a presentation on advancing carbon nanomaterials for automotive applications. Includes a cash prize of Rs. 2000.',
    imageUrl: '/images/carbon nanomaterials.png',
  },
  {
    title: 'Certificate of Appreciation',
    description: 'From the E-Drive Workshop for active participation and contribution during the workshop on electric vehicles.',
    imageUrl: '/images/electric vehicles.jpg',
  },
  {
    title: 'Winner & Best Player Award',
    description: 'At the Diamond City West Football Tournament (2022) for leading the team to victory.',
    imageUrl: '/images/award-football.png',
  },
  {
    title: 'Tournament Winner (Multiple)',
    description: 'Achieved victory in several competitive cricket and online BGMI tournaments, earning cash awards.',
    imageUrl: '/images/award-esports.png',
  },
  {
    title: '2nd Prize, Intra-School Table Tennis',
    description: 'Secured the runner-up position in the intra-school table tennis competition at VMS (2018).',
    imageUrl: '/images/award-table-tennis.png',
  },
   {
    title: 'Certificate of Participation',
    description: 'Represented the school in the inter-school table tennis tournament at Birla Bharati (2019).',
    imageUrl: '/images/award-certificate-participation.png',
  }
];


const AwardsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div className="py-8 md:py-12">
      <div className="mb-8">
        <img 
          src="/images/header.jpg" 
          alt="Achievements Header" 
          className="w-full h-56 md:h-80 object-cover rounded-lg shadow-md opacity-60"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">Achievements & Recognitions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {awards.map((award, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col">
            <div 
              className="h-64 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(award.imageUrl)}
            >
              <img 
                src={award.imageUrl} 
                alt={award.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">{award.title}</h3>
              <p className="mt-2 text-gray-600 text-justify">{award.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white p-2 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage} 
              alt="Enlarged award" 
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-opacity"
              aria-label="Close image view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardsPage;
