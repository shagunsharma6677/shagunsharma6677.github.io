import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import HomeSvg from "./components/Home/HomeSvg";
import Wave from "react-wavify";

import wordpress from "./assets/wordpress.svg";
import shopify from "./assets/shopify.svg";
import htmlIcon from "./assets/html-icon.svg";
import cssIcon from "./assets/css-icon.svg";
import sassIcon from "./assets/sass-icon.svg";
import jsIcon from "./assets/js-icon.svg";
import nodeIcon from "./assets/node-icon.svg";
import reactIcon from "./assets/react-icon.svg";
import typescriptIcon from "./assets/typescript-icon.svg";
import vueIcon from "./assets/vue-icon.svg";
import boostrapIcon from "./assets/bootstrap-icon.svg";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="App">
      <div className="particle-div">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: 1,
            },
            detectRetina: true,
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  elementId: "repulse-div",
                  enable: false,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 2,
                },
                connect: {
                  distance: 80,
                  lineLinked: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 2,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              lineLinked: {
                blink: false,
                color: "#000",
                consent: false,
                distance: 150,
                enable: false,
                opacity: 0.4,
                width: 5,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "out",
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                limit: 20,
                value: 15,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.2,
                  speed: 1,
                  sync: false,
                },
                random: true,
                value: 0.8,
              },
              rotate: {
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false,
                },
                direction: "random",
                random: true,
                value: 0,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                image: [
                  {
                    src: boostrapIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: cssIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: wordpress,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: shopify,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: htmlIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: jsIcon,
                    width: 20,
                    height: 20,
                  },
                  // {
                  //   "src": mysqlIcon,
                  //   "width":200,
                  //   "height":220
                  // },
                  {
                    src: nodeIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: reactIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: sassIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: typescriptIcon,
                    width: 20,
                    height: 20,
                  },
                  // {
                  //   "src": vscodeIcon,
                  //   "width":200,
                  //   "height":220
                  // },
                  {
                    src: vueIcon,
                    width: 20,
                    height: 20,
                  },
                ],
                polygon: {
                  sides: 5,
                },
                stroke: {
                  color: "#000000",
                  width: 5,
                },
                type: "image",
              },
              size: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 40,
                  sync: false,
                },
                random: false,
                value: 20,
              },
            },
            polygon: {
              draw: {
                enable: false,
                lineColor: "#ffffff",
                lineWidth: 0.5,
              },
              move: {
                radius: 10,
              },
              scale: 1,
              url: "",
            },
            background: {
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
        />

        <Navbar />
        <Home />
        <HomeSvg dir="down" />
        <About />
        <HomeSvg dir="up" />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
