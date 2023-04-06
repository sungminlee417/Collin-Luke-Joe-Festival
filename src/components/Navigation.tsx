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
      className={`flex fixed transition justify-between z-10 lg:px-28 md:px-14 px-10 md:py-14 py-10 font-bold md:text-2xl font-source w-full ${
        scroll ? "bg-white shadow-md" : "text-white"
      }`}
    >
      <div className="align-middle">
        <button
          onClick={() => {
            scrollSmoothlyTo("landingpage-section");
          }}
        >
          <p className="md:block hidden">LONG LAKE MUSIC FESTIVAL</p>
          <i className="fa-solid fa-house md:hidden block text-4xl"></i>
        </button>
      </div>
      <div className="flex gap-10">
        <button className="text-[#3c6e71] hover:text-[#2c5153]">
          <p className="md:block hidden">TICKETS</p>
          <i className="fa-solid fa-ticket md:hidden block text-4xl"></i>
        </button>
        <button className="text-[#3c6e71] hover:text-[#2c5153]">
          <p className="md:block hidden"> DONATE</p>
          <i className="fa-solid fa-circle-dollar-to-slot md:hidden block text-4xl"></i>
        </button>
        <button
          className="text-[#3c6e71] hover:text-[#2c5153]"
          onClick={() => {
            scrollSmoothlyTo("newsletter-section");
          }}
        >
          <p className="md:block hidden">SIGN UP FOR EMAILS</p>
          <i className="fa-solid fa-right-to-bracket md:hidden block text-4xl"></i>
        </button>
        <button
          className="text-[#3c6e71] hover:text-[#2c5153]"
          onClick={() => {
            scrollSmoothlyTo("contact-section");
          }}
        >
          <p className="md:block hidden">CONTACT</p>
          <i className="fa-solid fa-envelope md:hidden block text-4xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
