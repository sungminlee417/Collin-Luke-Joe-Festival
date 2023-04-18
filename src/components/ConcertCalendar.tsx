import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [
  {
    title: "Vocalists & Soloists",
    start: new Date("July 6, 2023 20:00:00"),
    end: new Date("July 6, 2023 21:30:00"),
    url: "https://www.eventbrite.com/e/619799867087",
  },
  {
    title: "Original Compositions",
    start: new Date("July 7, 2023 13:00:00"),
    end: new Date("July 7, 2023 14:30:00"),
    url: "https://www.eventbrite.com/e/619826988207",
  },
  {
    title: "Baroque Concert",
    start: new Date("July 7, 2023 20:00:00"),
    url: "https://www.eventbrite.com/e/619829405437",
  },
  {
    title: "Jazz and Show Tunes",
    start: new Date("July 8, 2023 13:00:00"),
    end: new Date("July 8, 2023 14:30:00"),
    url: "https://www.eventbrite.com/e/619830759487",
  },
  {
    title: "Folk and Fiddle",
    start: new Date("July 8, 2023 20:00:00"),
    url: "https://www.eventbrite.com/e/619832053357",
  },
  {
    title: "Potluck",
    start: new Date("July 9, 2023 16:00:00"),
    end: new Date("July 9, 2023 19:00:00"),
  },
  {
    title: "Duo Concert",
    start: new Date("July 9, 2023 19:00:00"),
  },
];

const ConcertCalendar = () => {
  const handleDateClick = () => {};

  return (
    <div className=" px-80 py-20">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(arg) => console.log(arg.event.title)}
        // eventContent={renderEventContent}
      />
    </div>
  );
};

export default ConcertCalendar;
