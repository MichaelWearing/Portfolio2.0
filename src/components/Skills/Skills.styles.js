import styled from "styled-components";

export const SkillsWrapper = styled.div`
  background: white;

  min-height: 94vh;
`;

export const SkillsTitle = styled.h1`
  text-align: center;
  padding: 5vh 0 1vh 0;
  font-size: 4vh;
`;

export const Underline = styled.div`
  width: 9vh;
  height: 4px;
  margin-bottom: 4vh;
  background: deepskyblue;
  margin-left: auto;
  margin-right: auto;
`;

export const IconGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  font-size: 10vh;

  padding-top: 14vh;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridItem = styled.div`
  padding: 1rem 1.5rem;
  display: grid;
  place-items: center;
`;

export const TechLogo = styled.img`
  height: 10vh;
  width: 10vh;
`;

export const TechName = styled.p`
  padding-top: 1vh;
  font-size: 2vh;
`;
