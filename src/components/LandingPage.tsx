import backgroundImage from "../images/sample_landing_page.jpg";

const LandingPage = () => {
  return (
    <>
      <div
        className="landingpage-section h-screen bg-cover"
        // style={{ backgroundImage: `url(${backgroundImage})`}} 
      >
        <img className="absolute h-full w-full opacity-65" src={backgroundImage}></img>
        <div className="absolute flex flex-col justify-center text-10xl text-[#353535] h-full font-playfair text-center opacity-1 z-1">
          <div className="opacity-100"> Long Lake</div>
          <div> Music Festival</div>
          <div className="text-5xl text-white italic p-10 font-source">
          <strong>"Off The Dock Chamber Festival</strong> aims to foster an
          invigorating concert-going experience by embracing the energy of new
          up-and-coming artists. With the promise of providing a gateway to
          connect with a deeply engaged classical music loving community, OTD is
          an inspiring modern platform for emerging artists on the East Coast."
        </div>
        </div>
      </div>
      
    </>
  );
};
export default LandingPage;
