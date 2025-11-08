import React from 'react';

const researchInterests = [
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


const ResearchComponent: React.FC = () => {
  return (
    <div className="py-8 md:py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">Research Interests</h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
        I am deeply interested in the intersection of materials science and computational simulation to address modern engineering challenges. My primary research interests are focused on the following areas:
      </p>
      <div className="grid md:grid-cols-1 gap-8">
        {researchInterests.map(interest => <ResearchCard key={interest.title} {...interest} />)}
      </div>
    </div>
  );
};

export default ResearchComponent;