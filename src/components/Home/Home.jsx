import React from "react";
import "./Home.css"
import Button from '../Button/Button'
import Wave from "react-wavify"
import Sidebar from "../Sidebar/Sidebar";
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import img from "./picone2.png"
import { Link } from "react-scroll";



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



            </div>
            <div id="user-detail-intro" className='h-title-down'>
              <p >
                Hello, and welcome to my portfolio! My name is Shagun Sharma, and I am a full-stack developer with a strong foundation & passion for working with cutting-edge web development technologies.
                With a focus on problem-solving and attention to detail Shagun is committed to building a successful career in this field.
              </p>
              <div className='home-buttons'>
                <div style={{ cursor: "pointer" }}>
                  <a id="resume-link-2" href="https://drive.google.com/drive/u/0/folders/1M4nqwtI7_zxN_uOKWnDoDhcb8oBVvy-Z" rel="noopener noreferrer" download target="_blank">

                    <button onClick={handlePDF} style={{ backgroundColor: "#68d372", cursor: "pointer" }} className='our-button'>Resume</button>

                  </a>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link className="nav-link contact" to="contact" smooth={true} duration={500} offset={200}>
                    <Button bg={false} title="Contact Me" />
                  </Link>



                </div>
              </div>
              <div className='h-scroller'>Scroll-Down</div>
            </div>

          </div>
        </div>
        <div className='home-right'>

          <div className='h-right-wrapper'>
            <img style={{maxWidth:"45vw"}} className='profile-pic home-img' src={img} alt="" />

          </div>

        </div>

      </div>


    </div>
  )
}

export default Home