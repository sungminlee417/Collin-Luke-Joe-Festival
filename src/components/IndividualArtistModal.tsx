import { IndividualArtistProps } from "../models/interfaces";
import ArtistImage from "./ArtistImage";
import { motion } from "framer-motion";
import { eventsData } from "../data/eventsData";
import IndividualConcertDate from "./IndividualConcertDate";

const IndividualArtistModal = ({ artist, onClose }: IndividualArtistProps) => {
  const renderEvents = () => {
    const filteredEvents = eventsData.filter(
      (event) => event.artists && artist.id in event.artists
    );

    return filteredEvents.map((event) => (
      <IndividualConcertDate key={event.title} event={event} />
    ));
  };

  return (
    <>
      <motion.section
        className="flex md:flex-row flex-col bg-white p-10 gap-10 md:h-160 h-140 lg:w-288 md:w-240 md:m-0 m-10 rounded-md overflow-auto"
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100vh" }}
      >
        <ul
          className={` basis-1/3 grid ${
            artist.images.length < 2 ? "" : "grid-cols-2"
          } gap-4`}
        >
          {artist.images.map((image) => {
            return (
              <li
                className="h-full hover:opacity-80 transition overflow-hidden"
                key={image}
              >
                <ArtistImage image={image} artist={artist} />
              </li>
            );
          })}
        </ul>
        <div className="basis-2/3 flex flex-col gap-6">
          <h2 className="flex flex-col gap-2 text-3xl">
            <span className="font-bold">{artist.name}</span>
            {artist.instruments && (
              <span className="text-xl italic"> {artist.instruments}</span>
            )}
          </h2>
          <div className="flex flex-col gap-10 overflow-scroll">
            <div className="flex flex-col gap-4 text-md">
              {artist.biography}
            </div>
            {renderEvents().length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold">Featured In:</h3>
                <ul className="flex flex-col gap-4 p-4">{renderEvents()}</ul>
              </div>
            )}
          </div>
        </div>
      </motion.section>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
      >
        <span className="sr-only">Close modal</span>
        <i className="fas fa-times text-4xl"></i>
      </button>
    </>
  );
};

export default IndividualArtistModal;
