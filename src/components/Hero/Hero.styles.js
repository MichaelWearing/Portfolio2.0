import styled, { keyframes } from "styled-components";

// Images
import HeroBackground1 from "../../images/HeroBackground1.jpg";
import HeroBackground2 from "../../images/HeroBackground2.jpg";
import HeroBackgroundCustom from "../../images/HeroBackgroundCustom.jpg";

import HeroFigma2 from "../../images/HeroFigma2.png";
import HeroFigma3 from "../../images/HeroFigma3.svg";
import HeroFigma4 from "../../images/HeroFigma4.svg";
import HeroFigma5 from "../../images/HeroFigma5.svg";
import HeroFigma7 from "../../images/HeroFigma7.svg";

import HeroFigma1 from "../../images/HeroFigma1.svg";
import HeroFigma6 from "../../images/HeroFigma6.svg";

// Decide if I should keep this background -- Maybe get a diff for both

export const HeroWrapper = styled.div`
  /*  background: white; */
  /* background-size: contain; */
  /* background-repeat: round; */
  /* background-position: left;
  background-image: url(${HeroFigma1});
  background-size: cover; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 0 30px;
`;

export const HeroH1Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  min-height: 94vh;
  padding-top: 27vh;

  max-width: 1000px;

  cursor: default;

  @media screen and (min-width: 1140px) {
    width: 75%;
  }
`;

const FadeIn = keyframes`
    0% { 
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% { 
      opacity: 0;
    }
    75% {
      opacity: 0;
      transform: translateX(-50px);    }
    100% { 
      opacity: 1;
    }
`;

export const HeroGreeting = styled.p`
  color: deepskyblue;
  font-size: 4vh;

  animation: ${FadeIn} 1s ease;

  @media screen and (max-width: 768px) {
    padding-bottom: 2vh;
  }
`;

export const HeroH1Wrapper = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 12vh;

  animation: ${FadeIn} 2s;

  @media screen and (max-width: 1140px) {
    font-size: 9vh;
  }
  @media screen and (max-width: 768px) {
    font-size: 6vh;
  }
`;

const Bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-50px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
`;

export const HeroH1Letters = styled.p`
  &:hover {
    color: deepskyblue;
    animation: ${Bounce} 1s ease;
  }
`;

export const HeroPTag = styled.p`
  color: slategray;
  font-size: 2vh;

  animation: ${FadeIn} 3s ease;

  @media screen and (min-width: 1140px) {
    width: 55%;
  }
  @media screen and (max-width: 1140px) {
    font-size: 2.6vh;
    padding-top: 3vh;
  }
`;

