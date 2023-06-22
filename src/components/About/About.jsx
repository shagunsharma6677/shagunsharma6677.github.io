import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
// import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,


} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import Card from "../Card/Card";

const About = () => {
  return (
    <>
      <div id="about" className="about section about-wrapper">
        <Fade bottom>
          <div className="about-heading">
            <h2>About</h2>
          </div>
        </Fade>

        <div className="about-l-r">
          <div className="about-wrap-right">
            <Fade bottom>
              <div className="into-cont">
                <div className="right-img">
                  <img
                    style={{ borderRadius: "30%" }}
                    src="https://avatars.githubusercontent.com/u/108183568?v=4"
                    alt=""
                  />
                </div>
                <div className="right-des">
                 
                  <p id="user-detail-intro">
                    A passionate Full Stack Web Developer with strong
                    problem-solving abilities, proficient in React Js, Mongo DB,
                    Express Js Next Js, Typescript and Chakra Ui, keen to learn
                    new technologies and frameworks. Looking forward to start
                    career in a reputed firm driven by technology.
                  </p>
                </div>
              </div>
            </Fade>

            <div className="abt-flx">
              <Fade left>
                <div className="abt-lft">
                  <div className="about-skill">
                    <div>
                      <i
                        style={{ fontSize: "45px", color: "#68D372" }}
                        className="fa-solid fa-person-chalkboard"
                      ></i>
                    </div>
                    <div className="abt-skill-cont">
                      <p>
                        <span>1000+</span> Hours
                      </p>
                      <p>Coding</p>
                    </div>
                  </div>

                  <div className="about-skill">
                    <div>
                      <i
                        style={{ fontSize: "45px", color: "#68D372" }}
                        className="fa-solid fa-person-chalkboard"
                      ></i>
                    </div>
                    <div className="abt-skill-cont">
                      <p>
                        <span>350+</span> DSA
                      </p>
                      <p>Problem</p>
                    </div>
                  </div>

                  <div className="about-skill">
                    <div>
                      <i
                        style={{ fontSize: "45px", color: "#68D372" }}
                        className="fa-solid fa-person-chalkboard"
                      ></i>
                    </div>
                    <div className="abt-skill-cont">
                      <p>
                        <span>100+</span> Hours
                      </p>

                      <p>Soft Skills</p>
                    </div>
                  </div>

                  <div className="about-skill">
                    <div>
                      <i
                        style={{ fontSize: "45px", color: "#68D372" }}
                        className="fa-solid fa-person-chalkboard"
                      ></i>
                    </div>
                    <div className="abt-skill-cont">
                      <p>
                        <span>250+</span> Git{" "}
                      </p>
                      <p>Commits</p>
                    </div>
                  </div>
                  <div className="about-skill">
                    <div>
                      <i
                        style={{ fontSize: "45px", color: "#68D372" }}
                        className="fa-solid fa-person-chalkboard"
                      ></i>
                    </div>
                    <div className="abt-skill-cont">
                      <p>
                        <span>2+</span> Group
                      </p>
                      <p> Projects</p>
                    </div>
                  </div>
                  <div className="about-skill">
                    <div>
                      <i
                        style={{ fontSize: "45px", color: "#68D372" }}
                        className="fa-solid fa-person-chalkboard"
                      ></i>
                    </div>
                    <div className="abt-skill-cont">
                      <p>
                        <span>3+</span> Individual
                      </p>
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <div className="abt-rht">
                <Fade right>
                  {/* <div className="accordion-wrapper">
                    <div className="accordion">
                      <input type="radio" name="radio-a" id="check1" />
                      <label className="accordion-label" htmlFor="check1">
                        Where am i from ?
                      </label>
                      <div className="accordion-content">
                        <p style={{ textAlign: "center" }}>
                          I was born and brought up in Haridwar Uttrakhand.
                          &#128522;
                        </p>
                      </div>
                    </div>
                    <div className="accordion">
                      <input type="radio" name="radio-a" id="check2" />
                      <label className="accordion-label" htmlFor="check2">
                        Morning or a night person ?
                      </label>
                      <div className="accordion-content">
                        <p style={{ textAlign: "center" }}>A Night Owl.</p>
                      </div>
                    </div>

                    <div className="accordion">
                      <input type="radio" name="radio-a" id="check3" />
                      <label className="accordion-label" htmlFor="check3">
                        What is my favorite programming language and why?
                      </label>
                      <div className="accordion-content">
                        <p style={{ textAlign: "center" }}>
                          My favorite programming language is JavaScript.I love
                          how JavaScript allows me to build interactive and
                          dynamic web applications while also having the ability
                          to expand into other areas like server-side
                          development and mobile app development using
                          frameworks like Node.js and React Native.
                        </p>
                      </div>
                    </div>

                    <div className="accordion">
                      <input type="radio" name="radio-a" id="check4" />
                      <label className="accordion-label" htmlFor="check4">
                        What web technolgies do I work in ?
                      </label>
                      <div className="accordion-content">
                        <p style={{ textAlign: "center" }}>
                          I work on MERN Stack Technolgies such as Reactjs,
                          MongoDB, Nodejs, Expressjs etc.{" "}
                        </p>
                      </div>
                    </div>

                    <div className="accordion">
                      <input type="radio" name="radio-a" id="check5" />
                      <label className="accordion-label" htmlFor="check5">
                        How do you stay updated with the latest industry trends
                        and technologies?
                      </label>
                      <div className="accordion-content">
                        <p style={{ textAlign: "center" }}>
                          I regularly read tech blogs, follow influential
                          developers on social media platforms, and participate
                          in online communities and forums.
                        </p>
                      </div>
                    </div>

                    <div className="accordion">
                      <input type="radio" name="radio-a" id="check6" />
                      <label className="accordion-label" htmlFor="check6">
                        What is my 2023 goal ?
                      </label>
                      <div className="accordion-content">
                        <p style={{ textAlign: "center" }}>
                          {" "}
                          My 2023 goal is to.
                        </p>

                        <p> &#128578; Travelling to South.</p>
                        <p> &#128578; Improving my React Skills.</p>
                        <p>&#128519; Learning React Native.</p>
                        <p> &#128578; Learning Java or C Language.</p>
                        <p>&#128578; Learning Fundamental of UX/UI Desigh.</p>
                        <p>
                          &#128578; Completing 10+ MERN Stack Projects on
                          github.
                        </p>
                        <p>
                          &#128519; Completing 50 Days DSA LEET Code challange
                          on Linked In.
                        </p>
                        <p>&#128519; Working on a open source project.</p>
                        <p>&#128578; Builing and maintaing a blog.</p>
                        <p>
                          &#128578; Reading 8+ Books on Finance, spirituality
                          and Programming.
                        </p>
                        <p>
                          &#128519; Being less active on social media and more
                          active on Dev community like Dev.to.
                        </p>
                      </div>
                    </div>

                    <div className="accordion">
                      <input type="radio" name="radio-a" id="check7" />
                      <label className="accordion-label" htmlFor="check7">
                        Where do i see myself in next 5 year ?
                      </label>
                      <div className="accordion-content">
                        <p style={{ textAlign: "center" }}>
                          I see myself as a highly skilled and experienced IT
                          Professional at leadership role in a organization. My
                          long term goal still be to continue grow and develop
                          Progessional.{" "}
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <Accordion allowMultiple>
                    <AccordionItem m={"3"} p={"2"} bg={"#222222"} color={"white"} borderRadius={"2xl"} >
                      <h2>
                        <AccordionButton >
                          <Box fontSize={"lg"} as="span" fontFamily={"Koulen, cursive"} flex='1' textAlign='left'>
                            Where am i from ?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel bg={"white"} fontFamily={"Koulen"} fontSize={"lg"}  color={"black"} pb={4}>
                        I was born and brought up in Haridwar Uttrakhand.
                        &#128522;
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem m={"4"} p={"2"} bg={"#222222"} color={"white"} borderRadius={"2xl"} >
                      <h2>
                        <AccordionButton >
                          <Box fontSize={"lg"}  as="span" fontFamily={"Koulen, cursive"} flex='1' textAlign='left'>
                            What is my favorite programming language and why?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel bg={"white"} fontFamily={"Koulen"} fontSize={"lg"}  color={"black"} pb={4}>
                        My favorite programming language is JavaScript.I love
                        how JavaScript allows me to build interactive and
                        dynamic web applications while also having the ability
                        to expand into other areas like server-side
                        development and mobile app development using
                        frameworks like Node.js and React Native.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem m={"4"} p={"2"} bg={"#222222"} color={"white"} borderRadius={"2xl"} >
                      <h2>
                        <AccordionButton >
                          <Box fontSize={"lg"}  fontFamily={"Koulen, cursive"} as="span" flex='1' textAlign='left'>
                            What web technolgies do I work in ?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel bg={"white"} fontFamily={"Koulen"} fontSize={"lg"}  color={"black"} pb={4}>
                        I work on MERN Stack Technolgies such as Reactjs, MongoDB, Nodejs, Expressjs etc
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem m={"4"} p={"2"} bg={"#222222"} color={"white"} borderRadius={"2xl"} >
                      <h2>
                        <AccordionButton >
                          <Box as="span" fontFamily={"Koulen, cursive"} fontSize={"lg"}  flex='1' textAlign='left'>
                            How do you stay updated with the latest industry trends
                            and technologies?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel bg={"white"} fontFamily={"Koulen"} fontSize={"lg"}  color={"black"} pb={4}>
                        I regularly read tech blogs, follow influential
                        developers on social media platforms, and participate
                        in online communities and forums.
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem m={"4"} p={"2"} bg={"#222222"} color={"white"} borderRadius={"2xl"} >
                      <h2>
                        <AccordionButton >
                          <Box as="span" fontFamily={"Koulen, cursive"} fontSize={"lg"}  flex='1' textAlign='left'>
                            What is my 2023 goal ?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel bg={"white"} fontFamily={"Koulen"} fontSize={"lg"}  color={"black"} pb={4}>
                        <Text style={{ textAlign: "center" }}>
                          {" "}
                          My 2023 goal is to.
                        </Text>

                        <Text> &#128578; Travelling to South.</Text>
                        <Text> &#128578; Improving my React Skills.</Text>
                        <Text>&#128519; Learning React Native.</Text>
                        <Text> &#128578; Learning Java or C Language.</Text>
                        <Text>&#128578; Learning Fundamental of UX/UI Desigh.</Text>
                        <Text>
                          &#128578; Completing 10+ MERN Stack Projects on
                          github.
                        </Text>
                        <Text>
                          &#128519; Completing 50 Days DSA LEET Code challange
                          on Linked In.
                        </Text>
                        <Text>&#128519; Working on a open source project.</Text>
                        <Text>&#128578; Builing and maintaing a blog.</Text>
                        <Text>
                          &#128578; Reading 8+ Books on Finance, spirituality
                          and Programming.
                        </Text>
                        <Text>
                          &#128519; Being less active on social media and more
                          active on Dev community like Dev.to.
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem m={"4"} p={"2"} bg={"#222222"} color={"white"} borderRadius={"2xl"} >
                      <h2>
                        <AccordionButton >
                          <Box as="span" fontFamily={"Koulen, cursive"} fontSize={"lg"}  flex='1' textAlign='left'>
                          Where do i see myself in next 5 year ?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel bg={"white"} fontFamily={"Koulen"} fontSize={"lg"}  color={"black"} pb={4}>
                      I see myself as a highly skilled and experienced IT
                          Professional at leadership role in a organization. My
                          long term goal still be to continue grow and develop
                          Progessional.
                      </AccordionPanel>
                    </AccordionItem>

                   


                  </Accordion>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
