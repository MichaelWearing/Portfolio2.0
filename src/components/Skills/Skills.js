import React from "react";

// Font Awesome Icons
import { FaNodeJs } from "react-icons/fa";

// Images
import JSLogo from "../../images/JSLogo.png";
import TypeScriptLogo from "../../images/TypeScriptLogo.png";
import ReactLogo from "../../images/ReactLogo.png";
import ExpressLogo from "../../images/ExpressLogo.png";
import HTMLLogo from "../../images/HTMLLogo.png";
import CSSLogo from "../../images/CSSLogo.png";
import NextLogo from "../../images/NextLogo.png";
import MongoDBLogo from "../../images/MongoDBLogo.png";
import PostGresLogo from "../../images/PostGresLogo.png";
import JavaLogo from "../../images/JavaLogo.png";
import GoLogo from "../../images/GoLogo.png";

// Styled-Components
import {
  SkillsWrapper,
  SkillsTitle,
  Underline,
  IconGridContainer,
  GridItem,
  TechLogo,
  TechName,
  NodeWrapper,
  TechLogoNext,
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
          <TechLogo src={TypeScriptLogo} />
          <TechName>TypeScript</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={ReactLogo} />
          <TechName>React</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={ExpressLogo} />
          <TechName>Express</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={HTMLLogo} />
          <TechName>HTML</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={CSSLogo} />
          <TechName>CSS</TechName>
        </GridItem>
        <GridItem>
          <NodeWrapper>
            <FaNodeJs />
          </NodeWrapper>
          <TechName>Node</TechName>
        </GridItem>
        <GridItem>
          <TechLogoNext src={NextLogo} />
          <TechName>Next</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={MongoDBLogo} />
          <TechName>MongoDB</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={PostGresLogo} />
          <TechName>PostgresQL</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={JavaLogo} />
          <TechName>Java</TechName>
        </GridItem>
        <GridItem>
          <TechLogo src={GoLogo} />
          <TechName>Golang</TechName>
        </GridItem>
      </IconGridContainer>
    </SkillsWrapper>
  );
}
