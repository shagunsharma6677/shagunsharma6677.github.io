import React from "react"
import "./about2.css"
import { Button } from "react-scroll"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
            <div id="about" className="about section about-wrapper">
                <Fade bottom>
                    <div className='about-heading'>
                        <h1>About</h1>
                    </div>
                </Fade>
                <div className='about-l-r'>
                    {/* <div className='about-wrap-left'>
                        <div className="about-skill">
                            <div>
                                <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                </i>
                            </div>
                            <div className="abt-skill-cont">
                                <p>1000+ Hours</p>
                                <p>Coading Skills</p>
                            </div>
                        </div>

                        <div className="about-skill">
                            <div>
                                <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                </i>
                            </div>
                            <div className="abt-skill-cont">
                                <p>350+ DSA</p>
                                <p>Problem</p>

                            </div>
                        </div>

                        <div className="about-skill">
                            <div>
                                <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                </i>
                            </div>
                            <div className="abt-skill-cont">
                                <p>100+ Hours</p>

                                <p>Soft Skills</p>
                            </div>
                        </div>

                        <div className="about-skill">
                            <div>
                                <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                </i>
                            </div>
                            <div className="abt-skill-cont">
                                <p>250+ </p>
                                <p>Git Commits</p>
                            </div>
                        </div>
                        <div className="about-skill">
                            <div>
                                <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                </i>
                            </div>
                            <div className="abt-skill-cont">
                                <p>2+ Group</p>
                                <p> Projects</p>
                            </div>
                        </div>
                        <div className="about-skill">
                            <div>
                                <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                </i>
                            </div>
                            <div className="abt-skill-cont">
                                <p>3+ Individual</p>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div> */}
                    <div className='about-wrap-right'>
                        <Fade bottom>
                            <div className='right-img'>
                                <img src="https://avatars.githubusercontent.com/u/108183568?v=4" alt="" />
                            </div>
                            <div className="right-des">
                                <p id="user-detail-intro"> A Passionate MERN stack developer with strong problem-solving
                                    abilities, proficient in JavaScript,MongoDB, React.js, and
                                    NodeJS,HTML,CSS,Express keen to learn new technologies and
                                    frameworks. Looking for growth-oriented learning
                                    environment in a reputed firm driven by technology
                                    where I can utilize and enhance my skills for mutual
                                    benefits.
                                </p>
                            </div>
                        </Fade>

                        <div className="abt-flx">
                            <Fade left>
                                <div className='abt-lft'>

                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>1000+</span> Hours</p>
                                            <p>Coading</p>
                                        </div>
                                    </div>

                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>350+</span> DSA</p>
                                            <p>Problem</p>

                                        </div>
                                    </div>

                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>100+</span> Hours</p>

                                            <p>Soft Skills</p>
                                        </div>
                                    </div>

                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>250+</span> Git </p>
                                            <p>Commits</p>
                                        </div>
                                    </div>
                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>2+</span> Group</p>
                                            <p> Projects</p>
                                        </div>
                                    </div>
                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} class="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>3+</span> Individual</p>
                                            <p>Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <div className="abt-rht">
                                <Fade right>
                                    {/* <Accordion className="main-accordian">
                                        <AccordionItem className="accor-div" header="Where am i from ?">
                                            I was born and brought up in Haridwar Uttrakhand.
                                        </AccordionItem>

                                        <AccordionItem className="accor-div" header="Morning or a night person">
                                            A Night Owl
                                        </AccordionItem>

                                        <AccordionItem className="accor-div" header="What Technolgies do I work in?">
                                            I work in Web Development with Full Stack Technolgies such as Reactjs, MongoDB, Nodejs,Expressjs etc.
                                        </AccordionItem>

                                        <AccordionItem className="accor-div" header="What is my 2023 goal?">
                                            My 2023 goal is to
                                            <p>Travelling to South</p>
                                            <p>Improving my React Skills</p>
                                            <p>Learning React Native</p>
                                            <p>Learning Java or C Language</p>
                                            <p>Learning Fundamental of UX/UI Desigh</p>
                                            <p>Completing 10+ MERN Stack Projects on github</p>
                                            <p>Completing 50 Days DSA LEET Code challange on Linked In</p>
                                            <p>Builing and maintaing a blog.</p>
                                            <p>Reading 8+ Books on Finance, spirituality and Programming</p>
                                            <p>Being less active on social media and more active on Dev community like Dev.to.</p>
                                        </AccordionItem>

                                        <AccordionItem className="accor-div" header="Where do I see myself in the next 5 years?">
                                            I see myself as an experienced IT Profession with solid foundation of various web technologies and frameworks. My future goal skill be of continuously learning and keeping up with the latest trends and technologies.
                                        </AccordionItem>

                                    </Accordion> */}

                                    <div class="accordion-wrapper">
                                        <div class="accordion">
                                            <input type="radio" name="radio-a" id="check1" />
                                            <label class="accordion-label" for="check1">Where am i from ?</label>
                                            <div class="accordion-content">
                                                <p style={{ textAlign: "center" }}>I was born and brought up in Haridwar Uttrakhand. &#128522;</p>
                                            </div>
                                        </div>
                                        <div class="accordion">
                                            <input type="radio" name="radio-a" id="check2" />
                                            <label class="accordion-label" for="check2">Morning or a night person</label>
                                            <div class="accordion-content">
                                                <p style={{ textAlign: "center" }}>A Night Owl</p>
                                            </div>
                                        </div>
                                        <div class="accordion">
                                            <input type="radio" name="radio-a" id="check3" />
                                            <label class="accordion-label" for="check3">What web Technolgies do I work in?</label>
                                            <div class="accordion-content">
                                                <p style={{ textAlign: "center" }}>I work in MERN Stack Technolgies such as Reactjs, MongoDB, Nodejs,Expressjs etc. </p>
                                            </div>
                                        </div>
                                        <div class="accordion">
                                            <input type="radio" name="radio-a" id="check4" />
                                            <label class="accordion-label" for="check4">What Technolgies do I work in?</label>
                                            <div class="accordion-content">

                                                <p style={{ textAlign: "center" }}> My 2023 goal is to</p>

                                                <p>	&#128578; Travelling to South</p>
                                                <p>	&#128578; Improving my React Skills</p>
                                                <p>&#128519; Learning React Native</p>
                                                <p>	&#128578; Learning Java or C Language</p>
                                                <p>&#128578; Learning Fundamental of UX/UI Desigh</p>
                                                <p>&#128578; Completing 10+ MERN Stack Projects on github</p>
                                                <p>&#128519; Completing 50 Days DSA LEET Code challange on Linked In</p>
                                                <p>&#128578; Builing and maintaing a blog.</p>
                                                <p>&#128578; Reading 8+ Books on Finance, spirituality and Programming</p>
                                                <p>&#128519; Being less active on social media and more active on Dev community like Dev.to.</p>

                                            </div>
                                        </div>
                                    </div>
                                </Fade>

                            </div>
                        </div>
                        {/* <div className='about-heading'>
                            <h1>Some Q&A About me</h1>
                        </div> */}


                    </div>

                </div>

            </div>

            {/* <div id="about" className="about section about-wrapper">
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
                    <div>
                        <p>3+</p>
                        <p>Group</p>
                        <p>Projects</p>
                    </div>
                    <div>
                        <p>2+</p>
                        <p>Individual</p>
                        <p>Project</p>
                    </div>
                </div>
            </div> */}

        </>)
}

export default About