import React from 'react'

const Navbar = () => {
    return (
        <>
            <div style={{ display: "flex" }} id="nav-menu">
                <a href="#" class="nav-link home">Home</a>
                <a href="#" class="nav-link about">About</a>
                <a href="#" class="nav-link skills">Skills</a>
                <a href="#" class="nav-link projects">Projects</a>
                <a href="#" class="nav-link contact">Contact</a>
                <a href="#" class="nav-link resume">Resume</a>
                <button id='resume-button-1'>Resume</button>

            </div>
        </>
    )
}

export default Navbar