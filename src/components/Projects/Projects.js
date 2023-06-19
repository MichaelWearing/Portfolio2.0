import React from "react";
// Imports
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaGithub, FaPlay } from "react-icons/fa";

// Images
import portfolio from "../../images/Portfolio.svg";
import dailytaskplanner from "../../images/DailyTaskPlanner.png";
import shoppingCart from "../../images/ShoppingCart.png";

// Styled-Components
import {
  ProjectsWrapper,
  ProjectsTitle,
  Underline,
  PortfolioImg,
  DailyTaskPlannerImg,
  LinkContainer,
  Link,
} from "./Projects.styles";

export default function Projects() {
  return (
    <ProjectsWrapper className="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <Underline class="underline" />
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
            href="https://github.com/MichaelWearing/Portfolio2.0"
          >
            <FaGithub />
            Code
          </Link>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaReact />}
          iconStyle={{ background: "deepskyblue", color: "#fff" }}
        >
          <h3>Daily Task Planner</h3>
          <h4>19-06-2023</h4>
          <br />
          <DailyTaskPlannerImg src={dailytaskplanner} />
          <br />
          <h4>Description: </h4>
          <p>
            This is a daily task planner, which allows users to create tasks
            they would like to do in the day. The user is also able to allocate
            a certain amount of time to complete each task. I utilize Local
            Storage to store the data between sessions.
          </p>
          <br />
          <LinkContainer>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MichaelWearing/daily-task-planner"
            >
              <FaGithub />
              Code
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://daily-task-planner-mw.netlify.app/"
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
