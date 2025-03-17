import React from "react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "System Maintenance Scheduled",
      date: "2025-03-20",
      description:
        "Our system will undergo maintenance on March 20th from 12:00 AM to 4:00 AM. Expect temporary service disruptions.",
      bgColor: "bg-lamaSkyLight",
    },
    {
      id: 2,
      title: "New Feature Release: Dark Mode",
      date: "2025-03-15",
      description:
        "We’ve added a dark mode option! You can enable it in your settings for a better low-light browsing experience.",
      bgColor: "bg-lamaPurpleLight",
    },
    {
      id: 3,
      title: "Holiday Closure Notice",
      date: "2025-04-01",
      description:
        "Our office will be closed on April 1st in observance of the national holiday. Support will resume the next business day.",
      bgColor: "bg-lamaYellowLight",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className={`odd:bg-red-100 even:bg-green-300 p-4 rounded-md ${announcement.bgColor}`}>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{announcement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {announcement.date}
              </span>
            </div>
            <p className="text-sm text-gray-900 mt-1">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
