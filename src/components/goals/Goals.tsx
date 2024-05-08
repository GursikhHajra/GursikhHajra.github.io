import "./Goals.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Goals = () => {
  return (
    <section id="experience">
      <h5>What I hope to Achive</h5>
      <h2>My Goals</h2>

      <div className="container">
        <div className="experience__frontend">
          <h3>S.M.A.R.T. GOALS</h3>
          <div>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Critical Thinking and Problem Solving</h4>
                <small className="text-light">
                  By November 30, 2024, join Leetcode and complete the blind 75,
                  using the Professional answers to learn and improve my
                  critical thinking and problem solving.
                </small>
                <br></br>
                <small className="text-light">
                  By February 15, 2024, successfully complete 20 Bug Hunt, using
                  feedback from my team to improve on my solutions.
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4> Communication Skills</h4>

                <small className="text-light">
                  By December 10, 2024, successfully host a show & tell at work,
                  using feedback from evaluators to enhance oral communication
                  skills.
                </small>
                <br></br>
                <small className="text-light">
                  By April 20, 2024, activity contribute to Developer reviews by
                  completing at least 20 reviews, using the feedback to improve
                  my written communication skills.
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Collaboration and Leadership Skills</h4>

                <small className="text-light">
                  By December 23, 2024, successfully built my personal web
                  application with friends. Learn more about collaboration and
                  Leadership through the experience I gain
                </small>
                <br></br>
                <small className="text-light">
                  By March 20, 2024, Led a team of interns through the
                  development of a new feature. Improve on leadership skills
                  through the feedback of mentors
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
