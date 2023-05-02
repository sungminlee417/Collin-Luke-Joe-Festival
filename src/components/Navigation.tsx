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
      className={`navigation fixed flex justify-between w-full py-8 px-10 md:px-14 lg:px-28 font-bold md:text-2xl font-source transition z-10 ${
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
            className="h-14 lg:block hidden object-contain"
          />
          <img
            src={match ? (scroll ? navLogo : navLogoWhite) : navLogo}
            alt="Logo"
            className="block h-14 lg:hidden object-contain text-4xl"
          />
        </button>
      </motion.div>
      <motion.ul
        className="flex gap-10 md:gap-14 lg:ml-auto"
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
          <NavLink to="/about">
            <span
              className={`hidden lg:block transition-all duration-300 ${
                match
                  ? scroll
                    ? "text-[#c6b393] hover:text-[#b8a179]"
                    : "text-[#E1D7C6] hover:text-[#c6b393]"
                  : "text-[#c6b393] hover:text-[#b8a179]"
              }`}
            >
              ABOUT US
            </span>
            <i
              className={`block lg:hidden text-4xl fa-solid fa-circle-info ${
                match
                  ? scroll
                    ? "text-[#c6b393] hover:text-[#b8a179]"
                    : "text-[#E1D7C6] hover:text-[#c6b393]"
                  : "text-[#c6b393] hover:text-[#b8a179]"
              }`}
            ></i>
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.gofundme.com/f/support-a-festival-for-emerging-classical-artists?member=26590045&utm_campaign=p_cp+share-sheet&utm_content=undefined&utm_medium=copy_link_all&utm_source=customer&utm_term=undefined"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className={`hidden lg:block transition-all duration-300 ${
                match
                  ? scroll
                    ? "text-[#c6b393] hover:text-[#b8a179]"
                    : "text-[#E1D7C6] hover:text-[#c6b393]"
                  : "text-[#c6b393] hover:text-[#b8a179]"
              }`}
            >
              DONATE
            </span>
            <i
              className={`block lg:hidden text-4xl fa-solid fa-circle-dollar-to-slot ${
                match
                  ? scroll
                    ? "text-[#c6b393] hover:text-[#b8a179]"
                    : "text-[#E1D7C6] hover:text-[#c6b393]"
                  : "text-[#c6b393] hover:text-[#b8a179]"
              }`}
            ></i>
          </a>
        </li>
      </motion.ul>
    </nav>
  );
}

// import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import horizontalLogo from "../images/horizontal-logo.png";
// import navLogo from "../images/nav-logo.png";

// function Navigation() {
//   const [scroll, setScroll] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     function handleScroll() {
//       setScroll(window.scrollY > 50);
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   function scrollTo(className: string): void {
//     navigate("/");
//     setTimeout(() => {
//       const element = document.querySelector(`.${className}`)!;
//       const offset = document.querySelector(".navigation")?.clientHeight || 0;
//       const topOffset =
//         element.getBoundingClientRect().top + window.pageYOffset - offset;
//       window.scrollTo({ behavior: "smooth", top: topOffset });
//     }, 50);
//   }

//   return (
//     <nav
//       className={`navigation fixed flex justify-between w-full py-8 px-10 md:px-14 lg:px-28 font-bold md:text-2xl font-source transition z-10 ${
//         scroll ? "bg-white shadow-md text-[#7895B2]" : "text-[#AEBDCA]"
//       }`}
//     >
//       <div className="align-middle">
//         <button
//           className="flex items-center"
//           onClick={() => scrollTo("landingpage-section")}
//         >
//           <img
//             src={horizontalLogo}
//             alt="Logo"
//             className="h-14 lg:block hidden object-contain"
//           />
//           <img
//             src={navLogo}
//             alt="Logo"
//             className="block h-14 lg:hidden object-contain text-4xl"
//           />
//         </button>
//       </div>
//       <ul className="flex gap-10 md:gap-14 lg:ml-auto">
//         <li>
//           <NavLink to="/about">
//             <span className="hidden lg:block">ABOUT</span>
//             <i className="block lg:hidden text-4xl fa-solid fa-circle-info"></i>
//           </NavLink>
//         </li>
//         {/* <li>
//           <button onClick={() => scrollTo("performers-section")}>
//             <span className="hidden lg:block">SEASON LINEUP</span>
//             <i className="block lg:hidden text-4xl fa-solid fa-music"></i>
//           </button>
//         </li> */}
//         <li>
//           <button>
//             <span className="hidden lg:block">DONATIONS/SPONSORSHIPS</span>
//             <i className="block lg:hidden text-4xl fa-solid fa-circle-dollar-to-slot"></i>
//           </button>
//         </li>
//         {/* <li>
//           <button onClick={() => scrollTo("concert-calendar-section")}>
//             <span className="hidden lg:block">CONCERT SCHEDULE</span>
//             <i className="block lg:hidden text-4xl fa-solid fa-calendar"></i>
//           </button>
//         </li> */}
//         {/* <li>
//           <button onClick={() => scrollTo("contact-section")}>
//             <span className="hidden lg:block">CONTACT</span>
//             <i className="block lg:hidden text-4xl fa-solid fa-envelope"></i>
//           </button>
//         </li> */}
//       </ul>
//     </nav>
//   );
// }

export default Navigation;
