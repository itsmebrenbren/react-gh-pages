import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

export default function Menu({ onAboutMeOpen, onProjectsOpen, onResumeOpen, onContactOpen }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleAboutMe = () => {
    onAboutMeOpen();
  }

  const toggleProjects = () => {
    onProjectsOpen();
  }

  const toggleResume = () => {
    onResumeOpen();
  }

  const toggleContact = () => {
    onContactOpen();
  }

  const toggle = () => setNavOpen(!navOpen);

    return (
      <div>
        <Navbar expand="md" className = "menu fixed-bottom">
          <NavbarBrand href = "/" className = "brand text-romantic">Brenna Baker</NavbarBrand>
          <NavbarToggler onClick = { toggle } />
          <Collapse isOpen = { navOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/*<NavLink className = "navtext">About Me</NavLink>*/}
                <button onClick = { toggleAboutMe } className = "button2">About Me</button>
              </NavItem>
              <NavItem>
                {/*<NavLink className = "navtext">Projects</NavLink>*/}
                <button onClick = { toggleProjects } className = "button2">Projects</button>
              </NavItem>
              <NavItem>
                {/*<NavLink className = "navtext">Resume</NavLink>*/}
                <button onClick = { toggleResume } className = "button2">Resume</button>
              </NavItem>
              <NavItem>
                {/*<NavLink className = "navtext">Contact</NavLink>*/}
                <button onClick = { toggleContact } className = "button2">Contact</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}