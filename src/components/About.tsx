import React from "react";
import StaffMember from "./StaffMember";
import { staffData } from "../data/staffData";

const About = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Mission Statement</h2>
          <p className="text-base md:text-md mt-4">
            <strong>Off The Dock Chamber Festival</strong> aims to foster an
            invigorating concert-going experience by embracing the energy of
            up-and-coming artists. With the promise of providing a gateway to
            connect with an engaged classical music-loving community, OTD is an
            inspiring modern platform for emerging artists on the East Coast.
          </p>
        </div>
      </div>
      <section>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
          Staff/Founders
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
          {staffData.map((member) => (
            <div
              key={member.id}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6"
            >
              <StaffMember member={member} />
            </div>
          ))}
        </div>
      </section>
    </section>

    // </div>
  );
};

export default About;
