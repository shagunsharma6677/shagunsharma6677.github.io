import React from "react";
import "./Skills.css";
import cont from "./cont.jpeg";


const Skills = () => {
  return (
    <>
      <div style={{ marginTop: "-20px" }} id="skills">
        <h2>Skills</h2>

        <div className="skills-wrapper">
          <div className="skills-prog-cont">
            <h2 style={{ marginBottom: "20px" }}>Languages & Frameworks</h2>
            <div className="skills-prog-div">
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/html-5.png")} alt="" /> */}

                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-express-original colored"
                ></i>
                <p>Express.js</p>
              </div>

              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-react-original colored"
                ></i>
                <p>React.js</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-nodejs-plain colored"
                ></i>
                <p>Node.js</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-javascript-plain colored"
                ></i>
                <p>Javascript</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-css3-plain colored"
                ></i>
                <p>Css</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-html5-plain colored"
                ></i>
                <p>Html</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-mongodb-plain colored"
                ></i>
                <p>Mongo Db</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/express-js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-tailwindcss-original-wordmark colored"
                ></i>
                <p>Tailwind</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/git.png")} alt="" /> */}

                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-redux-original colored"
                ></i>
                <p>Redux</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-typescript-plain colored"
                ></i>
                <p>Typescript</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-wrapper">
          <div className="skills-prog-cont">
            <h2 style={{ marginBottom: "20px" }}>Technologies & Libraries</h2>
            <div className="skills-prog-div">
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/html-5.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-npm-original-wordmark colored"
                ></i>
                <p>Npm</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-git-plain colored"
                ></i>
                <p>Git</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/react-js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-babel-plain colored"
                ></i>
                <p>Babel</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/node-js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-heroku-original colored"
                ></i>
                <p>Heroku</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-materialui-plain colored"
                ></i>
                <p>Material UI</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/express-js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  class="devicon-bootstrap-plain colored"
                ></i>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>

        <div className="git-details">
          <h1>Github Details</h1>
        </div>

        <div className="git-stat-wrapper">
          <div className="git-star-cont">
            <div className="git-state-div">
              <div>
              
              </div>
              <div>
                {/* <img id="github-streak-stats" src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shagunsharma6677&theme=github_dark" alt="jainex's GitHub stats" /> */}
                <div>
                  <img
                    id="github-top-langs"
                    src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=shagunsharma6677&theme=github_dark"
                    alt="random"
                  />
                  <img
                    src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=shagunsharma6677&theme=github_dark"
                    alt=""
                  />
                  <img
                    src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=shagunsharma6677&theme=github_dark&utcOffset=8"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%" }}
                    id="github-stats-card"
                    src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shagunsharma6677&theme=github_dark"
                    alt="GitHub Commits Graph"
                  />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
