import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontend = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const backend = ["Python", "Node.js", "Java", "Kotlin", "SQL"];

const Experience = () => {
  const renderList = (items: string[]) =>
    items.map((name) => (
      <article key={name} className="experience__details">
        <BsPatchCheckFill className="icon" />
        <div>
          <h4>{name}</h4>
        </div>
      </article>
    ));

  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">{renderList(frontend)}</div>
        </div>

        <div className="experience__backend">
          <h3>Backend &amp; Other</h3>
          <div className="experience__content">{renderList(backend)}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
