import React from "react";
import "./ProjectCard.css"


const ProjectCard = () => {
    return (
        <>
            <div className='project-wrapper project-card'>
                <div className='proj-cont'>
                    <div className='proj-left'>
                        <div className='proj-img-cont'>
                            <img src="https://jainex.vercel.app/static/media/pimg1.ce667dcc72252cb0abda.png" width={"200px"} alt="" />
                        </div>


                    </div>
                    <div className='proj-right'>
                        <div className="proj-right-cont">
                            <h3 >Featured Project</h3>
                            <h1 className="project-title">Lorem ipsum dolor sit.</h1>

                            <div className='proj-des project-description'>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis dolorum rem ea et praesentium tenetur facere temporibus similique voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus facere perspiciatis ullam ex quidem laudantium sapiente rem eveniet fuga.</p>


                            </div>
                            <div className='project-tech-stack'>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>CSS</div>
                            </div>

                            <div className="deploy-links">
                                <div className="project-github-link">Github Link</div>
                                <div className="project-deployed-link">Deployed</div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default ProjectCard