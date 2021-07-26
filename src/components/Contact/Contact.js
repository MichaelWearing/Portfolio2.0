import React from "react";

// React-Icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Styled-Components
import {
  ContactWrapper,
  ContactTitle,
  Underline,
  ContactText,
  IconWrapper,
  Icon,
} from "./Contact.styles";

export default function Contact() {
  return (
    <ContactWrapper className="contact">
      <ContactTitle>Contact</ContactTitle>
      <Underline class="underline" />
      <ContactText>
        Currently Looking for work! My inbox is open to all however, whether you
        are interested in hiring me or simply have a question, don't hesitate to
        reach out. Have a nice day!
      </ContactText>
      <IconWrapper>
        <Icon
          href="https://www.linkedin.com/in/michael-wearing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Icon>
        <Icon
          href="mailto:mikeywearing@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </Icon>
        <Icon
          href="https://github.com/MichaelWearing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Icon>
      </IconWrapper>
    </ContactWrapper>
  );
}
