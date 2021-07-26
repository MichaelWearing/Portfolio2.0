import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 68vh;

  @media screen and (max-width: 768px) {
    min-height: 55vh;
  }
`;

export const ContactTitle = styled.h1`
  text-align: center;
  padding: 16vh 0 1vh 0;
  font-size: 4vh;

  @media screen and (max-width: 768px) {
    padding: 8vh 0 1vh 0;
  }
`;

export const Underline = styled.div`
  width: 9vh;
  height: 4px;
  margin-bottom: 4vh;
  background: deepskyblue;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactText = styled.p`
  text-align: center;
  width: 100%;
  padding: 0 30% 5vh;

  @media screen and (max-width: 768px) {
    padding: 0 5% 5vh;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;

  width: 20vh;

  @media screen and (max-width: 768px) {
    width: 36vh;
  }
`;

export const Icon = styled.a`
  font-size: 4vh;
  color: black;

  &:hover {
    color: deepskyblue;
  }

  @media screen and (max-width: 768px) {
    font-size: 6vh;
  }
`;
