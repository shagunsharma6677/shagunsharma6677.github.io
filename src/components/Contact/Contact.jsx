import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Toaster, toast } from "react-hot-toast";
import HomeSvg from "../Home/HomeSvg";

import "./Contact.css";
import { Fade } from "react-reveal";
import Button from "../Button/Button";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleToast = () => {
    toast("Mail Send Successfully...!!!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const [state, setState] = useState(false);

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
      <div id="contact">
        <div>
          <Toaster />
        </div>

        <div className="contact-heading">
          <Fade bottom>
            <h2>Contact Me </h2>
          </Fade>
        </div>

        <div className="contact-content">
          <Fade left>
            <div className="form-div">
              <form className="form" ref={form} onSubmit={sendEmail}>
                <label>Name</label>

                <input
                  type="text"
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label>Message</label>
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />

                <button
                  onClick={handleToast}
                  type="submit"
                  value="send"
                  style={{ backgroundColor: "#4aae54", cursor: "pointer", border: "1px solid black" }}
                  className="our-button"
                >
                  Send
                </button>

              </form>
            </div>
          </Fade>
          <Fade right>
            <div className="contact-img">
              <img
                src={
                  "https://mspronesti.github.io/static/media/about.fcd5f18ce5007375f7f31eaad46ce0f6.svg"
                }
                alt=""
              />
            </div>
          </Fade>
        </div>

        <div className="footer-links">
          <div className="footer-getInTouch">
            <h3>Get In Touch</h3>
            {/* <h4>You can reach out to me at</h4> */}
            <div>
              <p> shagunsharma6677@gmail.com</p>

              <p>+91-9760657327</p>
            </div>
            <p>Created By Shagun Sharma | © 2023. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
// https://mspronesti.github.io/static/media/about.fcd5f18ce5007375f7f31eaad46ce0f6.svg
