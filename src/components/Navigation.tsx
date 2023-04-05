import { useState, useEffect } from "react";

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
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  return (
    <div
      className={`flex fixed transition ease-in-out justify-between w-full z-10 lg:px-28 md:px-14 px-10 py-14 font-bold md:text-2xl text-xl font-source ${
        scroll ? "bg-white shadow-md" : "text-white"
      }`}
    >
      <div>
        <button
          onClick={() => {
            scrollSmoothlyTo("landingpage-section");
          }}
        >LONG LAKE MUSIC FESTIVAL</button>
      </div>
      <div className="flex gap-10">
        <button className="text-[#3c6e71] hover:text-[#2c5153]">TICKETS</button>
        <button className="text-[#3c6e71] hover:text-[#2c5153]">DONATE</button>
        <button
          className="text-[#3c6e71] hover:text-[#2c5153]"
          onClick={() => {
            scrollSmoothlyTo("newsletter-section");
          }}
        >
          SIGN UP FOR EMAILS
        </button>
        <button
          className="text-[#3c6e71] hover:text-[#2c5153]"
          onClick={() => {
            scrollSmoothlyTo("contact-section");
          }}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Navigation;
