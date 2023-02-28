import React from 'react'
import "./Button.css"

const Button = ({ bg }) => {
    return (
        <button style={{ backgroundColor: bg === false ? "#222222" : "#68d372" }} className='our-button'>Download Resume</button>
    )
}

export default Button