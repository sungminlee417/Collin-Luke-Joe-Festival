import React from "react";
import { motion } from "framer-motion";

interface StaffMemberModalProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio: JSX.Element | string;
  };
  onClose: () => void;
}

const StaffMemberModal: React.FC<StaffMemberModalProps> = ({
  member,
  onClose,
}) => {
  return (
    <motion.div
      className="mx-4 max-w-screen-lg mt-10 bg-white rounded-lg border border-gray-300 shadow-xl overflow-hidden p-2"
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      style={{ maxHeight: "90vh" }} // set a max-height for the modal
    >
      <div className="relative pb-1/2">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">{member.name}</h2>
          <p className="text-md text-gray-600">{member.role}</p>
        </div>
        {member.bio && (
          <div
            className="text-md text-gray-700 flex flex-col gap-6"
            style={{ maxHeight: "50vh", overflowY: "auto" }}
          >
            {member.bio}
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-[#579BB1] hover:bg-[#4e8b9f] text-white font-bold py-2 px-6 rounded text-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default StaffMemberModal;
