import React from 'react'
import "./Button.css"

const Button = ({ bg, title }) => {
    return (
        <button style={{ backgroundColor: bg === false ? "#222222" : "#68d372", cursor: "pointer" }} className='our-button'>{title}</button>
    )
}

export { Button }