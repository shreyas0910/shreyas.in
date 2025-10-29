import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <div className="container">
          <h1 id="name" aria-label="shreyas singh">
            {"shreyas singh".split("").map((ch, idx) => (
              <span
                className="letter"
                style={{ animationDelay: `${idx * 0.08}s` }}
                key={idx}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h1>
          <div id="location">
            <span>📍</span> UAE, Dubai
          </div>
          <div id="bio1">
            <span>💻</span> student/programmer
          </div>
          <div id="bio2">
            <p>
              i'm a 14 y/o student. i love building things and solving problems.
              i enjoy language design, theoretical computer science and i live
              on the terminal. if i'm not coding, i'm probably reading, watching
              podcasts or working out.
            </p>
          </div>
          <section id="projects">
            <span className="projects-star">*</span>
            <span className="projects-title">projects</span>
            <div className="project">
              <a
                className="project-name"
                href="https://github.com/shreyas0910/ronaldo-discord-bot-"
                target="_blank"
              >
                DISCORD-BOT
              </a>
              <div className="project-role">creator</div>
              <div className="project-desc">
                a discord bot that displays ronaldos real time stats.
              </div>
            </div>
            <div className="project">
              <a
                className="project-name"
                href="https://github.com/shreyas0910/pomodoro-timer"
                target="_blank"
              >
                pomodoro-timer
              </a>
              <div className="project-role">creator</div>
              <div className="project-desc">
                simple and minimal pomodoro timer for productivity.
              </div>
            </div>
            <a
              className="all-projects"
              href="https://github.com/shreyas0910?tab=repositories"
              target="_blank"
            >
              all projects ↗
            </a>
          </section>
          <section id="blogs">
            <span className="blogs-star">*</span>
            <Link className="blogs-title" to="/blogs">
              blogs
            </Link>
            <div className="blogs-list">
              <Link className="blogs-link" to="/blogs"></Link>
            </div>
          </section>
          <section id="links">
            <span className="links-star">*</span>
            <span className="links-title">links</span>
            <div className="links-list">
              <a href="https://x.com/shresth__" target="_blank">
                x.com
              </a>
              <a href="https://github.com/shreyas0910" target="_blank">
                github
              </a>
            </div>
          </section>
        </div>
      </>
    </>
  );
}

export default App;
