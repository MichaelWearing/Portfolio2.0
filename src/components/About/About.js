import React from "react";

// Images
import mikey from "../../images/Mikey.png";


// Styled-Components
import {
  AboutWrapper,
  AboutContent,
  AboutTitle,
  Underline,
  AboutText,
  AboutText1,
  AboutText2,
  MikeyImg,
} from "./About.styles";

export default function About() {
  return (
    <AboutWrapper className="about">
      <AboutTitle>About me</AboutTitle>
      <Underline class="underline" />
      <AboutContent>
        <AboutText>
          <AboutText1>
            Hobby Coder, turned Full-Stack Developer. I began my tech journey by
            self teaching myself Java before landing my first position in a
            company. There is nothing better than listening to Lo-Fi on YouTube
            while coding away for hours on end. I am a flexible person, able to
            fit into any role in a team.
          </AboutText1>
          <AboutText2>
            I am orginally from England and have always had a passion for Tech.
            Growing up playing video games, problem solving has always been
            somthing that I am great at.
          </AboutText2>
        </AboutText>
        <MikeyImg src={mikey} />
      </AboutContent>
    </AboutWrapper>
  );
}
