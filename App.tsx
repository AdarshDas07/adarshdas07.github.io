
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AwardsPage from './components/AwardsPage';
import ExtracurricularsPage from './components/ExtracurricularsPage';
import ResearchComponent from './components/ResearchPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="research" element={<ResearchComponent />} />
          <Route path="awards" element={<AwardsPage />} />
          <Route path="extracurriculars" element={<ExtracurricularsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
