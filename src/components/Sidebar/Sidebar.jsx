import React from 'react'
import "./Sidebar.css"




const Sidebar = () => {
    return (
        <div style={{height:"100vh"}} className='sidebar-div'>
            <a href="">

            </a>

            <a href="">
                <i style={{fontSize:"35px",color:"#68D372"}} class="devicon-linkedin-plain"></i>
            </a>

            <a href="">
                <i style={{fontSize:"35px",color:"#68D372"}} class="devicon-github-original colored"></i>
            </a>


            <a href="">
                <i style={{fontSize:"35px",color:"#68D372"}} class="devicon-facebook-plain colored"></i>
            </a>

            <a href="">
                <i style={{fontSize:"35px",color:"#68D372"}} class="devicon-twitter-original colored"></i>
            </a>
        </div>
    )
}

export default Sidebar