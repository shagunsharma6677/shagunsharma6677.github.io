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
                        <img src="https://avatars.githubusercontent.com/u/108183568?v=4" alt="" />
                    

                    </div>
                    <div  className='about-wrap-right'>
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
                <br />



                {/* <div id="user-detail-name" >Shagun</div>

                <div id="user-detail-intro">MERN JavaScript MongoDB Frontend Backend NodeJS HTML CSS Express</div>


                <button id="resume-button-2" >cvv</button> */}

            </div>

        </>)
}

export default About