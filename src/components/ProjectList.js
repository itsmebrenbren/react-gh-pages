import React from "react";
import { Col, Row, Container } from "reactstrap";
import ProjectCard from "../visuals/ProjectCard";
import { Project } from "../Data/Projects"; // Import the Project array

export default function ProjectList() {
  return (
    <Row>
      {Project.map((project, index) => (
        <Col key = { index } className = "col-sm-3 justify-content-around">
          <ProjectCard
            title = { project.title }
            subtitle = { project.subtitle }
            img = { project.img }
            alt = { project.alt }
            button = { project.button }
          />
        </Col>
      ))}
    </Row>
  );
}