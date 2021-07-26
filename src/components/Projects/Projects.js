import React from "react";
// Imports
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaGithub, FaPlay } from "react-icons/fa";

// Images
import portfolio from "../../images/Portfolio.png";
import starwars from "../../images/StarWars.png";
import shoppingCart from "../../images/ShoppingCart.png";

// Styled-Components
import {
  ProjectsWrapper,
  ProjectsTitle,
  Underline,
  PortfolioImg,
  LinkContainer,
  Link,
  LinkIcon,
  LinkText
} from "./Projects.styles";

export default function Projects() {
  return (
    <ProjectsWrapper className="projects">
          <ProjectsTitle>Projects</ProjectsTitle>
          <Underline class="underline"/>
      <VerticalTimeline>
        <VerticalTimelineElement
          icon={<FaReact />}
          iconStyle={{ background: "deepskyblue", color: "white" }}
          contentStyle={{ background: "#fff", color: "" }}
        >
          <h3>Portfolio Site</h3>
          <h4>05-02-2021</h4>
          <br />
          <PortfolioImg src={portfolio} />
          <br />
          <h4>Description: </h4>
          <p>This is a link to the code for this website.</p>
          <br />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MichaelWearing/Portfolio"
          >
            <FaGithub />
            Code
          </Link>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaReact />}
          iconStyle={{ background: "deepskyblue", color: "#fff" }}
        >
          <h3>StarWars App Hackday Project</h3>
          <h4>06-11-2020</h4>
          <br />
          <PortfolioImg src={starwars} />
          <br />
          <h4>Description: </h4>
          <p>
            This is a project I made towards the end of my time at salt. This
            app was made in 1 day. It is an app that allows the user to choose a
            planet, and then a character from that planet, and finally see
            information about that character.
          </p>
          <br />
          <LinkContainer>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MichaelWearing/Salt-HackDay-StarWars"
            >
              <FaGithub />
              Code
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MichaelWearing/Salt-HackDay-StarWars"
            >
              <FaPlay />
              Demo
            </Link>
          </LinkContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaReact />}
          iconStyle={{ background: "deepskyblue", color: "#fff" }}
        >
          <h3>TypeScript React Shop</h3>
          <h4>05-07-2021</h4>
          <br />
          <PortfolioImg src={shoppingCart} />
          <br />
          <h4>Description: </h4>
          <p>
            A TypeScript/ React Shopping Cart Application. It uses the free Fake
            Store API to generate products for the store. :
            https://fakestoreapi.com/
          </p>
          <br />
          <LinkContainer>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MichaelWearing/TypeScriptShoppingCart"
            >
              <FaGithub />
              Code
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://typescript-react-online-shop.netlify.app/"
            >
              <FaPlay />
              Demo
            </Link>
          </LinkContainer>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </ProjectsWrapper>
  );
}
