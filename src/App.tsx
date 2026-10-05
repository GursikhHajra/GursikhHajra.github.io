import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CV from "./assets/Gursikh_Hajra_Resume.pdf";
import NetworkHero from "./NetworkHero";
import Cursor from "./Cursor";

const projects = [
  {
    name: "Portfolio",
    stack: "React, TypeScript",
    kind: "Website",
    github: "https://github.com/GursikhHajra/GursikhHajra.github.io",
    demo: "https://GursikhHajra.github.io",
  },
  {
    name: "yt-proxy",
    stack: "JavaScript",
    kind: "Proxy service",
    github: "https://github.com/GursikhHajra/yt-proxy",
    demo: "",
  },
  {
    name: "Workout app",
    stack: "Kotlin",
    kind: "Android app",
    github: "https://github.com/GursikhHajra/WorkoutFinalProject",
    demo: "",
  },
  {
    name: "Rock Paper Scissors",
    stack: "TypeScript",
    kind: "Game",
    github: "https://github.com/GursikhHajra/RockPaperScissorsGame",
    demo: "",
  },
  {
    name: "Vaccine appointments",
    stack: "TypeScript",
    kind: "App",
    github:
      "https://github.com/GursikhHajra/Vaccine-Appointment-Native-Storage-",
    demo: "",
  },
  {
    name: "COVID-19 vaccine booking",
    stack: "HTML, CSS",
    kind: "Website",
    github: "https://github.com/GursikhHajra/COVID19-Vaccine-Booking",
    demo: "",
  },
  {
    name: "Student register",
    stack: "C#",
    kind: "Desktop app",
    github: "https://github.com/GursikhHajra/Student",
    demo: "",
  },
  {
    name: "Art and culture",
    stack: "HTML, CSS",
    kind: "Website",
    github: "https://github.com/GursikhHajra/Art-Culture",
    demo: "",
  },
  {
    name: "Capstone: Phantom Troupe",
    stack: "Team project",
    kind: "Web app",
    github: "https://github.com/Peter-Mascherin/PhantomTroupeWebApp",
    demo: "",
  },
];

const skills = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "Kotlin", "SQL"],
  },
  { group: "Web", items: ["React", "HTML", "CSS", "Node.js"] },
  { group: "Tools", items: ["Git", "GitHub Actions"] },
];

const details: Record<string, { desc: string; shot?: string }> = {
  Portfolio: {
    desc: "This site. React and TypeScript with Vite, deployed to GitHub Pages by a GitHub Actions workflow.",
  },
  "yt-proxy": {
    desc: "A small JavaScript proxy service for YouTube requests.",
  },
  "Workout app": {
    desc: "An Android workout app written in Kotlin, built as a final project at Sheridan.",
  },
  "Rock Paper Scissors": {
    desc: "A Rock Paper Scissors game you play against the computer, written in TypeScript.",
  },
  "Vaccine appointments": {
    desc: "A vaccine appointment booking app that keeps its data in native storage.",
  },
  "COVID-19 vaccine booking": {
    desc: "A web front end for booking COVID-19 vaccine appointments.",
  },
  "Student register": {
    desc: "A C# app for registering and managing students.",
  },
  "Art and culture": { desc: "A multi-page website about art and culture." },
  "Capstone: Phantom Troupe": {
    desc: "A team web app built as a capstone project.",
  },
};

type Status = "idle" | "sending" | "sent" | "error";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
  pushed_at: string;
};

const timeline = [
  {
    when: "Internship",
    title: "Developer intern",
    where: "Bell Canada, Network Cloud and Infrastructure Engineering",
    note: "Built internal automation and inventory tooling for cloud infrastructure.",
  },
  {
    when: "In progress",
    title: "BSc (Hons) Computer Science",
    where: "Sheridan College",
    note: "",
  },
  {
    when: "Several summers",
    title: "IT Assistant, IT Support Specialist, IT Manager",
    where: "Canadian Musicians Co-operative, Barrie, ON",
    note: "Started by supporting IT and ended up running it.",
  },
  {
    when: "Dec 2022",
    title: "Computer Programming and Systems Analyst",
    where: "Sheridan College",
    note: "",
  },
];

const ago = (iso: string) => {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (d < 1) return "today";
  if (d === 1) return "yesterday";
  if (d < 30) return `${d} days ago`;
  const m = Math.floor(d / 30);
  return m < 12 ? `${m} mo ago` : `${Math.floor(m / 12)} yr ago`;
};

