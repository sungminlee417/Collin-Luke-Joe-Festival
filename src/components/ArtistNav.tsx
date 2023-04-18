import { useState, useEffect } from "react";
import horizontalLogo from "../images/horizontal-logo.png";
import navLogo from "../images/nav-logo.png";
import { NavLink } from "react-router-dom";

const ArtistNav = () => {
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

  return (
    <div
      className={`navigation flex fixed transition justify-between z-10 lg:px-28 md:px-14 px-10 py-8 font-bold md:text-2xl font-source w-full shadow-md bg-white`}
    >
      <div className="align-middle">
        <NavLink to="/" className="flex items-center">
          <img
            src={horizontalLogo}
            className="md:block hidden h-14 object-contain"
            alt="logo"
          />
          <img
            className="md:hidden block text-4xl h-14 object-contain"
            src={navLogo}
            alt="logo"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default ArtistNav;
