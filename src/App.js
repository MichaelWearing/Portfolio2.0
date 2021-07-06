import React, { useState } from "react";

// components
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
    </>
  );
}

export default App;
