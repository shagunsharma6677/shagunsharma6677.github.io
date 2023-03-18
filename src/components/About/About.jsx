import React from "react"
import "./About.css"
import { Button } from "react-scroll"

const About = () => {
    return (
        <>
            <div id="about" className="about section about-wrapper">
                <div className='about-heading'>
                    <h1>About</h1>
                </div>
                <div className='about-l-r'>
                    <div className='about-wrap-left'>
                        <img src="https://avatars.githubusercontent.com/u/108183568?v=4" alt="" width={"270px"} />
                    </div>
                    <div className='about-wrap-right'>

                        <p id="user-detail-intro"> A Passionate MERN stack developer with strong problem-solving
                            abilities, proficient in JavaScript,MongoDB, React.js, and
                            NodeJS,HTML,CSS,Express keen to learn new technologies and
                            frameworks. Looking for growth-oriented learning
                            environment in a reputed firm driven by technology
                            where I can utilize and enhance my skills for mutual
                            benefits.
                        </p>


                    </div>


                </div>
                <div className="about-skills">
                    <div>
                        <p>1000+</p>
                        <p>Hours</p>
                        <p>Coading</p>
                    </div>

                    <div>
                        <p>350+</p>
                        <p>Questions</p>
                        <p>DSA</p>
                    </div>

                    <div>
                        <p>100+</p>
                        <p>Hours</p>
                        <p>Soft Skills</p>
                    </div>

                    <div>
                        <p>250+ </p>
                        <p>Git Commits</p>
                    </div>

                    <div><p>3+</p>
                        <p>Group</p>
                        <p>Projects</p>
                    </div>

                    <div>
                        <p>2+</p>
                        <p>Individual</p>
                        <p>Project</p>
                    </div>


                </div>



                {/* <div id="user-detail-name" >Shagun</div>

                <div id="user-detail-intro">MERN JavaScript MongoDB Frontend Backend NodeJS HTML CSS Express</div>


                <button id="resume-button-2" >cvv</button> */}

            </div>

        </>)
}

export default About