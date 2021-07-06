import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0 24px; */

  background: deepskyblue;
  border-bottom: 1px solid aliceblue;

  min-height: 6vh;

  position: sticky;
  top: 0;

  z-index: 5;
  
  @media screen and (max-width: 768px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0px 25px;
  }
`;

export const HeaderMyName = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;

  font-weight: bold;
  font-size: 1.5em;
  padding-left: 100px;

  cursor: pointer;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;

  padding-right: 100px;

  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderLinks = styled(Link)`
  padding: 1em;

  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const HeaderItem = styled.li`
  font-size: 1.25em;
`;

export const HeaderIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 11vh;
  padding-top: 1vh;
`;

export const Linkedin = styled.img`
  height: 35px;
  width: 35px;
`;

export const GitHub = styled.img`
  height: 35px;
  width: 35px;

  padding-left: 1px;
`;

export const GithubIcon = styled.a`
  color: black;
  font-size: 4vh;

  &:hover {
    color: white;
  }
`;
export const LinkedinIcon = styled.a`
  color: black;
  font-size: 4vh;

  &:hover {
    color: white;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #f7f7f6;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
