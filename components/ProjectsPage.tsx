import React from 'react';

const researchProjects = [
  {
    title: 'Automated Control of External Ventricular Drain for Neuro-ICU',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/5e12b7a912e5668e219e59275e7a9668.png',
    descriptionPoints: [
      'Built an automated intracranial pressure leveling system with a pressure sensor, linear actuator, depth camera, and stepper motor.',
      'Recognized the leveling system as a following stabilization problem, using full state feedback and internal model principle to design controller and analyze system error.',
      'Conducted validation experiments using the VICON motion capture device to ensure the controlling quality with real-time human motion.',
    ],
    link: { text: '[PDF]', href: '#' }
  },
  {
    title: 'Adhesive EEG Device for Enhanced Comfort (Bachelor Capstone: IQP)',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/c50c18400030c6a836885ca66d21463a.png',
    descriptionPoints: [
      'Constructed a compact wearable EEG chip (based on TGAM) for monitoring sleep spindle.',
      'Designed for enhanced comfort and long-term use in non-clinical environments.',
    ],
    link: { text: '[Details]', href: '#' }
  },
  {
    title: 'Advancing Carbon Nanomaterials for Reduction of Automotive Engine Friction',
    imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/6f03d9e8-nanomaterials.png',
    descriptionPoints: [
        'Formulated a hypothesis on using h-BN nanosheets and spherical W nanoparticles as additives to reduce engine friction.',
        'Proposed using Molecular Dynamics Simulation to test and validate the hypothesis.',
    ],
    link: { text: '[PPT]', href: '#' }
  },
  {
      title: 'F1 Chassis Aerodynamics Simulation',
      imageUrl: 'https://storage.googleapis.com/aistudio-programmable-ui-project-assets/4a1b5c7d-f1-simulation.png',
      descriptionPoints: [
          'Designed an F1 car chassis using SolidWorks.',
          'Analyzed its aerodynamic properties using Ansys and MATLAB.',
      ],
      link: { text: '[PPT]', href: '#' }
  },
];

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
      
      <section>
        <h2 className="text-3xl font-bold text-gray-700 mb-8 border-b pb-3">Research Projects</h2>
        <div className="space-y-12">
          {researchProjects.map(p => <ProjectItem key={p.title} {...p} />)}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;