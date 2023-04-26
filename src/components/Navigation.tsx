import { useState, useEffect } from "react";
import horizontalLogo from "../images/horizontal-logo.png";
import navLogo from "../images/nav-logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollSmoothlyTo(className: string): void {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector<HTMLElement>(`.${className}`)!;
      const offset = document.querySelector(".navigation")?.clientHeight || 0;

      const topOffset =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        behavior: "smooth",
        top: topOffset,
      });
    }, 50);
  }

  return (
    <div
      className={`navigation flex fixed transition justify-between z-10 lg:px-28 md:px-14 px-10 py-8 font-bold md:text-2xl font-source w-full ${
        scroll ? "bg-white shadow-md text-[#7895B2]" : "text-[#AEBDCA]"
      }`}
    >
      <div className="align-middle">
        <button
          onClick={() => {
            scrollSmoothlyTo("landingpage-section");
          }}
          className="flex items-center"
        >
          <img
            src={horizontalLogo}
            className="lg:block hidden h-14 object-contain"
            alt="logo"
          />
          <img
            className="lg:hidden block text-4xl h-14 object-contain"
            src={navLogo}
            alt="logo"
          />
        </button>
      </div>
      <div className="flex lg:gap-10 md:gap-14 gap-10">
        <NavLink
          to="/about"
          className="m-auto"
        >
          <p className="lg:block hidden">ABOUT</p>
          <i className="fa-solid fa-circle-info lg:hidden block text-4xl"></i>
        </NavLink>
        <button className="">
          <p className="lg:block hidden">DONATIONS/SPONSORSHIPS</p>
          <i className="fa-solid fa-circle-dollar-to-slot lg:hidden block text-4xl"></i>
        </button>
        <button
          className=""
          onClick={() => {
            scrollSmoothlyTo("performers-section");
          }}
        >
          <p className="lg:block hidden">SEASON LINEUP</p>
          <i className="fa-solid fa-music lg:hidden block text-4xl"></i>
        </button>
        <button
          className=""
          onClick={() => {
            scrollSmoothlyTo("concert-calendar-section");
          }}
        >
          <p className="lg:block hidden">CONCERT SCHEDULE</p>
          <i className="fa-solid fa-calendar lg:hidden block text-4xl"></i>
        </button>

        <button
          className=""
          onClick={() => {
            scrollSmoothlyTo("contact-section");
          }}
        >
          <p className="lg:block hidden">CONTACT</p>
          <i className="fa-solid fa-envelope lg:hidden block text-4xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
