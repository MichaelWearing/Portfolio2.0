import React from "react";

// Styled-Components
import {
  HeroWrapper,
  HeroH1Container,
  HeroGreeting,
  HeroH1Wrapper,
  HeroH1Letters,
  HeroPTag,
} from "./Hero.styles";

// To-Do
//
// Important
// Work on making it responsive
//
// Maybe
// Add a background image/ video

export default function Hero() {
  return (
    <HeroWrapper className="hero">
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
      </HeroH1Container>
    </HeroWrapper>
  );
}
