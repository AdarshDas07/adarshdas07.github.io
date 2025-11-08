
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AwardsPage from './components/AwardsPage';
import ExtracurricularsPage from './components/ExtracurricularsPage';
import ResearchComponent from './components/ResearchPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="research" element={<ResearchComponent />} />
          <Route path="awards" element={<AwardsPage />} />
          <Route path="extracurriculars" element={<ExtracurricularsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;