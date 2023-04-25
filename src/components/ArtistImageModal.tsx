import { Image } from "../models/artists";
import { motion } from "framer-motion";

const ArtistImageModal = ({ image, artist, onClose }: Image) => {
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
      <button onClick={onClose} className="absolute top-10 right-10">
        <i className="fa-solid fa-xmark text-white text-5xl" />
      </button>
    </div>
  );
};

export default ArtistImageModal;
