//general imports
import './App.css';
import './custom.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import React, { useState } from 'react';
//container components
import Header from './visuals/Header';
import Box from './visuals/Box';
import Contact from './visuals/Contact';
//html components
import P from './visuals/P';
//navbar
import Menu from './visuals/Menu';
//other useful components
import AboutMe from './visuals/AboutMe';
import Video from './visuals/Video';
import ProjectList from './components/ProjectList';
import Resume from './visuals/Resume';


function App() {
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleAboutMeOpen = () => {
    setAboutMeOpen(!aboutMeOpen);
    if(projectsOpen) setProjectsOpen(false);
    if(resumeOpen) setResumeOpen(false);
    if(contactOpen) setContactOpen(false);
  }

  const handleProjectsOpen = () => {
    setProjectsOpen(!projectsOpen);
    if(aboutMeOpen) setAboutMeOpen(false);
    if(resumeOpen) setResumeOpen(false);
    if(contactOpen) setContactOpen(false);
  }

  const handleResumeOpen = () => {
    setResumeOpen(!resumeOpen);
    if(aboutMeOpen) setAboutMeOpen(false);
    if(projectsOpen) setProjectsOpen(false);
    if(contactOpen) setContactOpen(false);

  }

  const handleContactOpen = () => {
    setContactOpen(!contactOpen);
    if(aboutMeOpen) setAboutMeOpen(false);
    if(projectsOpen) setProjectsOpen(false);
    if(resumeOpen) setResumeOpen(false);
  }

  return (
    <div>
      <Container className = "container-fluid pt-5 d-flex justify-content-around">
        <Header/>
      </Container>
      <Container className = "container-fluid pt-5"></Container>
      <Menu 
        onAboutMeOpen = { handleAboutMeOpen } 
        onProjectsOpen = { handleProjectsOpen } 
        onResumeOpen = { handleResumeOpen } 
        onContactOpen = { handleContactOpen }
        >
      </Menu>
      {aboutMeOpen &&
            <Container>
            <Row className = "justify-content-around">
              <Col className = "col-6 justify-content-around">
                <AboutMe/>
              </Col>
              <Col className = "col-6 justify-content-around">
                <Video/>
              </Col>
            </Row>
            <Container className = "container-fluid pt-5"></Container>
          </Container>
      }
      {projectsOpen &&
        <Container className = "justify-content-around">
            <ProjectList/>
            <Container className = "container-fluid pt-5"></Container>
        </Container>
      }
      {resumeOpen &&
        <Container>
          <Resume pdf = "./Images/Langille Resume ATS 2023.pdf" />
        </Container>
      }
      {contactOpen &&
        <Container>
        <Col></Col>
        <Contact/>
        <Col></Col>
        <Container className = "container-fluid pt-5"></Container>
        </Container>
      }
      <Container className = "container-fluid pt-5"></Container>
    </div>
  );
}

export default App;
