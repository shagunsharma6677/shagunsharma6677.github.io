import React from 'react'
import "./Sidebar.css"




const Sidebar = () => {
    return (
        <div style={{ height: "100vh", backgroundColor: "#222222" }} className='sidebar-div'>


            <a href="https://www.linkedin.com/in/shagun-s-84b0a6238/" rel="noopener noreferrer" target="_blank" className='aTag1'>
                <i style={{ fontSize: "35px", color: "#68D372" }} className="devicon-linkedin-plain"></i> 
            </a>

            <a href="https://github.com/shagunsharma6677" rel="noopener noreferrer" target="_blank"
             className='aTag1'>
                <i style={{ fontSize: "35px", color: "#68D372" }} className="devicon-github-original colored"></i>
            </a>

            <a href="https://api.whatsapp.com/send?phone=9760657327&text=Send20%a20%quote" rel="noopener noreferrer" target='_blank'  className='aTag1'>
                <i style={{ fontSize: "35px", color: "#68D372" }} className="fa fa-whatsapp"></i>
            </a>
            <a href=""></a>


        </div>
    )
}

export default Sidebar