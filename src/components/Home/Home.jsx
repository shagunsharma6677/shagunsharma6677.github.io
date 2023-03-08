import React from "react";
import "./Home.css"
import Button from '../Button/Button'
import Wave from "react-wavify"

const Home = () => {
  return (
    <div id="home" className='home-wrapper'>

      <button id='resume-button-2'></button>
      <div className='h-wrap-cont'>
        <div className='home-left'>
          <div className='h-left-wrapper'>
            <div className='h-title-head'>
              <span>Hi There</span>
              <br />
              <span>I am <span id="user-detail-name">Shagun Sharma</span> </span>
              <br />
              <span>A FULL-Stack Developer</span>

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
                  <Button title="Download CV" />
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