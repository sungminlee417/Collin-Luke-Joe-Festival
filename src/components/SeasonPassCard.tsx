const SeasonPassCard = () => {
  return (
    <li className="bg-white p-6 md:p-10 rounded-md shadow-lg transition transform hover:scale-105 md:mx-0 mx-4 flex lg:flex-row gap-14 flex-col justify-between">
      <div>
        <div className="text-4xl text-gray-900 font-extrabold mb-4">
          SEASON PASS
        </div>
        <div className="text-md text-gray-700 mt-4">
          Don't miss a single concert. Grab your Season Pass and experience an
          unforgettable music journey!
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://www.eventbrite.com/e/633665750317"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center px-8 py-4 w-fit rounded-md bg-[#579BB1] text-white text-md font-bold hover:bg-[#4e8b9f] transition duration-300"
        >
          Get Your Pass Now!
        </a>
      </div>
    </li>
  );
};

export default SeasonPassCard;
