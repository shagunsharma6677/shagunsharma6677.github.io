import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import image from "./next.jpeg";
import Fade from "react-reveal/Fade";
import img from "./frenzy.jpeg";

const Projects = () => {
  return (
    <div className="project-card" id="projects">
      <Fade bottom>
        <h2>Projects</h2>
      </Fade>
      <div className="proj-card-wrapper">
        <div>
          <Fade left>
            <ProjectCard
              img="https://user-images.githubusercontent.com/106108504/221401830-52ba33d9-9c7e-459c-a641-c0e72950f325.png"
              des="Fashion flaire is an e-commerce website that primarily sells and delivers cloths and accessories . This is collabrative project. We have created clone of Ajio.com website in 5 days. User able to signup and login successfully. Also user able to see, buy, add and make payment through website and admin side function is also added."
              head="Flashion Flare (Ajio Clone)"
              deploy="https://fashion-flare.vercel.app/"
              git="https://github.com/ShashankBijapur/feigned-copper-2423"
              stack={["devicon-express-original colored","devicon-mongodb-plain colored","devicon-react-original colored","devicon-redux-original colored",]}
            />
          </Fade>
        </div>
        <div>
          <Fade right>
            <ProjectCard
              img="https://user-images.githubusercontent.com/60788879/217726915-8ccdcc76-6cf6-4abe-894b-cf4c1c15e115.png"
              des="Two-Punch is an fitness services website that sells various exercise and healthy recipes. This is collabrative project. We have created clone of Ajio.com website in 5 days. User able to signup and login successfully."
              head="Two-Punch Fitness"
              deploy="https://admirable-raindrop-842e4c.netlify.app/"
              git="https://github.com/shagunsharma6677/Two-Punch-Fitness-Website"
              stack={["devicon-express-original colored","devicon-mongodb-plain colored","devicon-html5-plain colored","devicon-css3-plain colored"]}
            />
          </Fade>
        </div>
        <div>
          <Fade left>
            <ProjectCard
              deploy="https://frontend-suhail3535.vercel.app/"
              git="https://github.com/shagunsharma6677/fashion-frinzy-002"
              des="Fashion Frenzy is ECommerce Website & is a clone of Anthropologie. With a vast collection of products of fashion and clothing, we offer a seamless shopping experience. Our user-friendly interface and secure payment options ensure a hassle-free shopping experience for our customers. Shop with us today and discover the convenience of online shopping!"
              head="Fashion Frinzy"
              img={img}
              stack={["devicon-express-original colored","devicon-mongodb-plain colored","devicon-react-original colored","devicon-redux-original colored",]}
            />
          </Fade>
        </div>

        <div>
          <Fade right>
            <ProjectCard
              deploy="https://tubular-fairy-075515.netlify.app/"
              git="https://github.com/shagunsharma6677/undisturbed-health-4152"
              des="Next.com is the clone of apple website. Throught this user can buy varous apple products like Mac book I phone IPad. It has an inteactive UI with reveal animation. It is an individual project build in 5 days."
              head="Next.com (Apple Clone)"
              img={image}
              stack={["devicon-express-original colored","devicon-mongodb-plain colored","devicon-react-original colored","devicon-redux-original colored",]}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;
