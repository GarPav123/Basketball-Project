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
    <div className={`project-card project-${projectNumber} text-3xl mb-4`}>
      
      <p>{text}</p>
    </div>
  );
};

export default ProjectCard;
