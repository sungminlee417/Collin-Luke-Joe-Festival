import StaffMember from "./StaffMember";
import { staffData } from "../data/staffData";

const About = () => {
  return (
    <div className="about-page container mx-auto mt-48 px-10 mb-24">
      <h1 className="text-6xl font-bold mb-20">About Us</h1>

      <div className="mb-20">
        <h2 className="text-4xl font-bold mb-8">Mission Statement</h2>
        <p className="text-2xl">
          <strong>Off The Dock Chamber Festival</strong> aims to foster an
          invigorating concert-going experience by embracing the energy of
          up-and-coming artists. With the promise of providing a gateway to
          connect with a engaged classical music loving community, OTD is an
          inspiring modern platform for emerging artists on the East Coast.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-20">Staff/Founders</h2>

        <div className="flex flex-wrap justify-center gap-16">
          {staffData.map((member) => (
            <div key={member.id}>
              <StaffMember member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
