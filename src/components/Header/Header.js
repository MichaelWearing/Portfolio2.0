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

export default function Header({ toggle }) {
  return (
    <HeaderContainer>
      <HeaderMyName to="hero" smooth={true} offset={-100}>
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
          <HeaderLinks to="skills" smooth={true} offset={-50}>
            Skills
          </HeaderLinks>
        </HeaderItem>
        <HeaderItem>
          <HeaderLinks to="projects" smooth={true} offset={-50}>
            Projects
          </HeaderLinks>
        </HeaderItem>
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
