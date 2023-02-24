import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.onscroll = function () {
          if (window.scrollY > 50) {
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
      }, [scroll]);

    function scrollSmoothlyTo(className) {
      const element = document.querySelector(`.${className}`);
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    
    
    return (
        <div className={scroll ? "landing-header-scrolled":"landing-header"}>
            <div className="landing-header-name">
                LONG LAKE MUSIC FESTIVAL
            </div>
            <div className="landing-header-links">
                <div className="landing-header-link">TICKETS</div>
                <div className="landing-header-link">DONATE</div>
                <div className="landing-header-link">SIGN UP FOR EMAILS</div>
                <div className="landing-header-link" onClick={() => {scrollSmoothlyTo("contact-section");}}>CONTACT</div>
            </div>
        </div>
    );
};

export default Header; 