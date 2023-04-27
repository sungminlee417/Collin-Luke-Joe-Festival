import { useState } from "react";
import IndividualArtistModal from "./IndividualArtistModal";
import { IndividualArtistProps } from "../models/interfaces";
import { Modal } from "../context/Modal";
import { AnimatePresence } from "framer-motion";

const IndividualArtist = ({ artist }: IndividualArtistProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="h-full w-full bg-black rounded-md relative"
        onClick={() => setShowModal(true)}
      >
        <img
          src={artist.images[0]}
          className="h-full w-full object-cover rounded-md hover:opacity-60 transition peer"
          alt={artist.name}
        />
        <div className="absolute lg:text-5xl text-3xl top-1/2 left-1/2 -translate-x-1/2 w-96 text-center text-white peer-hover:-translate-y-1/2 peer-hover:opacity-100 translate-y-20 transition opacity-0 duration-300 pointer-events-none">
          {artist.name}
        </div>
      </button>
      <AnimatePresence>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <IndividualArtistModal
              artist={artist}
              onClose={() => setShowModal(false)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default IndividualArtist;
