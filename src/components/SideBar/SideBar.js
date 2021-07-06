import React from "react";

// Styles
import { SideBarContainer } from "./SideBar.styles";

export default function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle} >
        Hey
    </SideBarContainer>
  )
}
