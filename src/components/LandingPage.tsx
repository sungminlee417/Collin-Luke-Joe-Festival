import backgroundImage from "../images/sample_landing_page.jpg";

const LandingPage = () => {
  return (
    <>
      <div
        className="h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col justify-center text-10xl text-[#353535] h-full font-playfair text-center">
          <div>Long Lake</div>
          <div> Music Festival</div>
        </div>
      </div>
      <div className="text-5xl italic p-10">
        <strong>"Off The Dock Chamber Festival</strong> aims to foster an
        invigorating concert-going experience by embracing the energy of new
        up-and-coming artists. With the promise of providing a gateway to
        connect with a deeply engaged classical music loving community, OTD is
        an inspiring modern platform for emerging artists on the East Coast."
      </div>
    </>
  );
};
export default LandingPage;
