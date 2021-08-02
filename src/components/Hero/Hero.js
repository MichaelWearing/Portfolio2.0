import React from "react";

// Images
import HeroBackgroundCustom from "../../images/HeroBackgroundCustom.jpg";

// React-Icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Styled-Components
import {
  HeroWrapper,
  HeroH1Container,
  HeroGreeting,
  HeroH1Wrapper,
  HeroH1Letters,
  HeroPTag,
  SideBarLinkWrapper,
  SideBarLinks,
  SideBarEmailWrapper,
  SideBarEmailWrapperInner,
  SideBarEmailWrapperInnerA,
} from "./Hero.styles";

// To-Do
//
// Important
//
//
// Maybe
// Add a background image/ video

export default function Hero() {
  return (
    <HeroWrapper className="hero">
      {/* <Background src={HeroBackgroundCustom} /> */}
      <HeroH1Container>
        <HeroGreeting>Hi, my name is</HeroGreeting>
        <HeroH1Wrapper>
          <HeroH1Letters>M</HeroH1Letters>
          <HeroH1Letters>i</HeroH1Letters>
          <HeroH1Letters>c</HeroH1Letters>
          <HeroH1Letters>h</HeroH1Letters>
          <HeroH1Letters>a</HeroH1Letters>
          <HeroH1Letters>e</HeroH1Letters>
          <HeroH1Letters>l</HeroH1Letters>
          <HeroH1Letters>&nbsp;</HeroH1Letters>
          <HeroH1Letters>W</HeroH1Letters>
          <HeroH1Letters>e</HeroH1Letters>
          <HeroH1Letters>a</HeroH1Letters>
          <HeroH1Letters>r</HeroH1Letters>
          <HeroH1Letters>i</HeroH1Letters>
          <HeroH1Letters>n</HeroH1Letters>
          <HeroH1Letters>g</HeroH1Letters>
        </HeroH1Wrapper>
        <HeroPTag>
          I'm a full-stack developer based in Stockholm. I love problem solving.
          I am constantly trying to learn new skills and extend my toolkit.
        </HeroPTag>

        <SideBarLinkWrapper>
          <SideBarLinks>
            <li>
              <a
                href="https://github.com/MichaelWearing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/michael-wearing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="mailto:mikeywearing@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
          </SideBarLinks>
        </SideBarLinkWrapper>

        <SideBarEmailWrapper>
          <SideBarEmailWrapperInner>
            <SideBarEmailWrapperInnerA>
              Mikeywearing@gmail.com
            </SideBarEmailWrapperInnerA>
          </SideBarEmailWrapperInner>
        </SideBarEmailWrapper>
      </HeroH1Container>
    </HeroWrapper>
  );
}
