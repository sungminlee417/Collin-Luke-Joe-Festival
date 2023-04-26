import { useState, useCallback } from "react";
import ArtistImageModal from "./ArtistImageModal";
import { Modal } from "../context/Modal";
import { AnimatePresence } from "framer-motion";
import { ArtistImageProps } from "../models/artists";

const ArtistImage = ({ image, artist }: ArtistImageProps) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <div className="relative w-full h-full">
      <button
        className="w-full h-full overflow-hidden"
        onClick={openModal}
        aria-label={`View ${artist.name}'s information`}
      >
        <img
          src={image}
          className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
          alt={artist.name}
        />
      </button>
      <AnimatePresence>
        {showModal && (
          <Modal onClose={closeModal}>
            <ArtistImageModal
              image={image}
              artist={artist}
              onClose={closeModal}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArtistImage;
