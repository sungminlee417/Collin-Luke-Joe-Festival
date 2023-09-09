import { useState, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import horizontalLogo from "../images/horizontal-logo.png";
import horizontalLogoWhite from "../images/horizontal-logo-white.png";
import navLogo from "../images/nav-logo.png";
import navLogoWhite from "../images/nav-logo-white.png";
import { motion } from "framer-motion";

function Navigation() {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const match = useMatch("/");

  console.log(match);

  useEffect(() => {
    const landingPageEl = document.querySelector(`.landingpage-section`);
    const aboutPageEl = document.querySelector(`.about-page`) as HTMLElement;
    const navEl = document.querySelector(".navigation");

    if (landingPageEl && navEl) {
      const elementOffset = landingPageEl.clientHeight || 0;
      const offset = navEl.clientHeight || 0;
      setScroll(window.scrollY > elementOffset - offset);
    } else if (aboutPageEl && navEl) {
      const elementOffset = aboutPageEl.offsetTop;
      const offset = navEl.clientHeight || 0;
      setScroll(window.scrollY > elementOffset - offset);
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      const landingPageEl = document.querySelector(`.landingpage-section`);
      const aboutPageEl = document.querySelector(`.about-page`) as HTMLElement;
      const navEl = document.querySelector(".navigation");

      if (landingPageEl && navEl) {
        const elementOffset = landingPageEl.clientHeight || 0;
        const offset = navEl.clientHeight || 0;
        setScroll(window.scrollY > elementOffset - offset);
      } else if (aboutPageEl && navEl) {
        const elementOffset = aboutPageEl.offsetTop;
        const offset = navEl.clientHeight || 0;
        setScroll(window.scrollY > elementOffset - offset);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navButtonStyle = match
    ? scroll
      ? "text-[#c6b393] hover:text-[#b8a179]"
      : "text-[#E1D7C6] hover:text-[#c6b393]"
    : "text-[#c6b393] hover:text-[#b8a179]";

  function scrollTo(className: string): void {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector(`.${className}`)!;
      const offset = document.querySelector(".navigation")?.clientHeight || 0;
      const topOffset =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ behavior: "smooth", top: topOffset });
    }, 50);
  }

  return (
    <nav
      className={`navigation fixed flex justify-between w-full py-6 px-6 md:px-14 lg:px-28 font-bold md:text-md font-source transition z-10 ${
        scroll ? "bg-white shadow-md text-[#ABC4AA]" : "text-[#AEBDCA]"
      }`}
    >
      <motion.div
        className="align-middle"
        transition={{
          type: "spring",
          duration: 0.5,
          damping: 7,
          stiffness: 50,
        }}
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
      >
        <button
          className="flex items-center"
          onClick={() => scrollTo("landingpage-section")}
        >
          <img
            src={
              match
                ? scroll
                  ? horizontalLogo
                  : horizontalLogoWhite
                : horizontalLogo
            }
            alt="Logo"
            className="h-10 lg:block hidden object-contain"
          />
          <img
            src={match ? (scroll ? navLogo : navLogoWhite) : navLogo}
            alt="Logo"
            className="block h-10 lg:hidden object-contain text-3xl"
          />
        </button>
      </motion.div>
      <motion.ul
        className="flex gap-6 md:gap-14 lg:ml-auto"
        transition={{
          type: "spring",
          duration: 0.5,
          damping: 7,
          stiffness: 50,
        }}
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
      >
        <li>
          <div className="flex gap-1">
            <div
              className={`text-md hidden lg:block transition-all duration-300 group drop-down-button ${navButtonStyle} cursor-pointer`}
            >
              PAST SEASONS
            </div>
            <i
              className={`block lg:hidden text-2xl fa-solid fa-circle-dollar-to-slot fa-solid fa-music ${navButtonStyle}`}
            ></i>
            <div className="relative">

              <div
                className="absolute top-6 end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    2023 Season
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a
            href="https://www.gofundme.com/f/support-a-festival-for-emerging-classical-artists?member=26590045&utm_campaign=p_cp+share-sheet&utm_content=undefined&utm_medium=copy_link_all&utm_source=customer&utm_term=undefined"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className={`hidden lg:block transition-all duration-300 ${navButtonStyle}`}
            >
              DONATE
            </span>
            <i
              className={`block lg:hidden text-2xl fa-solid fa-circle-dollar-to-slot ${navButtonStyle}`}
            ></i>
          </a>
        </li>
      </motion.ul>
    </nav>
  );
}

export default Navigation;
