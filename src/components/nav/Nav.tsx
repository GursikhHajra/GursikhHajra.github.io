import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { useState } from "react";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");

  document.addEventListener(
    "mouseover",
    (event) => {
      const target = event.target as HTMLElement;
      if (target.id === "about") {
        setActiveNav("#about");
      } else if (target.id === "experience") {
        setActiveNav("#experience");
      } else if (target.id === "projects") {
        setActiveNav("#projects");
      } else if (target.id === "contact") {
        setActiveNav("#contact");
      } else if (target.id === "header") {
        setActiveNav("#");
      }
    },
    { passive: true },
  );

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <AiOutlineFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsChatText />
      </a>
    </nav>
  );
};

export default NavBar;
