import React from "react"
import "./about2.css"
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
                    <div className='about-wrap-right'>
                        <Fade bottom>
                            <div className="into-cont">
                                <div className='right-img'>
                                    <img style={{borderRadius:"30%"}} src="https://avatars.githubusercontent.com/u/108183568?v=4" alt="" />
                                </div>
                                <div className="right-des">
                                    <p id="user-detail-intro"> A Passionate MERN stack developer with strong problem-solving
                                        abilities, proficient in JavaScript,MongoDB, React.js, and
                                        NodeJS,HTML,CSS,Express keen to learn new technologies and
                                        frameworks. Looking htmlFor growth-oriented learning
                                        environment in a reputed firm driven by technology
                                        where I can utilize and enhance my skills htmlFor mutual
                                        benefits.
                                    </p>
                                </div>
                            </div>
                        </Fade>

                        <div className="abt-flx">
                            <Fade left>
                                <div className='abt-lft'>

                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} className="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>1000+</span> Hours</p>
                                            <p>Coading</p>
                                        </div>
                                    </div>

                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} className="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>350+</span> DSA</p>
                                            <p>Problem</p>

                                        </div>
                                    </div>

                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} className="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>100+</span> Hours</p>

                                            <p>Soft Skills</p>
                                        </div>
                                    </div>

                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} className="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>250+</span> Git </p>
                                            <p>Commits</p>
                                        </div>
                                    </div>
                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} className="fa-solid fa-person-chalkboard">
                                            </i>
                                        </div>
                                        <div className="abt-skill-cont">
                                            <p><span>2+</span> Group</p>
                                            <p> Projects</p>
                                        </div>
                                    </div>
                                    <div className="about-skill">
                                        <div>
                                            <i style={{ fontSize: "45px", color: "#68D372" }} className="fa-solid fa-person-chalkboard">
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
                                    <div className="accordion-wrapper">
                                        <div className="accordion">
                                            <input type="radio" name="radio-a" id="check1" />
                                            <label className="accordion-label" htmlFor="check1">Where am i from ?</label>
                                            <div className="accordion-content">
                                                <p style={{ textAlign: "center" }}>I was born and brought up in Haridwar Uttrakhand. &#128522;</p>
                                            </div>
                                        </div>
                                        <div className="accordion">
                                            <input type="radio" name="radio-a" id="check2" />
                                            <label className="accordion-label" htmlFor="check2">Morning or a night person ?</label>
                                            <div className="accordion-content">
                                                <p style={{ textAlign: "center" }}>A Night Owl.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="accordion">
                                            <input type="radio" name="radio-a" id="check3" />
                                            <label className="accordion-label" htmlFor="check3">What web Technolgies do I work in ?</label>
                                            <div className="accordion-content">
                                                <p style={{ textAlign: "center" }}>I work in MERN Stack Technolgies such as Reactjs, MongoDB, Nodejs,Expressjs etc. </p>
                                            </div>
                                        </div>
                                        <div className="accordion">
                                            <input type="radio" name="radio-a" id="check4" />
                                            <label className="accordion-label" htmlFor="check4">What is my 2023 goal ?</label>
                                            <div className="accordion-content">

                                                <p style={{ textAlign: "center" }}> My 2023 goal is to.</p>

                                                <p>	&#128578; Travelling to South.</p>
                                                <p>	&#128578; Improving my React Skills.</p>
                                                <p>&#128519; Learning React Native.</p>
                                                <p>	&#128578; Learning Java or C Language.</p>
                                                <p>&#128578; Learning Fundamental of UX/UI Desigh.</p>
                                                <p>&#128578; Completing 10+ MERN Stack Projects on github.</p>
                                                <p>&#128519; Completing 50 Days DSA LEET Code challange on Linked In.</p>
                                                <p>&#128578; Builing and maintaing a blog.</p>
                                                <p>&#128578; Reading 8+ Books on Finance, spirituality and Programming.</p>
                                                <p>&#128519; Being less active on social media and more active on Dev community like Dev.to.</p>

                                            </div>
                                            
                                        </div>
                                        <div className="accordion">
                                            <input type="radio" name="radio-a" id="check5" />
                                            <label className="accordion-label" htmlFor="check5">Do you have any previous work experience.</label>
                                            <div className="accordion-content">
                                                <p style={{ textAlign: "center" }}>Yes, I have 6 month of job experience in R&D Department of EAPRO working on embedded system project htmlFor TATA Motors (TATA Punch Eletric car).</p>
                                            </div>
                                        </div>

                                        <div className="accordion">
                                            <input type="radio" name="radio-a" id="check6" />
                                            <label className="accordion-label" htmlFor="check6">Where do i see myself in next 5 year ?</label>
                                            <div className="accordion-content">
                                                <p style={{ textAlign: "center" }}>I see myself as a highly skilled and experienced IT Professional at leadership role in a organization. My long term goal still be to continue grow and develop Progessional. </p>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </Fade>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>)
}

export default About