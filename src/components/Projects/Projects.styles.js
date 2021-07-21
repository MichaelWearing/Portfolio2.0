import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  background: aliceblue;

  min-height: 94vh;
`;

export const ProjectsTitle = styled.h1`
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

export const PortfolioImg = styled.img`
  width: 370px;
  height: 215px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 80%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 20vh;
`;

export const Link = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: black;
  background: lightgray;
  text-decoration: none;

  border: 1px solid black;
  border-radius: 4px;

  padding: 3px 6px;
  width: 9vh;

  cursor: pointer;
`;
