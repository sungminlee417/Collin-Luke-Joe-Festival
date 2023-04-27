import React, { useState } from "react";
import { Modal } from "../context/Modal";
import StaffMemberModal from "./StaffMemberModal";
import { AnimatePresence, motion } from "framer-motion";

interface StaffMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio: JSX.Element | string;
  };
}

const StaffMember: React.FC<StaffMemberProps> = ({ member }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMemberClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <motion.button
        className="flex flex-col items-center"
        onClick={handleMemberClick}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative w-96 h-96 rounded-full overflow-hidden mb-6">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={member.image}
            alt={member.name}
          />
        </div>
        <h3 className="text-2xl font-semibold">{member.name}</h3>
        <p className="text-xl text-gray-600">{member.role}</p>
      </motion.button>
      <AnimatePresence>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <StaffMemberModal
              member={member}
              onClose={() => setShowModal(false)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default StaffMember;
