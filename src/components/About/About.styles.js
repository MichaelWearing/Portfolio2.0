import styled from "styled-components";

export const AboutWrapper = styled.div`
   /* background: aliceblue; */
   background: #f0f2f5;

  min-height: 94vh;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
  border-radius: 16px;
  margin: auto;
  max-width: 61em;
  align-content: center;

  padding: 2vh 3vh 8vh 3vh;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const AboutText = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  

  @media screen and (min-width: 768px) {
    padding-right: 5vh;
  }
`;

export const AboutTitle = styled.h1`
  text-align: center;
  padding: 18vh 0 1vh 0;
  font-size: 4vh;

  @media screen and (max-width: 768px) {
    padding: 6vh 0 1vh 0;
  }
`;

export const Underline = styled.div`
  width: 9vh;
  height: 4px;
  margin-bottom: 4vh;
  background: deepskyblue;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    margin-bottom: 1vh;
  }
`;

export const AboutText1 = styled.p`
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;

    padding-bottom: 3vh;
  }
`;
export const AboutText2 = styled.p`
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const AboutSkills = styled.p`
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 250px));
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`;

export const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    font-weight: bold;
  }
`;

export const MikeyImg = styled.img`
  height: 20em;
  width: 20em;

  align-self: center;

  @media screen and (max-width: 768px) {
    height: 14em;
    width: 14em;
  }
`;
