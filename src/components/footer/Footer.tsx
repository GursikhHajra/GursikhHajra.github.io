import "./Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a className="footer__logo">Gursikh Singh Hajra</a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">My Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/gursikh-hajra/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/GursikhHajra" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gursikh Singh Hajra</small>
      </div>
    </footer>
  );
};

export default footer;
