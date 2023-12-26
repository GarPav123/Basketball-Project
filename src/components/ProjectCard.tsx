// components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  projectNumber: number;
  heading: string;
  text: string;
}
export interface Project {
    projectNumber: number;
    heading: string;
    text: string;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ projectNumber, heading, text }) => {
  return (
    <div className={` bg-[#A1CCA5] project-card project-${projectNumber} text-2xl font-sans mb-4 bg-[#A1CCA5]`}>
      
      <p>{text}</p>
    </div>
  );
};

export default ProjectCard;
