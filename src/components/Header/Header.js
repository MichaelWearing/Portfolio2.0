import React from "react";

// react-icons
import { FaBars } from "react-icons/fa";

import {
  HeaderContainer,
  HeaderMyName,
  HeaderMenu,
  HeaderItem,
  HeaderLinks,
  HeaderIcons,
  LinkedinIcon,
  GithubIcon,
  MobileIcon,
} from "./Header.styles";

import { FaGithub, FaLinkedin } from "react-icons/fa";

// To-Do
//
// Important
// Work on making it responsive - maybe done
// Decide on background color and font
//
// Maybe
// 

export default function Header({ toggle }) {
  return (
    <HeaderContainer>
      <HeaderMyName to="info" smooth={true} offset={-100}>
        Michael Wearing
      </HeaderMyName>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <HeaderMenu>
        <HeaderItem>
          <HeaderLinks to="about" smooth={true} offset={-50}>
            About
          </HeaderLinks>
        </HeaderItem>
        <HeaderItem>
          <HeaderLinks to="projects" smooth={true} offset={-50}>
            Projects
          </HeaderLinks>
        </HeaderItem>
        {/* <NavItem>
          <NavLinks>Experience</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Skills</NavLinks>
        </NavItem> */}
        <HeaderItem>
          <HeaderLinks to="contact" smooth={true} offset={-50}>
            Contact
          </HeaderLinks>
        </HeaderItem>
        <HeaderIcons>
          <HeaderItem>
            <LinkedinIcon
              href="https://www.linkedin.com/in/michael-wearing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </LinkedinIcon>
          </HeaderItem>
          <HeaderItem>
            <GithubIcon
              href="https://github.com/MichaelWearing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </GithubIcon>
          </HeaderItem>
        </HeaderIcons>
      </HeaderMenu>
    </HeaderContainer>
  );
}
