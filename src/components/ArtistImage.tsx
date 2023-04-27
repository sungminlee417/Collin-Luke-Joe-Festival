import { useState, useCallback } from "react";
import ArtistImageModal from "./ArtistImageModal";
import { Modal } from "../context/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { ArtistImageProps } from "../models/interfaces";

const ArtistImage = ({ image, artist }: ArtistImageProps) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <motion.div
      className="relative w-full h-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        className="w-full h-full overflow-hidden"
        onClick={openModal}
        aria-label={`View ${artist.name}'s information`}
      >
        <img
          src={image}
          className="w-full h-full object-cover transform transition duration-300"
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
    </motion.div>
  );
};

export default ArtistImage;
