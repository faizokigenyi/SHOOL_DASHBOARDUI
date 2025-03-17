"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// temporary
// TEMPORARY
const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    time: "10:00 AM - 4:00 PM",
    description:
      "An annual conference discussing the latest trends in technology, including AI, cloud computing, and cybersecurity.",
  },
  {
    id: 2,
    title: "Startup Pitch Night",
    time: "6:00 PM - 9:00 PM",
    description:
      "A networking event where entrepreneurs pitch their startups to investors and industry experts.",
  },
  {
    id: 3,
    title: "Web Development Workshop",
    time: "2:00 PM - 5:00 PM",
    description:
      "A hands-on workshop covering the latest web development frameworks, including React and Next.js.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-">
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
