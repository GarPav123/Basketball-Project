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
    <div className={` bg-[#bea7e5] project-card project-${projectNumber} text-2xl font-sans mb-4 bg-[#bea7e5]`}>
      
      <p>{text}</p>
    </div>
  );
};

export default ProjectCard;
