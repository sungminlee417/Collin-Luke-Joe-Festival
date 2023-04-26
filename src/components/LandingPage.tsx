import { useState } from "react";
import backgroundImage from "../images/sample_landing_page.jpg";
import landingPageLog from "../images/landing-logo.png";

const LandingPage = () => {
  const [title] = useState("Off The Dock Chamber Festival");
  const [description] = useState(
    "an inspiring modern platform for emerging classical artists"
  );

  return (
    <div
      className="landingpage-section h-screen bg-cover relative flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="title absolute flex flex-col items-center justify-center h-full p-4">
        <img className="w-5/6 max-w-lg" src={landingPageLog} alt="logo" />
        <div className="landing-desc text-white mt-8 text-2xl lg:text-4xl font-serif italic leading-relaxed max-w-4xl text-center">
          <strong className="text-[#3A6351]">{title}</strong>
          <br />
          {description}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
