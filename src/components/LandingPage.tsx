import backgroundImage from "../images/sample_landing_page.jpg";

const LandingPage = () => {
  return (
    <>
      <div
        className="h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col justify-center text-10xl text-[#353535] h-full font-playfair">
          <div>Long Lake</div>
          <div> Music Festival</div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
