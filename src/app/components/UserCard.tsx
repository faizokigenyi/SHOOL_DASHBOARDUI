import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div
      className="
      min-w-[130px] p-4 flex-1 rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow"
    >
      <div
        className="flex 
      justify-between items-center"
      >
        <span className="text-[10px] bg-white px-2 py-1 bg-red text-green-600 rounded-full">
          2025/03
        </span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1235</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
