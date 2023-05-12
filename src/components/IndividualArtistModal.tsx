import { IndividualArtistProps } from "../models/interfaces";
import ArtistImage from "./ArtistImage";
import { motion } from "framer-motion";

const IndividualArtistModal = ({ artist, onClose }: IndividualArtistProps) => {
  return (
    <>
      <motion.section
        className="flex md:flex-row flex-col bg-white p-10 gap-10 md:h-208 h-240 lg:w-336 md:w-272 md:m-0 m-10 rounded-md overflow-auto"
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
          <h2 className="flex flex-col gap-2 text-4xl">
            <span className="font-bold">{artist.name}</span>
            {artist.instruments && (
              <span className="text-2xl italic"> {artist.instruments}</span>
            )}
          </h2>
          <div className="flex flex-col gap-4 text-2xl overflow-auto">
            {artist.biography}
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