function App() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [open, setOpen] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    let live = true;
    fetch(
      "https://api.github.com/users/GursikhHajra/repos?sort=pushed&per_page=5",
    )
      .then((r) => (r.ok ? r.json() : []))
      .then((data: Repo[]) => {
        if (live && Array.isArray(data)) setRepos(data);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_uccpqt4",
        "template_391iz3i",
        formRef.current!,
        "UEGJhjPyuafnqyAKs",
      )
      .then(
        () => {
          formRef.current?.reset();
          setStatus("sent");
        },
        () => setStatus("error"),
      );
  };

  return (
    <>
      <nav className="nav">
        <div className="wrap nav__inner">
          <a href="#top" className="nav__name">
            Gursikh Hajra
          </a>
          <div className="nav__links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button
              type="button"
              className="theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>

      <main id="top">
        <header className="stage">
          <NetworkHero />
          <Cursor />
          <div className="wrap hero">
            <div className="hero__text">
              <h1>Gursikh Hajra</h1>
              <p className="hero__lead">
                Developer and Computer Science student. I build automation and
                inventory tools that turn repetitive work into something
                reliable.
              </p>
              <div className="hero__actions">
                <a
                  className="btn btn--solid"
                  href={CV}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open resume
                </a>
                <a className="btn" href="#contact">
                  Send a message
                </a>
              </div>
            </div>

            <dl className="record" aria-label="Profile summary">
              <div>
                <dt>Role</dt>
                <dd>Developer</dd>
              </div>
              <div>
                <dt>Studying</dt>
                <dd>BSc (Hons) Computer Science, Sheridan College</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>Developer intern, Bell Canada</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English, Punjabi, Hindi</dd>
              </div>
              <div>
                <dt>Elsewhere</dt>
                <dd>
                  <a
                    href="https://github.com/GursikhHajra"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {" and "}
                  <a
                    href="https://www.linkedin.com/in/gursikh-hajra/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </header>
        <section id="about" className="wrap section">
          <h2>About</h2>
          <div className="about">
            <p>
              I recently worked on the Network Cloud and Infrastructure
              Engineering team at Bell Canada, building internal automation and
              inventory tooling. Before that, I spent several summers at
              Canadian Musicians Co-operative, moving from IT Assistant to IT
              Support Specialist to IT Manager. I like working in a team and on
              my own, and I like leaving things easier to run than I found them.
            </p>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group} className="skills__group">
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="wrap section">
          <h2>Experience</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.title}>
                <span className="timeline__when">{t.when}</span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.where}</p>
                  {t.note ? <p className="timeline__note">{t.note}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="case-study" className="wrap section">
          <h2>Case study: VMware Inventory Platform</h2>
          <div className="case">
            <dl className="case__meta">
              <div>
                <dt>Role</dt>
                <dd>Developer intern, Bell Canada</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>Network Cloud and Infrastructure Engineering</dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>Python, scheduled jobs</dd>
              </div>
            </dl>
            <div className="case__body">
              <div>
                <h3>The problem</h3>
                <p>
                  Infrastructure data lived in separate exports and systems, so
                  answering "what do we have, and where is it?" meant stitching
                  spreadsheets together by hand.
                </p>
              </div>
              <div>
                <h3>The approach</h3>
                <p>
                  I built one platform that pulls from several sources on a
                  schedule, chooses a trusted source for each field, and keeps
                  snapshots so changes over time stay visible.
                </p>
              </div>
              <div>
                <h3>What I built</h3>
                <p>
                  Scheduled data feeds from vCenter, Intersight and RVTools
                  exports. Per-field source attribution in the interface, so
                  every value shows where it came from. Historical trend graphs.
                  Data-quality repairs for placeholder values that were
                  corrupting records.
                </p>
              </div>
              <div>
                <h3>What I learned</h3>
                <p>
                  Most of the work in an inventory is data quality, not code.
                  Clear ownership of each field and a visible source made the
                  data far easier for the team to trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="wrap section">
          <h2>Projects</h2>
          <ul className="rows">
            <li className="row row--head" aria-hidden="true">
              <span>Name</span>
              <span>Stack</span>
              <span>Type</span>
              <span>Links</span>
            </li>
            {projects.map((p) => {
              const d = details[p.name];
              const isOpen = open === p.name;
              return (
                <li key={p.name} className="row">
                  <span className="row__name">
                    <button
                      type="button"
                      className="row__toggle"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : p.name)}
                    >
                      {p.name}
                    </button>
                  </span>
                  <span>{p.stack}</span>
                  <span>{p.kind}</span>
                  <span className="row__links">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      Code
                    </a>
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    ) : null}
                  </span>
                  {isOpen && d ? (
                    <div className="row__detail">
                      <p>{d.desc}</p>
                      {d.shot ? (
                        <img
                          src={d.shot}
                          alt={`Screenshot of ${p.name}`}
                          loading="lazy"
                        />
                      ) : null}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>

        {repos.length > 0 && (
          <section className="wrap section">
            <h2>Recently pushed on GitHub</h2>
            <ul className="feed">
              {repos.map((r) => (
                <li key={r.id}>
                  <a href={r.html_url} target="_blank" rel="noreferrer">
                    {r.name}
                  </a>
                  <span>{r.language ?? "Mixed"}</span>
                  <span>{ago(r.pushed_at)}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section id="contact" className="wrap section">
          <h2>Contact</h2>
          <form ref={formRef} onSubmit={send} className="form">
            <label>
              Name
              <input
                type="text"
                name="from_name"
                required
                autoComplete="name"
              />
            </label>
            <label>
              Email
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label className="form__wide">
              Message
              <textarea name="message" rows={6} required />
            </label>
            <div className="form__wide form__foot">
              <button
                type="submit"
                className="btn btn--solid"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending" : "Send message"}
              </button>
              <p role="status">
                {status === "sent" && "Message sent. I'll reply by email."}
                {status === "error" &&
                  "Message not sent. Try again, or email me directly."}
              </p>
            </div>
          </form>
        </section>
      </main>

      <footer className="wrap footer">
        <small>&copy; {new Date().getFullYear()} Gursikh Hajra</small>
      </footer>
    </>
  );
}

export default App;
