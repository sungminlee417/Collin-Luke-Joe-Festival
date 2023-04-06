import backgroundImage from "../images/sample_landing_page.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="landingpage-section h-screen">
        <img
          className="absolute h-full w-full opacity-65 object-cover"
          src={backgroundImage}
        ></img>
        <div className="absolute flex flex-col justify-center lg:text-10xl text-[#353535] h-full font-playfair text-center md:text-9xl text-8xl">
          <div>Long Lake</div>
          <div> Music Festival</div>
<<<<<<< HEAD
          <div className="lg:text-5xl md:text-3xl text-2xl text-white italic p-10 font-source">
            <strong>"Off The Dock Chamber Festival</strong> aims to foster an
            invigorating concert-going experience by embracing the energy of new
            up-and-coming artists. With the promise of providing a gateway to
            connect with a deeply engaged classical music loving community, OTD
            is an inspiring modern platform for emerging artists on the East
            Coast."
          </div>
=======
          <div className="text-4xl text-white italic p-10 font-source">
          <strong>"Off The Dock Chamber Festival</strong> aims to foster an
          invigorating concert-going experience by embracing the energy of new
          up-and-coming artists. With the promise of providing a gateway to
          connect with a deeply engaged classical music loving community, OTD is
          an inspiring modern platform for emerging artists on the East Coast."
        </div>
>>>>>>> refs/remotes/origin/main
        </div>
      </div>
    </>
  );
};
export default LandingPage;
