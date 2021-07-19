import styled from "styled-components";

export const AboutWrapper = styled.div`
  background: whitesmoke;
`;

export const AboutContent = styled.div`
  /* background: whitesmoke; */

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
  border-radius: 16px;
  margin: auto;
  max-width: 61em;
  min-height: 67vh;
  align-content: center;

 /*  border: 3px solid deepskyblue; */
  margin-top: 3vh;
  padding: 0 3vh;
  ${"" /* background: #fff; */}

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5vh;
`;

export const AboutText1 = styled.p`
  font-size: 22px;
  min-height: 24vh;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;
export const AboutText2 = styled.p`
  font-size: 22px;
  min-height: 16vh;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const AboutSkills = styled.p`
  font-size: 22px;
  min-height: 18vh;

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
    height: 15em;
    width: 15em;
  }
`;
