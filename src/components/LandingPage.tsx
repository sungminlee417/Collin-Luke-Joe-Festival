import backgroundImage from "../images/sample_landing_page.jpg";

const LandingPage = () => {
  return (
    <>
      <div
        className="landingpage-section h-screen bg-cover relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="title absolute flex flex-col justify-center lg:text-10xl text-[#7895B2] h-full font-merriweather font-semibold text-center md:text-9xl text-8xl p-4">
          <div> Off the Dock</div>
          <div>Chamber Festival</div>
          <div className="landing-desc lg:text-4xl md:text-3xl text-3xl text-white italic p-10 font-source">
            <strong>"Off The Dock Chamber Festival</strong> aims to foster an
            invigorating concert-going experience by embracing the energy of new
            up-and-coming artists. With the promise of providing a gateway to
            connect with a deeply engaged classical music loving community, OTD
            is an inspiring modern platform for emerging artists on the East
            Coast."
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
