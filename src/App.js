import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import HomeSvg from "./components/Home/HomeSvg";
// import Wave from "react-wavify";

// import wordpress from "./assets/wordpress.svg";
// import shopify from "./assets/shopify.svg";
// import htmlIcon from "./assets/html-icon.svg";
// import cssIcon from "./assets/css-icon.svg";
// import sassIcon from "./assets/sass-icon.svg";
// import jsIcon from "./assets/js-icon.svg";
// import nodeIcon from "./assets/node-icon.svg";
// import reactIcon from "./assets/react-icon.svg";
// import typescriptIcon from "./assets/typescript-icon.svg";
// import vueIcon from "./assets/vue-icon.svg";
// import boostrapIcon from "./assets/bootstrap-icon.svg";
// // import bootstrapIcon from "./assets/bootstrap-icon.svg"
// import { useCallback } from "react";
// import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="particle-div">
        <Navbar />
        {/* <Sidebar/> */}
        <Home />
        <HomeSvg dir="down" />
        <About />
        <HomeSvg dir="up" />
        <Skills />
        <Projects />
        <HomeSvg dir="down" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
