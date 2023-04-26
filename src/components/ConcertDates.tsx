import { events } from "../data/eventData";

const ConcertDates = () => {
  const renderEvents = () =>
    events.map((event) => (
      <li
        key={event.title}
        className="rounded-md shadow-md p-10 hover:shadow-lg transition flex md:flex-row flex-col gap-14 justify-between border-gray-100 border"
      >
        <div className="flex flex-col md:flex-row gap-14">
          <div>
            <div className="text-4xl font-bold">{event.date.day}</div>
            <div className="text-4xl font-bold">{event.date.month}</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-5xl font-bold">{event.title}</div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-clock"></i>
                <div className="font-bold text-lg">{event.time}</div>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot"></i>
                <div className="font-bold text-lg">{event.location}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-2xl font-bold bg-[#A0937D] hover:bg-[#988a72] rounded-md text-white hover:shadow-md transition"
          >
            Tickets
          </a>
        </div>
      </li>
    ));

  return (
    <section className="concert-calendar-section h-auto p-14 gap-14 flex flex-col mx-2 md:mx-4 lg:mx-6 md:my-24 my-20">
      <h3 className="text-2xl font-bold">CONCERT SCHEDULE</h3>
      <ul className="flex flex-col gap-14">{renderEvents()}</ul>
    </section>
  );
};

export default ConcertDates;
