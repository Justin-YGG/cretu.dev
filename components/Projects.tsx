import ProjectCard from './ProjectCard';
import React from 'react';
import { projects } from '../data/projects';
import { useState } from 'react';

const Projects: React.FC = () => {
  const [ShortResults, setShortResults] = useState(true);

  const filtered = projects.filter((val, i) => i < 5);
  return (
    <div className="flex flex-col space-y-6 max-w-2xl">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight text-gray-800 dark:text-gray-100">
        Projects
      </h2>
      {ShortResults &&
        filtered.map((data) => <ProjectCard key={data.name} data={data} />)}
      {!ShortResults &&
        projects.map((data) => <ProjectCard key={data.name} data={data} />)}
      <button
        onClick={() => setShortResults(!ShortResults)}
        className="mx-auto px-4 py-2 rounded-md text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-800 transition-all"
      >
        {ShortResults ? 'Show More' : 'Show less'}
      </button>
    </div>
  );
};

export default Projects;
