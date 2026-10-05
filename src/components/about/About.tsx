import "./About.css";
import { FaAward, FaUsers, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                Developer intern at Bell Canada; IT roles at Canadian Musicians
                Co-operative
              </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Honours Bachelor of Computer Science, Sheridan College
              </small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>Web, Android and automation projects</small>
            </article>
          </div>
          <div id="about_info">
            <p>
              I'm a developer and Computer Science student at Sheridan College.
              I recently worked on the Network Cloud / Infrastructure
              Engineering team at Bell Canada, building internal automation and
              inventory tooling. Before that, I spent several summers at
              Canadian Musicians Co-operative, growing from IT Assistant to IT
              Support Specialist to IT Manager. I enjoy turning messy,
              repetitive work into reliable tools, and I work well both in a
              team and on my own. I speak Punjabi, Hindi and English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
