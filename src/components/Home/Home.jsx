import React from "react";
import "./Home.css"
import Button from '../Button/Button'
import Wave from "react-wavify"
import Sidebar from "../Sidebar/Sidebar";
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';



const Home = () => {
  const myAppRef = document.querySelector('.scrollable-div')
  const handlePDF = () => {
    const link = document.createElement('a');
    link.href = "./Download/Shagun-Sharma-Resume.pdf";
    link.download = 'Shagun-Sharma-Resume.pdf';
    link.click();
  }
  return (
    <div id="home" className='home-wrapper'>
      <Sidebar />
      <button id='resume-button-2'></button>
      <div className='h-wrap-cont'>
        <div className='home-left'>
          <div className='h-left-wrapper'>
   
              <div className='h-title-head'>


                <span style={{ color: "white" }}>Hi There</span>
                <br />

                <span>I am <span id="user-detail-name">Shagun</span> </span>
                <div className="typewriter">
                  <Typewriter
                    options={{
                      strings: ["A Full Stack Web Developer", "A Traveller", "A MERN Stack Developer"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50
                    }}
                  />
                </div>

                {/* <span>A FULL-Stack Developer</span> */}

              </div>
              <div id="user-detail-intro" className='h-title-down'>
                <p >
                  Passionate developer with strong problem-solving
                  abilities, proficient in JavaScript, React.js, and
                  Node.js, keen to learn new technologies and
                  frameworks. Looking for growth-oriented learning
                  environment in a reputed firm driven by technology
                  where I can utilize and enhance my skills for mutual
                  benefits.
                </p>
                <div className='home-buttons'>
                  <div style={{ cursor: "pointer" }}>
                    <a id="resume-link-2" href="https://drive.google.com/drive/u/0/folders/1M4nqwtI7_zxN_uOKWnDoDhcb8oBVvy-Z" rel="noopener noreferrer" download target="_blank">

                      <button onClick={handlePDF} style={{ backgroundColor: "#68d372", cursor: "pointer" }} className='our-button'>Resume</button>

                    </a>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <Button bg={false} title="Contact Me" />
                  </div>
                </div>
                <div className='h-scroller'>Scroll-Down</div>
              </div>
       
          </div>
        </div>
        <div className='home-right'>
       
            <div className='h-right-wrapper'>
              <img className='profile-pic home-img' src="https://thumbs.gfycat.com/ColorlessBitesizedKob-max-1mb.gif" alt="" />

            </div>

        </div>

      </div>

      
    </div>
  )
}

export default Home