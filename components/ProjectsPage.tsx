import React from 'react';

const researchProjects = [
  {
    title: 'Molecular Dynamics Simulation',
    description: 'Exploring the physical movements of atoms and molecules to understand the properties of materials at a nanoscale level. This involves using computational models to simulate complex systems, providing insights that are often inaccessible through experimental means alone.',
    tags: ['Computational Materials Science', 'Simulation', 'Nanotechnology']
  },
  {
    title: 'Carbon Nanomaterials',
    description: 'Investigating the synthesis, characterization, and application of carbon-based nanomaterials such as graphene, carbon nanotubes, and fullerenes. My focus is on their mechanical, thermal, and electrical properties for advanced applications in composites, electronics, and energy storage.',
    tags: ['Nanomaterials', 'Graphene', 'Composites']
  },
  {
    title: 'Internal Combustion Engines',
    description: 'Studying the thermodynamics, combustion processes, and materials science aspects of internal combustion engines. My interest lies in improving efficiency, reducing emissions, and exploring the use of novel materials and alternative fuels to create more sustainable powertrain systems.',
    tags: ['Thermodynamics', 'Automotive Engineering', 'Clean Energy']
  }
];

const academicProjects = [
  {
    title: 'Friction Stir Welding',
    imageUrl: '/images/FSW.png',
    descriptionPoints: [
      'Rotational speed is a key process parameter in friction stir welding, controlling heat input and material flow.',
      'By tuning this speed, engineers can tailor weld microstructure and performance for different applications.',
    ],
    link: { text: '[PPT]', href: '/Documents/Friction Stir Welding(Adarsh Das).pdf' }
  }
];

// New data for the TechFest Projects section
const techFestProjects = [
  {
    title: 'Carbon Nanomaterials',
    imageUrl: '/images/Carbon nanomaterials.png', // <-- New sample project
    descriptionPoints: [
      'Carbon nano-additives can enhance lubricant performance, but challenges remain with dispersion stability and compatibility with existing additives.',
      'Ongoing research is focused on understanding anti-friction mechanisms, optimizing nano-lubricant formulations for engines, and ensuring their safety and low toxicity.',
      'Combining carbon nanomaterials with h-BN and tungsten nanoparticles shows strong potential to further reduce friction and wear, supported by molecular dynamics and experimental studies.',
    ],
    link: { text: '[PPT]', href: '/Documents/Carbon nanomaterials.pdf' }
  },
  {
    title: 'Giga Casting',
    imageUrl: '/images/Giga casting.png', // <-- New sample project
    descriptionPoints: [
      'Investigated giga-casting technology in electric vehicles, highlighting current industrial trends.',
      'Identified key challenges and outlined future research directions to enhance giga-casting.',
      'Emphasized the need to improve this technology to meet rapidly growing demand for lightweight EVs in the coming decade.',
    ],
    link: { text: '[Poster]', href: '/Documents/Giga Casting_Poster.pdf' }
  },
  {
    title: 'Hydrogen Liquefaction',
    imageUrl: '/images/Hydrogen liquefaction.png', // <-- New sample project
    descriptionPoints: [
      'Studied hydrogen as a clean, renewable energy carrier and the challenges in its storage and transportation.',
      'Identified liquid hydrogen as a promising alternative to gaseous hydrogen for more efficient storage and transport.',
      'Evaluated key factors for liquid hydrogen deployment: energy density, leakage and safety, material compatibility, and infrastructure requirements.',
    ],
    link: { text: '[PPT]', href: '/Documents/Hydrogen Liquefaction.pdf' }
  }
];

const ResearchCard: React.FC<{ title: string; description: string; tags: string[] }> = ({ title, description, tags }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 leading-relaxed text-justify">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
        </div>
    </div>
);

const ProjectItem: React.FC<{ title: string; imageUrl: string; descriptionPoints: string[]; link: { text: string; href: string } }> = ({ title, imageUrl, descriptionPoints, link }) => (
    <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
            <img src={imageUrl} alt={title} className="w-full h-auto object-cover rounded-md border border-gray-200" />
        </div>
        <div className="md:w-2/3 lg:w-3/4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {descriptionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <div className="mt-3">
                <a href={link.href} className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                    {link.text}
                </a>
            </div>
        </div>
    </div>
);

const ProjectsPage: React.FC = () => {
  return (
    <div className="py-8 md:py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
      
      {/* Research Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 border-b pb-3">Research Projects</h2>
        <div className="space-y-12">
          {academicProjects.map(p => <ProjectItem key={p.title} {...p} />)}
        </div>
      </section>
      
      {/* Academic Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 border-b pb-3">Academic Projects</h2>
        <div className="space-y-12">
          {academicProjects.map(p => <ProjectItem key={p.title} {...p} />)}
        </div>
      </section>

      {/* TechFest Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-700 mb-8 border-b pb-3">Technical Fest Projects</h2>
        <div className="space-y-12">
          {techFestProjects.map(p => <ProjectItem key={p.title} {...p} />)}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
