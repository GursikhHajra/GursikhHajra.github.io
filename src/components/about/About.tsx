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
              <small>7+ years coding minor and major projects</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Education</h5>
              <small>Systems Analyst - Advanced Diploma</small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>
                Many project in app/web dev, Software, and much more
              </small>
            </article>
          </div>
          <div id="about_info">
            <p>
              With over 7 years of dedicated experience in the dynamic realm of
              technology, I have traversed a journey from high school and
              college to professional employment. Continuously refining my
              skills and expanding my knowledge base, I strive to thrive in this
              rapidly evolving industry. My passion for technology extends
              beyond personal growth, as I have actively supported peers in
              troubleshooting and resolving complex issues. Through hands-on
              experience, I have mastered the art of controlling and
              manipulating computer programming systems, while fostering strong
              communication skills—both written and verbal. Adaptable and
              versatile, I seamlessly collaborate within teams or autonomously,
              leveraging a robust problem-solving capacity and critical thinking
              prowess. My adept project management skills facilitate swift
              adaptation to new systems and technologies, ensuring seamless
              integration and execution. Furthermore, my multilingual
              proficiency in Punjabi, Hindi, and English enriches cross-cultural
              communication and collaboration, enhancing the effectiveness of
              team dynamics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
