import { useState } from "react";
import { Parallax } from "react-parallax";
import backgroundImage from "../images/sample_landing_page.jpg";
import landingPageLogo from "../images/landing-logo.png";
import landingPageLogoWhite from "../images/landing-logo-white.png";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [title] = useState("Off The Dock Chamber Festival");
  const [description] = useState(
    "An inspiring modern platform for emerging classical artists."
  );

  const buttonVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  function scrollTo(): void {
    const element = document.querySelector(".concert-calendar-section")!;
    const offset = document.querySelector(".navigation")?.clientHeight || 0;
    const topOffset =
      element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ behavior: "smooth", top: topOffset });
  }

  return (
    <Parallax
      bgImage={backgroundImage}
      strength={500}
      bgImageStyle={{ objectFit: "cover", backgroundPosition: "50% 50%" }}
    >
      <div className="landingpage-section h-screen relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title absolute flex flex-col items-center justify-center h-full p-4 w-full"
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="w-5/6 max-w-lg"
            src={landingPageLogoWhite}
            alt="logo"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="landing-desc text-white mt-8 text-2xl lg:text-4xl font-serif leading-relaxed max-w-4xl text-center"
          >
            <strong className="text-[#E1D7C6]">{title}</strong>
            <br />
            <p className="italic">{description}</p>
          </motion.div>
          <motion.button
            whileHover="hover"
            variants={buttonVariants}
            onClick={scrollTo}
            className="bg-[#579BB1] hover:bg-[#4e8b9f] text-white py-3 px-6 rounded-full mt-8 font-semibold text-xl"
          >
            Join the festival
          </motion.button>
        </motion.div>
      </div>
    </Parallax>
  );
};

export default LandingPage;
