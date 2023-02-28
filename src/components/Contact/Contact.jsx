import React from "react";
import "./Contact.css"

const Contact = () => {
    return (
        <div id="contact">
            
            {/* <div id="contact-github"> contact-github</div>
            <div id="contact-linkedin"> contact-linkedin</div>
            <div id="contact-phone"> contact-phone</div>
            <div id="contact-email">contact-email</div> */}

            <div className="maindiv">
                <div className="line">
                    
                </div>
                <div className="topdiv">
                    <h3>Contact </h3>
                </div>
                <h1>Call or Write <span className="span1">Anytime.</span></h1>
                <div className="test">
                    <div className="side1">
                        <div className="sdiv">
                            <label htmlFor="Full Name">Full Name</label> <input type="text" /> <label htmlFor="Email Address">Email Address</label> <input type="text" /> <label htmlFor="Message">Message</label> <input className="message1" type="text" />
                        </div>
                    </div>
                    <div className="side2"><img alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpTNfF1OQEAW5grs8PtazaS0o46mOSBuqmw&usqp=CAU" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpTNfF1OQEAW5grs8PtazaS0o46mOSBuqmw&usqp=CAU" /></div>
                </div>
                <div className="message">
                    <button>
                        <img className='img1' src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-sent.png"alt='img2' />
                        <p>Send Message</p></button>
                </div>
                <div className="footer1">
                    <div className="side3">
                        <ul>
                            <li>
                                <h3>Quick Links</h3>
                            </li>
                            <li>Home</li>
                            <li>About</li>
                            <li id="contact-linkedin">LinkedIn</li>
                            <li>Projects</li>
                            <li id="contact-github">Github</li>
                            <li>Contact <span id="contact-phone">91+9760657327</span></li>
                            <li id="contact-email">shagunsharma6677@gmail.com</li>
                        </ul>
                    </div>
                    <div className="side4">
                        <ul>
                            <li>
                                <h3>Support</h3>
                            </li>
                            <li>Terms and Conditions</li>
                            <li>Privacy</li>
                            <li>Cookies Preferences</li>
                        </ul>
                    </div>
                    <div className="footer2">
                        <h3>Get in Touch</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact