import { useState } from "react";
import backgroundImage from "../images/sample_landing_page.jpg";
import landingPageLog from "../images/landing-logo.png";

const LandingPage = () => {
  const [title] = useState('"Off The Dock Chamber Festival');
  const [description] = useState(
    "aims to foster an invigorating concert-going experience by embracing the energy of new up-and-coming artists. With the promise of providing a gateway to connect with a deeply engaged classical music loving community, OTD is an inspiring modern platform for emerging artists on the East Coast."
  );

  return (
    <div
      className="landingpage-section h-screen bg-cover relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="title absolute flex flex-col items-center justify-center lg:text-10xl text-[#3A6351] h-full font-merriweather font-semibold text-center md:text-9xl text-8xl p-4">
        <img className=" w-5/6" src={landingPageLog} alt="logo" />
        <div className="landing-desc lg:text-4xl md:text-3xl text-3xl text-white italic p-10 font-source">
          <strong>{title}</strong> {description}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
