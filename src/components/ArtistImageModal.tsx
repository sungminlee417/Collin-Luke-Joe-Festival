import { motion } from "framer-motion";
import React, { useCallback } from "react";
import { ArtistImageModalProps } from "../models/artists";

const ArtistImageModal = React.memo(
  ({ image, artist, onClose }: ArtistImageModalProps) => {
    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    return (
      <div>
        <motion.img
          className="h-screen object-contain"
          src={image}
          alt={artist.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <button onClick={handleClose} className="absolute top-10 right-10">
          <i className="fa-solid fa-xmark text-white text-5xl" />
        </button>
      </div>
    );
  }
);

export default ArtistImageModal;
