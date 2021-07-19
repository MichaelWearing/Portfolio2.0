import styled, { keyframes } from "styled-components";

export const HeroWrapper = styled.div`
  /* background: #c7d2eb; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 0 30px;
  ${"" /* min-height: 94vh; */}
`;

export const HeroH1Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  ${"" /* padding: 0 50px; */}

  min-height: 94vh;
  padding-top: 27vh;

  cursor: default;

  @media screen and (min-width: 768px) {
    width: 55%;
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
`;

export const HeroH1Wrapper = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 12vh;

  animation: ${FadeIn} 2s;

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

  @media screen and (min-width: 768px) {
    width: 55%;
  }
`;
