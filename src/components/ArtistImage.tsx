import { useState } from "react";
import { Image } from "../models/artists";
import ArtistImageModal from "./ArtistImageModal";
import { Modal } from "../context/Modal";
import { AnimatePresence } from "framer-motion";

const ArtistImage = ({ image, artist }: Image) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="h-full w-full" onClick={() => setShowModal(true)}>
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
              onClose={() => setShowModal(false)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ArtistImage;
