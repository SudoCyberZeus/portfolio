import "../pages/Contact.css";
import call from "../assets/img/call.png";
import email from "../assets/img/email.png";
import home from "../assets/img/home.png";

import linkedin from "../assets/img/linkedin.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import twitter from "../assets/img/twitter.png";
import github from "../assets/img/github.png";

export default function Contact() {
    return (
        <section>
            <div className="contact">
                <div className="details">
                    <div className="title">
                        Contact Me
                    </div>
                    <p>
                        I am available for consultations, part-time work, and even permanent employment. Contact me with as many questions as you may have I am more than willing to answer honestly and informativelly.
                    </p>
                    <div className="phone">
                        <img src={home} alt="" width={20}/>
                        <a href="tel:+27">
                            073 609 9284
                        </a>
                    </div>
                    <div className="phone">
                        <img src={call} alt="" width={20}/>
                        <a href="tel:+27">
                            073 609 9284
                        </a>
                    </div>
                    <div className="email">
                        <img src={email} alt="" width={20}/>
                        <a href="mailto:banelevictorm@gmail.com">
                            banelevictorm@gmail.com
                        </a>
                    </div>
                    <hr />
                    <div className="socials">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="" width={20}/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="" width={20}/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="" width={20}/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="" width={20}/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="" width={20}/>
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="subtitle">
                        Send me a message
                    </div>
                    <form className="con-frm" action="" method="POST">
                        <div className="frm-g">
                            <input type="text" name="names" id="names" required placeholder="Your Name..."/>
                        </div>
                        <div className="frm-g">
                            <input type="tel" name="numbers" id="numbers" required placeholder="Cell Number..."/>
                        </div>
                        <div className="frm-g">
                            <input type="email" name="email" id="email" required placeholder="Email Address..."/>
                        </div>
                        <div className="frm-g">
                            <textarea name="messahe" id="message" required placeholder="Message..."></textarea>
                        </div>
                        <div className="frm-g">
                            <input type="button" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}