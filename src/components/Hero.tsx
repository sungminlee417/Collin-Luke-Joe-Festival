import { useState } from "react";
import { Parallax } from "react-parallax";
import backgroundImage from "../images/sample_landing_page.jpg";
import landingPageLogoWhite from "../images/landing-logo-white.png";
import { motion } from "framer-motion";

const Hero = () => {
  const [description] = useState(
    "An inspiring modern platform for emerging classical artists."
  );

  function scrollTo(): void {
    const element = document.querySelector(".concert-calendar-section")!;
    const offset = document.querySelector(".navigation")?.clientHeight || 0;
    const topOffset =
      element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ behavior: "smooth", top: topOffset });
  }

  return (
    <section className="landingpage-section">
      <Parallax
        bgImage={backgroundImage}
        strength={500}
        bgImageStyle={{ objectFit: "cover", backgroundPosition: "50% 50%" }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <motion.img
                className="w-4/6 max-w-lg mx-auto"
                src={landingPageLogoWhite}
                alt="Off The Dock Chamber Festival logo"
              />
            </h1>
            <div className="mt-4 sm:text-xl/relaxed text-white italic text-shadow-lg shadow-black">
              <p>Experience the power of modern classical music.</p>
              <p>{description}</p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-[#579BB1] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#4e8b9f] focus:outline-none active:bg-[#75AFC1] sm:w-auto"
                href="https://www.gofundme.com/f/support-a-festival-for-emerging-classical-artists?member=26590045&utm_campaign=p_cp+share-sheet&utm_content=undefined&utm_medium=copy_link_all&utm_source=customer&utm_term=undefined"
                rel="noopener noreferrer"
                target="_blank"
              >
                Support Us
              </a>

              <button
                className="block bg-white text-gray-700 w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none active:text-gray-500 sm:w-auto"
                onClick={scrollTo}
              >
                Join Festival
              </button>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Hero;
