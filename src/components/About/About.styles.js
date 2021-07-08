import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export const AboutWrapper = styled.div`
  background: #c7d2eb;
`;

export const AboutContent = styled.div`
background: white;

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
  border-radius: 16px;
  margin: auto;
  max-width: 61em;
  min-height: 67vh;
  align-content: center;

  border: 3px solid deepskyblue;
  margin-top: 3vh;
  padding: 0 3vh;
  ${"" /* background: #fff; */}
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5vh;
`;

export const AboutText1 = styled.p`
  ${"" /* background: deepskyblue; */}

  ${"" /* padding: 0 400px; */}
  ${"" /* padding-bottom: 8vh; */}
  ${"" /* text-align: center; */}
  font-size: 22px;
  min-height: 24vh;

  ${
    "" /* @media screen and (min-width: 1500px) {
    padding: 0 550px;
  } */
  }
`;
export const AboutText2 = styled.p`
  ${"" /* background: deepskyblue; */}

  ${"" /* padding: 0 400px 43vh 400px; */}
  ${"" /* text-align: center; */}
  font-size: 22px;
  min-height: 16vh;

  ${
    "" /* @media screen and (min-width: 1500px) {
    padding: 0 550px;
  } */
  }
`;

export const AboutSkills = styled.p`
  font-size: 22px;
  min-height: 18vh;

  ${
    "" /* @media screen and (min-width: 1500px) {
    padding: 0 550px;
  } */
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
`;

export const MikeyImg = styled.img`
  height: 20em;
  width: 20em;

  align-self: center;
`;
