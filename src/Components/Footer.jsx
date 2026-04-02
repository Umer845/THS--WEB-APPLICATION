import "../styles/Footer.css";
import Logo from "../assets/Footer Logo.png";
import GooglePlay from "../assets/Google-Play.png";
import AppStore from "../assets/App-Store.png";
import Tiktok from "../assets/tiktok.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import MapImg from "../assets/Map.png";
import Master from "../assets/mastercard.png";
import Visa from "../assets/visa.png";
import Jazzcash from "../assets/jazzcash.png";
import Easypaisa from "../assets/easypaisa.png";
import usti from "../assets/usti-logo.png"
import Arrow from "../assets/up-arrow.png";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}
                <div className="footer-left">
                    <img src={Logo} alt="logo" className="logo" />

                    <h2 className="regular">
                        The <span>Hungry</span> Spot
                    </h2>

                    <p className="desc-title sans">
                        The Hungry Spot is your go-to destination in Lahore for bold flavors,
                        quick bites, and satisfying meals. We serve freshly prepared fast food
                        made with quality ingredients, delivering taste, speed, and value in every bite.
                    </p>

                    <div className="socials">
                        <a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram" /></a>
                        <a href="https://www.tiktok.com/"><img src={Tiktok} alt="Tiktok" /></a>
                        <a href="https://www.linkedin.com/"><img src={Linkedin} alt="Linkedin" /></a>
                    </div>
                </div>

                {/* CENTER */}
                <div className="footer-center">
                    <h3 className="regular">Our Timings</h3>
                    <p className="sans">Monday - Sunday</p>
                    <p className="sans">04:00 PM - 03:45 AM</p>

                    <div className="support">
                        <p className="regular">Phone:  <span className="sans">+92 332 5655526</span></p>
                        <p className="sans">Email: support@thehungryspot.com</p>
                    </div>


                    <div className="store-buttons">
                        <img src={GooglePlay} alt="google" />
                        <img src={AppStore} alt="apple" />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="footer-right">
                    <img
                        src={MapImg}
                        alt="map"
                        className="map"
                        onClick={() => {
                            window.open(
                                "https://www.google.com/maps?q=F8QG+M98, Model Town, Lahore, Pakistan",
                                "_blank"
                            );
                        }}
                    />

                    <div className="payments">
                        <img src={Master} alt="Master Card" />
                        <img src={Visa} alt="Visa" />
                        <img src={Jazzcash} alt="Jazz Cash" />
                        <img src={Easypaisa} alt="Easypaisa" />
                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <div className="links">
                    <a href="#" className="sans">Terms and Conditions</a>
                    <a href="#" className="sans">Privacy Policy</a>
                </div>

                <p className="sans">© 2026 The Hungry Spot All Rights Reserved.</p>

                <div className="powered">
                    <p className="regular">Powered by <img src={usti} alt="" /></p>
                </div>
            </div>

            {/* SCROLL TOP BUTTON */}
            <button className="scroll-top">
                <img src={Arrow} alt="Scroll to top" />
            </button>

        </footer>
    );
}