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
    <>
      <button className="h-full w-full" onClick={openModal}>
        <img
          src={image}
          className="h-full w-full hover:scale-105 object-cover transition"
          alt={artist.name}
        />
      </button>
      <AnimatePresence>
        {showModal && (
          <Modal>
            <ArtistImageModal
              image={image}
              artist={artist}
              onClose={closeModal}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ArtistImage;
