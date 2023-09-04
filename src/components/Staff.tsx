import React from "react";
import StaffMember from "./StaffMember";
import { staffData } from "../data/staffData";

const Staff = () => {
  return (
    <section className="bg-[#E1D7C6]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-gray-800">
            Meet the team
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20 mt-16">
          {staffData.map((member) => (
            <StaffMember member={member} key={member.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
