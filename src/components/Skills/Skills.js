import React from "react";

// Font Awesome Icons
import { FaJs, FaJava } from "react-icons/fa";

// Images
import JSLogo from "../../images/JSLogo.png";
import JavaLogo from "../../images/JavaLogo.png";

// Styled-Components
import {
  SkillsWrapper,
  SkillsTitle,
  Underline,
  IconGridContainer,
  GridItem,
  TechLogo,
  TechName,
} from "./Skills.styles";

export default function Skills() {
  return (
    <SkillsWrapper className="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <Underline class="underline" />
      <IconGridContainer>
        <GridItem>
          <TechLogo src={JSLogo} />
          <TechName>JavaScript</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={JavaLogo} />
        </GridItem>
        <GridItem>
          <TechLogo src={JSLogo} />
          <TechName>JavaScript</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={JavaLogo} />
        </GridItem>
        <GridItem>
          <TechLogo src={JSLogo} />
          <TechName>JavaScript</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={JavaLogo} />
        </GridItem>
        <GridItem>
          <TechLogo src={JSLogo} />
          <TechName>JavaScript</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={JavaLogo} />
        </GridItem>
        <GridItem>
          <TechLogo src={JSLogo} />
          <TechName>JavaScript</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={JavaLogo} />
        </GridItem>
        <GridItem>
          <TechLogo src={JSLogo} />
          <TechName>JavaScript</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={JavaLogo} />
        </GridItem>
      </IconGridContainer>
    </SkillsWrapper>
  );
}
