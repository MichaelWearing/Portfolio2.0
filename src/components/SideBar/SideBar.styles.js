import styled from "styled-components";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.aside`
  background: deepskyblue;

  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
`;

export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5vh;
  transition: 0.2s ease-in-out;
  color: black;

  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  justify-self: center;

  width: 20vh;
  padding-top: 10vh;

  @media screen and (max-width: 768px) {
    width: 36vh;
  }
`;

export const IconLinks = styled.a`
  font-size: 4vh;
  color: black;

  &:hover {
    color: deepskyblue;
  }

  @media screen and (max-width: 768px) {
    font-size: 6vh;
  }
`;
