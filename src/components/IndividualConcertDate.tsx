import { Tooltip } from "@chakra-ui/react";

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
  const openMap = (address: string): void => {
    window.open(
      `https://maps.google.com/maps?q=${encodeURIComponent(address)}`
    );
  };

  return (
    <li
      key={event.title}
      className="bg-white p-6 md:p-10 rounded-md shadow-md transition border border-gray-200 flex flex-col lg:flex-row justify-between md:gap-14 lg:items-center items-start hover:shadow-lg md:mx-0 mx-4"
    >
      <div className="flex flex-col lg:flex-row gap-6 md:gap-14">
        <div className="flex-shrink-0">
          <div className="text-4xl font-bold">{event.date.day}</div>
          <div className="text-4xl font-bold">{event.date.month}</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-2xl md:text-5xl font-bold">{event.title}</div>
          <div className="flex items-center gap-4 md:gap-6 text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <i className="fas fa-clock"></i>
              <div className="font">{event.time}</div>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt"></i>
              <div
                className="underline decoration-dotted underline-offset-2 cursor-pointer"
                onClick={() => openMap(event.location)}
              >
                {event.location}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:justify-center items-center mt-4 md:mt-0 lg:ml-auto">
        <Tooltip
          label="Concert Ticket Prices: $25 and Season Pass: $75"
          placement="top"
          hasArrow
          rounded={"md"}
          fontSize={"lg"}
          padding={"4"}
        >
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w px-8 py-4 rounded-md bg-[#579BB1] text-white text-xl font-bold hover:bg-[#4e8b9f] transition"
          >
            Tickets
          </a>
        </Tooltip>
      </div>
    </li>
  );
};

export default IndividualConcertDate;
