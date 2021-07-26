import React from "react";

// Styles
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
} from "./SideBar.styles";

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
      </SideBarWrapper>
    </SideBarContainer>
  );
}
