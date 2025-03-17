import CountChart from "@/app/components/CountChart";
import UserCard from "@/app/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/**LEFT */}

      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/**USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/***MIDLLE CHARTS */}
        <div className="flex gap-4 flex-collg:flex-row ">
          {/***COUNT CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/***ATTENDANCE CHART CHARTS */}
          <div className="w-full lg:w-2/3 h-[450px]">Attendance</div>
        </div>
        {/***BOTTOM CHARTS */}
      </div>

      {/**RIGHT */}
      <div className="w-full lg:w-1/3">2</div>
    </div>
  );
};

export default AdminPage;
