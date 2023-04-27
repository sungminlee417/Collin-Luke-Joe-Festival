import { motion } from "framer-motion";
import React, { useCallback } from "react";
import { ArtistImageModalProps } from "../models/artists";

const ArtistImageModal = React.memo(
  ({ image, artist, onClose }: ArtistImageModalProps) => {
    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    return (
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
        >
          <span className="sr-only">Close modal</span>
          <i className="fas fa-times text-4xl"></i>
        </button>
        <motion.img
          className="max-w-full max-h-screen object-contain"
          src={image}
          alt={artist.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </div>
    );
  }
);

export default ArtistImageModal;
