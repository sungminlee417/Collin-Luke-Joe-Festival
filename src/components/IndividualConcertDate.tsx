import React from "react";
import { motion } from "framer-motion";

interface IndividualConcertDateProps {
  event: {
    title: string;
    date: {
      day: number;
      month: string;
    };
    time: string;
    location: string;
    url: string;
  };
}

const IndividualConcertDate = ({ event }: IndividualConcertDateProps) => {
  return (
    <motion.li
      key={event.title}
      className="bg-white p-6 md:p-10 rounded-md shadow-md transition border border-gray-200 flex flex-col lg:flex-row justify-between md:gap-14 lg:items-center items-start mx-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", scale: 1.02 }}
    >
      <div className="flex flex-col lg:flex-row gap-6 md:gap-14">
        <div className="flex-shrink-0">
          <div className="text-4xl font-bold">{event.date.day}</div>
          <div className="text-4xl font-bold">{event.date.month}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl md:text-5xl font-bold">{event.title}</div>
          <div className="flex items-center gap-4 md:gap-6 text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <i className="fas fa-clock"></i>
              <div className="font">{event.time}</div>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt"></i>
              <div className="font">{event.location}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:justify-center items-center mt-4 md:mt-0 lg:ml-auto">
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w px-6 py-2 rounded-md bg-[#579BB1] text-white hover:bg-[#4e8b9f] transition"
        >
          Tickets
        </a>
      </div>
    </motion.li>
  );
};

export default IndividualConcertDate;
