import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
// import { Toaster, toast } from "react-hot-toast";
import { Fade } from "react-reveal";
import img2 from "./pictwo.jpg";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  // const handlePDF = () => {
  //   const link = document.createElement("a");
  //   link.href = "./Download/Shagun-Sharma-Resume.pdf";
  //   link.download = "Shagun-Sharma-Resume.pdf";
  //   link.click();
  // };
  // const handleToast = () => {
  //   toast("Mail Send Successfully...!!!", {
  //     icon: "👏",
  //     style: {
  //       borderRadius: "10px",
  //       background: "#333",
  //       color: "#fff",
  //     },
  //   });
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fj63rdn",
        "template_n1fimpq",
        form.current,
        "bzQg9onWAPDkgRjVd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/* <div className="contact-heading">
        <Fade bottom>
          <h2>Contact Me </h2>
        </Fade>
      </div> */}

      <div className="footer-links" id="contact">

        <a
          href="https://www.linkedin.com/in/shagun-s67/"
          target="_blank"
          rel="noreferrer"
          id="contact-linkedin"
        >
       Linked In
        </a>
        <a
          href="https://github.com/shagunsharma6677"
          target="_blank"
          rel="noreferrer"
          id="contact-github"
        >
          Github
        </a>
        <a
          href="mailto:subodhsingh8543@gmail.com"
          target="_blank"
          rel="noreferrer"
          id="contact-email"
        >
         shagunsharma6677@gmail.com
        </a>
        
        <a href="tel:+918279803556" target="_blank" rel="noreferrer" id="contact-phone">
        +919760657327
        </a>
        {/* <p id="contact-phone">+919760657327</p>
        <p id="contact-email">shagunsharma6677@gmail.com</p>
        <a
          id="contact-linkedin"
          href="https://www.linkedin.com/in/shagun-s-84b0a6238/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            style={{ fontSize: "35px", color: "#222222" }}
            className="devicon-linkedin-plain"
          ></i>
        </a>
        <a
          id="contact-github"
          href="https://github.com/shagunsharma6677"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            style={{ fontSize: "35px", color: "#222222" }}
            className="devicon-github-original colored"
          ></i>
        </a> */}





        {/* <ul>
          <li>
            <span>Contach & support</span>{" "}
          </li>

          <li>
            <span>Mobile:</span>
            <span id="contact-phone">+919760657327</span>
          </li>
          <li>
            <span>Email:</span>
            <span id="contact-email">shagunsharma6677@gmail.com</span>
          </li>
          <li>
            <span>Location:</span>
            <span>Uttrakhand, India</span>
          </li>
          <li>Terms & condition</li>

          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/shagun-s-84b0a6238/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              style={{ fontSize: "35px", color: "#222222" }}
              className="devicon-linkedin-plain"
            ></i>
          </a>
        </li>

        <a
          id="contact-github"
          href="https://github.com/shagunsharma6677"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            style={{ fontSize: "35px", color: "#222222" }}
            className="devicon-github-original colored"
          ></i>
        </a>


        <a
          href="https://api.whatsapp.com/send?phone=9760657327&text=Send20%a20%quote"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            style={{ fontSize: "35px", color: "#222222" }}
            className="fa fa-whatsapp"
          ></i>
        </a>

      </ul> */}

        {/* <div className="get-touch">
          <Fade right>
            <div>
              <li>Get in touch</li>
            </div>
            <div className="contat-social">

            </div>
          </Fade>
        </div> */}
      </div>
    </ >
  );
};

export default Contact;

{
  /* <input className='send_btn' type="submit" value="Send" /> */
}
