import "./Project.css";

const Projects = () => {
  const data = [
    {
      id: 0,

      title: "Portfolio (Website)",
      github: "",
      demo: "",
    },
    {
      id: 1,

      title: "Fitness App (Mobile App)",
      github: "https://github.com/GursikhHajra/WorkoutFinalProject",
      demo: "",
    },
    {
      id: 7,

      title: "Rock Paper Scissors Game (Website)",
      github: "https://github.com/GursikhHajra/RockPaperScissorsGame",
      demo: "",
    },
    {
      id: 2,

      title: "COVID19-Vaccine-Booking (Website)",
      github: "https://github.com/GursikhHajra/COVID19-Vaccine-Booking",
      demo: "",
    },
    {
      id: 3,

      title: "Student Register (C#)",
      github: "https://github.com/GursikhHajra/Student",
      demo: "",
    },
    {
      id: 4,

      title: "Final Review",
      github: "https://github.com/GursikhHajra/FinalReview",
      demo: "",
    },
    {
      id: 5,

      title: "Art Culture",
      github: "https://github.com/GursikhHajra/Art-Culture",
      demo: "",
    },
    {
      id: 6,

      title: "Vaccine-Appointment-Native-Storage-",
      github:
        "https://github.com/GursikhHajra/Vaccine-Appointment-Native-Storage-",
      demo: "",
    },
    {
      id: 7,

      title: "Capstone Project",
      github: "https://github.com/Peter-Mascherin/PhantomTroupeWebApp",
      demo: "",
    },
  ];

  return (
    <section id="projects">
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map(({ id, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <h3>{title}</h3>

              <div className="project_item-cta">
                <a href={github} className="btn" target="_blank">
                  {" "}
                  GitHub
                </a>
                {demo != "" ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    {" "}
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
