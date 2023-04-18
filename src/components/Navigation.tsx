import { useState, useEffect } from "react";
import horizontalLogo from "../images/horizontal-logo.png";
import navLogo from "../images/nav-logo.png";

const Navigation = () => {
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

  function scrollSmoothlyTo(className: string): void {
    const element = document.querySelector<HTMLElement>(`.${className}`)!;
    const offset = (document.querySelector(".navigation") as HTMLElement)
      .offsetHeight;

    const topOffset =
      element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      behavior: "smooth",
      top: topOffset,
    });
  }

  return (
    <div
      className={`navigation flex fixed transition justify-between z-10 lg:px-28 md:px-14 px-10 py-8 font-bold md:text-2xl font-source w-full ${
        scroll ? "bg-white shadow-md" : "text-white"
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
        <button
          className="text-[#3c6e71] hover:text-[#2c5153]"
          onClick={() => {
            scrollSmoothlyTo("concert-calendar-section");
          }}
        >
          <p className="lg:block hidden">EVENT SCHEDULE</p>
          <i className="fa-solid fa-calendar lg:hidden block text-4xl"></i>
        </button>
        <button className="text-[#3c6e71] hover:text-[#2c5153]">
          <p className="lg:block hidden">DONATATIONS/SPONSORSHIPS</p>
          <i className="fa-solid fa-circle-dollar-to-slot lg:hidden block text-4xl"></i>
        </button>
        <button
          className="text-[#3c6e71] hover:text-[#2c5153]"
          onClick={() => {
            scrollSmoothlyTo("newsletter-section");
          }}
        >
          <p className="lg:block hidden">EMAIL SIGNUP</p>
          <i className="fa-solid fa-right-to-bracket lg:hidden block text-4xl"></i>
        </button>
        <button
          className="text-[#3c6e71] hover:text-[#2c5153]"
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
