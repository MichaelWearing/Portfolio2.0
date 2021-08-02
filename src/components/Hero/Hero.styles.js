import styled, { keyframes } from "styled-components";

// Images
/* import HeroBackground1 from "../../images/HeroBackground1.jpg";
import HeroBackground2 from "../../images/HeroBackground2.jpg";
import HeroBackgroundCustom from "../../images/HeroBackgroundCustom.jpg";

import HeroFigma2 from "../../images/HeroFigma2.png";
import HeroFigma3 from "../../images/HeroFigma3.svg";
import HeroFigma4 from "../../images/HeroFigma4.svg";
import HeroFigma5 from "../../images/HeroFigma5.svg";
import HeroFigma7 from "../../images/HeroFigma7.svg";*/

import HeroFigma1 from "../../images/HeroFigma1.svg";
/*import HeroFigma6 from "../../images/HeroFigma6.svg"; */

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
  @media screen and (max-width: 768px) {
    padding-top: 23vh;
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
  font-size: 20px;

  animation: ${FadeIn} 3s ease;

  @media screen and (min-width: 1140px) {
    width: 55%;
  }
  @media screen and (max-width: 1140px) {
    font-size: 2.6vh;
    padding-top: 3vh;
  }
`;

/////

export const GetInTouchButton = styled.a`
  color: deepskyblue;
  border: 1px solid deepskyblue;
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-top: 30px;
  width: 110px;

  animation: ${FadeIn} 4s ease;

  &:hover,
    &:focus {
      transform: translateY(-3px);
      color: white;
      background: deepskyblue;
    }
`;



/////


export const SideBarEmailWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: deepskyblue;

  @media screen and (max-width: 1140px) {
    right: 5px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SideBarEmailWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: deepskyblue;
  }

  a {
    margin: 20px auto;
    padding: 10px;
    /* line-height: 10px; */
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: black;
    }
  }
`;

export const SideBarEmailWrapperInnerA = styled.a`
  margin: 20px auto;
  padding: 10px;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;

  text-decoration: none;
  text-decoration-skip-ink: none;
  color: deepskyblue;

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
`;

export const SideBarLinkWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: deepskyblue;

  @media screen and (max-width: 1140px) {
    left: 5px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SideBarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: deepskyblue;
  }

  li {
    margin-bottom: 20px;

    a {
      padding: 10px;

      svg {
        width: 25px;
        height: 25px;
        color: deepskyblue;

        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        cursor: pointer;

        &:hover,
        &:focus {
          transform: translateY(-3px);
          color: black;
        }
      }
    }
  }
`;
