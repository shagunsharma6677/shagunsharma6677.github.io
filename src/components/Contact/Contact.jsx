import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

 

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact">
            <div className='contact-heading'>
                <h2>Contact</h2>
                {/* <div>Call or Write Anything</div> */}
            </div>
            <div className='contact-content'>
                <div className='form-div' >
                    <form className='form' ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea  name="message" />
                        {/* <input className='send_btn' type="submit" value="Send" /> */}
                        <button type='submit' value ="send" style={{ backgroundColor:  "#68d372",cursor:"pointer" }} className='our-button'>Send</button>

                    </form>
                </div>
                <div className='contact-img'>
                    <img src="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif" alt=""  />
                </div>

            </div>



            {/* <div id="contact-github"> contact-github</div>
            <div id="contact-linkedin"> contact-linkedin</div>
            <div id="contact-phone"> contact-phone</div>
            <div id="contact-email">contact-email</div> */}

            {/* <div className="maindiv">
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
            </div> */}
        </div>
    )
}

export default Contact