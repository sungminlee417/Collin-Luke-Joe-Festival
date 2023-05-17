import { eventsData } from "../data/eventsData";
import IndividualConcertDate from "./IndividualConcertDate";

const ConcertDates = () => {
  const renderEvents = () =>
    eventsData.map((event) => {
      return <IndividualConcertDate event={event} />;
    });

  return (
    <section className="concert-calendar-section bg-[#F8F4EA] py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Upcoming Concert Dates</h2>
          <p className="text-lg text-gray-700">
            Check out our upcoming concerts and events. Click on "Tickets" to
            purchase tickets.
          </p>
        </div>
        <ul className="mt-16 flex flex-col gap-8">{renderEvents()}</ul>
      </div>
    </section>
  );
};

export default ConcertDates;
