import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (<>
        <div id="skills">
            <h2>Skills</h2>

            <div className='skills-wrapper'>
                <div className='skills-prog-cont'>
                    <h2>Programming Skills</h2>
                    <div className='skills-prog-div'>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>


                    </div>
                </div>

                <div className='skills-prog-cont'>
                    <h2>Programming Skills</h2>
                    <div className='skills-prog-div'>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="https://lakshanrukantha.github.io/img/icon/html-5.png" alt="" />
                        </div>


                    </div>
                </div>


            </div>

            <div className='git-details'>
                <h1>Github Details</h1>
            </div>

            <div className='git-stat-wrapper'>
                <div className='git-star-cont'>
                    <div  style={{marginBottom:"30px"}}>
                        <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=shagunsharma6677" alt="GitHub Commits Graph" />

                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div  style={{marginRight:"50px"}}>
                            <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=shagunsharma6677" alt="jainex's GitHub stats" />
                        </div>
                        <div  >
                            <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=shagunsharma6677" alt='random' />
                        </div>



                    </div>




                </div>

            </div>



            {/* <div className='skill-heading'>
                <h1>Skills</h1>

            </div>
            <div className='skills-banner'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTX4xbgJ7Os-54HOyyAc73Gh1FUhDc9ovgPR30taW_GGxQlAH7pNmLe1qwt5btR5ukA&usqp=CAU" alt="" width={"100%"} />

            </div>
            <div className='skills-stacks'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP_RBWniG6RLuxBFaaQFguZB9ycs_w6Xbjw&usqp=CAU" alt="" width={"50px"} />
                </div>

                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP_RBWniG6RLuxBFaaQFguZB9ycs_w6Xbjw&usqp=CAU" alt="" width={"50px"} />
                </div>


                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP_RBWniG6RLuxBFaaQFguZB9ycs_w6Xbjw&usqp=CAU" alt="" width={"50px"} />
                </div>



                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP_RBWniG6RLuxBFaaQFguZB9ycs_w6Xbjw&usqp=CAU" alt="" width={"50px"} />
                </div>


                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP_RBWniG6RLuxBFaaQFguZB9ycs_w6Xbjw&usqp=CAU" alt="" width={"50px"} />
                </div>


                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP_RBWniG6RLuxBFaaQFguZB9ycs_w6Xbjw&usqp=CAU" alt="" width={"50px"} />
                </div>
            </div>
            <div className="git-skills">

                <div className='skill-heading'>
                    <h1>Github Details</h1>
                </div>
                <div className="skills-card-name">Github Skills</div>

                <div>
                    <img className="skills-card-img" src="https://camo.githubusercontent.com/d2a6c58756a67c90c7b8fd4f021a73a97282da4d619c1413c0a8b450ba0bc8f8/68747470733a2f2f6769746875622d70726f66696c652d74726f7068792e76657263656c2e6170702f3f757365726e616d653d73686167756e736861726d6136363737" alt="" width={"1000px"} />
                </div>

                <div>
                    <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=shagunsharma6677" alt="" width={"500px"} />
                </div>
                <div>
                    <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=shagunsharma6677" alt="" width={"500px"} />
                </div>

                <div>
                    <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=shagunsharma6677" alt="" width={"500px"} />
                </div>







            </div> */}
        </div>






        {/* <img className="react-activity-calendar" src="" alt="" />

        <div className="react-activity-calendar" > */}


    </>)
}

export default Skills