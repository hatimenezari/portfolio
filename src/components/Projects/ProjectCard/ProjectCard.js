import React from "react";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard({ project }) {
  return (

    <Card>
      <CardLeft>
        <img src={project.img} alt={project.name} style={{ width: '100%', height: '100%' }}/>
      </CardLeft>
      <CardRight>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <TechCardContainer>
          {project.tech_stack.map((tech, index) => (
            <TechCard key={index}>{tech}</TechCard>
          ))}
        </TechCardContainer>
        <BtnGroup>
          {project.github_url.length > 0 && (
            <a
              className="btn SecondaryBtn btn-shadow"
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          )}
          {project.demo_url.length > 0 && (
            <a
              className="btn PrimaryBtn btn-shadow"
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demos ➜
            </a>
          )}
        </BtnGroup>
      </CardRight>
    </Card>

  );
}

export default ProjectCard;
