import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [
  {
    title: "Vocalists & Soloists",
    start: new Date("July 6, 2023 20:00:00"),
    end: new Date("July 6, 2023 21:30:00"),
  },
];

const ConcertCalendar = () => {
  return (
    <div className="px-96 py-20">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
};

interface EventInfo {
  event: {
    title: string;
  };
  timeText: string;
}

function renderEventContent(eventInfo: EventInfo) {
  return (
    <div className="flex flex-col">
      <p>{eventInfo.event.title}</p>
      <p>{eventInfo.timeText}</p>
    </div>
  );
}

export default ConcertCalendar;
