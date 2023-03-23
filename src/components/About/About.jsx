import React from "react"
import "./about2.css"
import { Button } from "react-scroll"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const About = () => {
    return (
        <>
            <div id="about" className="about section about-wrapper">
                <div className='about-heading'>
                    <h1>About</h1>
                </div>
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

                        <div className="abt-flx">
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
                            <div className="abt-rht">
                                <Accordion className="main-accordian">
                                    <AccordionItem className="accor-div" header="What is Lorem Ipsum?">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionItem>

                                    <AccordionItem className="accor-div" header="Where does it come from?">
                                        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                                        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                                        vitae, accumsan auctor mi.
                                    </AccordionItem>

                                    <AccordionItem className="accor-div" header="Why do we use it?">
                                        Suspendisse massa risus, pretium id interdum in, dictum sit
                                        amet ante. Fusce vulputate purus sed tempus feugiat.
                                    </AccordionItem>
                                    <AccordionItem className="accor-div" header="Where does it come from?">
                                        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                                        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                                        vitae, accumsan auctor mi.
                                    </AccordionItem>
                                    <AccordionItem className="accor-div" header="Where does it come from?">
                                        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                                        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                                        vitae, accumsan auctor mi.
                                    </AccordionItem>
                                    <AccordionItem className="accor-div" header="Where does it come from?">
                                        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                                        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                                        vitae, accumsan auctor mi.
                                    </AccordionItem>
                                    <AccordionItem className="accor-div" header="Where does it come from?">
                                        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                                        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                                        vitae, accumsan auctor mi.
                                    </AccordionItem>
                                </Accordion>

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