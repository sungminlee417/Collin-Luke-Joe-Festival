import { events } from "../data/eventData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ConcertDates = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const renderEvents = () =>
    events.map((event) => {
      if (inView) {
      }

      return (
        <motion.li
          key={event.title}
          className="p-6 md:p-10 rounded-md shadow-md transition border border-gray-200 flex flex-col lg:flex-row justify-between md:gap-14 lg:items-center items-start mx-4"
          ref={ref}
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
              <div className="text-2xl md:text-5xl font-bold">
                {event.title}
              </div>
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
    });

  return (
    <section className="concert-calendar-section  py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Upcoming Concert Dates</h2>
          <p className="text-lg text-gray-700">
            Check out our upcoming concerts and events. Click on "Tickets" to
            purchase tickets.
          </p>
        </div>
        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderEvents()}
        </ul>
      </div>
    </section>
  );
};

export default ConcertDates;

// import { events } from "../data/eventData";

// const ConcertDates = () => {
//   const renderEvents = () =>
//     events.map((event) => (
//       <li
//         key={event.title}
//         className="p-6 md:p-10 rounded-md shadow-md hover:shadow-lg transition border border-gray-200 flex flex-col md:flex-row justify-between gap- md:gap-14 items-start"
//       >
//         <div className="flex flex-col md:flex-row gap-6 md:gap-14">
//           <div className="flex-shrink-0">
//             <div className="text-4xl font-bold">{event.date.day}</div>
//             <div className="text-4xl font-bold">{event.date.month}</div>
//           </div>
//           <div className="flex flex-col gap-2">
//             <div className="text-2xl md:text-5xl font-bold">{event.title}</div>
//             <div className="flex items-center gap-4 md:gap-6 text-lg md:text-xl">
//               <div className="flex items-center gap-2">
//                 <i className="fas fa-clock"></i>
//                 <div className="font-bold">{event.time}</div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <div className="font-bold">{event.location}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between md:justify-center items-center mt-4 md:mt-0 md:ml-auto">
//           <a
//             href={event.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex justify-center items-center w-full md:w-auto px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl font-bold bg-[#A0937D] hover:bg-[#988a72] rounded-md text-white hover:shadow-md transition"
//           >
//             Tickets
//           </a>
//         </div>
//       </li>
//     ));

//   return (
//     <section className="concert-calendar-section px-4 md:px-6 lg:px-8 py-10 md:py-16 lg:py-20 gap-10 md:gap-14 flex flex-col">
//       <h3 className="text-4xl md:text-6xl font-bold text-center mb-6 md:mb-10">
//         Concert Schedule
//       </h3>
//       <ul className="flex flex-col gap-10 md:gap-14">{renderEvents()}</ul>
//     </section>
//   );
// };

// export default ConcertDates;
