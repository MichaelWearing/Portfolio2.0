import React from "react";

// React-Icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Styles
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
  IconWrapper,
  IconLinks,
} from "./SideBar.styles";

// To-Do
//
// Important
// Add Github and Linkedin Logos
//
// Maybe
//

export default function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarLink to="about" smooth={true} offset={-50} onClick={toggle}>
          About
        </SideBarLink>
        <SideBarLink to="skills" smooth={true} offset={-50} onClick={toggle}>
          Skills
        </SideBarLink>
        <SideBarLink to="projects" smooth={true} offset={-50} onClick={toggle}>
          Projects
        </SideBarLink>
        <SideBarLink to="contact" smooth={true} offset={100} onClick={toggle}>
          Contact
        </SideBarLink>
        <IconWrapper>
          <IconLinks
            href="https://www.linkedin.com/in/michael-wearing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </IconLinks>
          <IconLinks
            href="mailto:mikeywearing@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </IconLinks>
          <IconLinks
            href="https://github.com/MichaelWearing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </IconLinks>
        </IconWrapper>
      </SideBarWrapper>
    </SideBarContainer>
  );
}
