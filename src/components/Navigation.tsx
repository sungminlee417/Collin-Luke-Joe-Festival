import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import horizontalLogo from "../images/horizontal-logo.png";
import navLogo from "../images/nav-logo.png";

function Navigation() {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 50);
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
        scroll ? "bg-white shadow-md text-[#7895B2]" : "text-[#AEBDCA]"
      }`}
    >
      <div className="align-middle">
        <button
          className="flex items-center"
          onClick={() => scrollTo("landingpage-section")}
        >
          <img
            src={horizontalLogo}
            alt="Logo"
            className="h-14 lg:block hidden object-contain"
          />
          <img
            src={navLogo}
            alt="Logo"
            className="block h-14 lg:hidden object-contain text-4xl"
          />
        </button>
      </div>
      <ul className="flex gap-10 md:gap-14 lg:ml-auto">
        <li>
          <NavLink to="/about">
            <span className="hidden lg:block text-[#4B5563] hover:text-gray-900 transition-all duration-300">
              ABOUT US
            </span>
            <i className="block lg:hidden text-4xl fa-solid fa-circle-info"></i>
          </NavLink>
        </li>
        <li>
          <button>
            <span className="hidden lg:block text-[#4B5563] hover:text-gray-900 transition-all duration-300">
              DONATE
            </span>
            <i className="block lg:hidden text-4xl fa-solid fa-circle-dollar-to-slot"></i>
          </button>
        </li>
      </ul>
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
