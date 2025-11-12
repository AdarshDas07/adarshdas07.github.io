import React from 'react';

// Data for the first section: Academic Awards
const achievements = [
  {
    title: '2nd Prize, Technical Fest - Metallum 5.0, IIEST Shibpur, 2024',
    description: 'Awarded "Certificate of Merit" for presenting a hypothesis on "Advancing Carbon Nanomaterials for Reduction of Automotive Engine Friction by using h-BN nanosheets and spherical W nanoparticles additives: A Hypothesis using Molecular Dynamics Simulation."',
    imageUrl: '/images/Adarsh-Certificate.jpg',
  },
  {
    title: '2nd Prize, Technical Fest - Metallum 5.0, IIEST Shibpur, 2024',
    description: 'Receiving Award from Head of Department 2024.',
    imageUrl: '/images/Adarsh-Prize_Metallum.jpeg',
  },
  {
    title: 'Letter of Recommendation - E-Drive by TechAnalogy',
    description: 'Awarded an LOR for successfully finishing and submiting a project on electric vehicles during the workshop.',
    imageUrl: '/images/AdarshDas_E-drive_LOR.png',
  },
  {
    title: 'Certificate of Appreciation - E-Drive by TechAnalogy',
    description: 'From the E-Drive Workshop for active participation and contribution during the workshop on electric vehicles.',
    imageUrl: '/images/AdarshDas_E-drive_COA.png',
  }
];

// Data for the second section: Sports Awards
const sportsAwards = [
  {
    title: 'Winner & Best Player Award - Football/Soccer',
    description: 'At the Diamond City West Football Tournament (2024) for leading the team to victory.',
    imageUrl: '/images/Adarsh_best_player_plus_winner_award.jpg',
  },
  {
    title: 'Best Player Award - Football/Soccer',
    description: 'Being awarded the best player award at Diamond City West Football Tournament (2024).',
    imageUrl: '/images/Adarsh_football_award.jpg',
  },
  {
    title: 'Certificate of Participation, Inter-School Table Tennis (2019)',
    description: 'Represented the school in the inter-school table tennis tournament at Birla Bharati (2019).',
    imageUrl: '/images/Adarsh_Inter-school_certificate.jpg',
  },
   {
    title: '2nd Prize, Intra-School Table Tennis (2018)',
    description: 'Secured the runner-up position in the intra-school table tennis competition at Vivekananda Mission School (2018).',
    imageUrl: '/images/Adarsh_Intra-school_certificate.jpg',
  }
];

const morePictures = [
  {
    title: '2nd Prize, Technical Fest - Metallum 5.0, IIEST Shibpur, 2024',
    description: 'Awarded "Certificate of Merit" for presenting a hypothesis on "Advancing Carbon Nanomaterials for Reduction of Automotive Engine Friction by using h-BN nanosheets and spherical W nanoparticles additives: A Hypothesis using Molecular Dynamics Simulation."',
    imageUrl: '/images/Adarsh-Certificate.jpg',
  },
  {
    title: '2nd Prize, Technical Fest - Metallum 5.0, IIEST Shibpur, 2024',
    description: 'Receiving Award from Head of Department 2024.',
    imageUrl: '/images/Adarsh-Prize_Metallum.jpeg',
  },
  {
    title: 'Letter of Recommendation - E-Drive by TechAnalogy',
    description: 'Awarded an LOR for successfully finishing and submiting a project on electric vehicles during the workshop.',
    imageUrl: '/images/AdarshDas_E-drive_LOR.png',
  },
  {
    title: 'Certificate of Appreciation - E-Drive by TechAnalogy',
    description: 'From the E-Drive Workshop for active participation and contribution during the workshop on electric vehicles.',
    imageUrl: '/images/AdarshDas_E-drive_COA.png',
  }
];

const AwardsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const AwardCard: React.FC<{ award: { title: string; description: string; imageUrl: string } }> = ({ award }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col">
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
  );

  return (
    <div className="py-8 md:py-12">
      {/* Header Image */}
      <div className="mb-8">
        <img 
          src="/images/header.jpg" 
          alt="Achievements Header" 
          className="w-full h-56 md:h-80 object-cover rounded-lg shadow-md opacity-60"
        />
      </div>

      {/* Section 1: Academic Awards */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">Academic Awards</h1>
        {/* FIX: Removed the scrollable container div */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {achievements.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </section>

      {/* Section 2: Sports Awards */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">Sports Awards</h1>
        {/* FIX: Removed the scrollable container div */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sportsAwards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </section>

      {/* Section 3: More Pictures */}
      <section>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">More Pictures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {morePictures.map((picture, index) => (
            <AwardCard key={index} award={picture} />
          ))}
        </div>
      </section>

      {/* Modal for viewing enlarged image */}
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
