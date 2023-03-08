import React from 'react'
import Wave from 'react-wavify'
import "./HomeSvg.css"

const HomeSvg = ({ dir }) => {
    return (
        <div className='root-home-svg'>
            <Wave
                className="wave"
                fill="#222222"
                style={{ transform: dir === "up" ? "rotate(0deg)" : "rotate(180deg)", marginTop: dir === "down" ? "-6px" : "0px" }}
                paused={false}
                options={{
                    height: 23,
                    amplitude: 45,
                    speed: 0.21,
                    points: 5
                }}
            />

        </div>

    )
}

export default HomeSvg

    // < div class="root-home-svg" >
    //     <div style="width: 100%; display: inline-block;" class="wave-svg">
    //         <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M 0 49.27210004781097 C 221.83333333333331 41.803443864424246 221.83333333333331 41.803443864424246 443.66666666666663 45.53777195611761 C 665.5 49.27210004781097 665.5 49.27210004781097 887.3333333333333 39.868940797452886 C 1109.1666666666665 30.4657815470948 1109.1666666666665 30.4657815470948 1331 42.82974261692815 L 1331 154 L 0 154 Z" fill="#fff">
    //             </path>
    //         </svg>
    //     </div>
    //             </div >