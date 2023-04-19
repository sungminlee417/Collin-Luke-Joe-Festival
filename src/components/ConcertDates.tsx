import { events } from "../eventData";

const ConcertDates = () => {
  return (
    <section className="concert-calendar-section h-auto lg:px-14 md:px-8 py-8 px-4">
      <ul className="flex flex-col gap-14">
        {events.map((event) => {
          return (
            <li className="rounded-md shadow-md p-10 hover:shadow-lg transition flex md:flex-row flex-col gap-14 justify-between border-gray-100 border">
              <div className="flex flex-col md:flex-row gap-14">
                <div>
                  <div className="text-4xl font-bold">{event.date.day}</div>
                  <div className="text-4xl font-bold">{event.date.month}</div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="text-5xl font-bold">{event.title}</div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-clock"></i>
                    <div className="font-bold text-lg">{event.time}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <a
                  className="px-8 py-4 text-2xl font-bold bg-orange-500 rounded-md text-white hover:shadow-md transition"
                  href={event.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tickets
                </a>
                {/* <button className="px-8 py-4 text-2xl font-bold bg-[#3c6e71] hover:bg-[#2c5153] transition text-white rounded-md">
                  More Info
                </button> */}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ConcertDates;
