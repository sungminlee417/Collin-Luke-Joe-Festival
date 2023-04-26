import lukeImage from "../images/luke.jpg";
import collinImage from "../images/collin.jpg";
import natalieImage from "../images/natalie-peng.jpg";

const About = () => {
  const staff = [
    {
      name: "Joe Hagen",
      role: "Executive Director",
    },
    {
      name: "Natalie Pang",
      role: "Co-Artistic Director",
      image: natalieImage,
      bio: "Natalie is a passionate advocate for the arts and has been involved in various community arts programs for over a decade. She holds a degree in Fine Arts and has exhibited her work in galleries across the country.",
    },
    {
      name: "Collin Holloway",
      role: "Co-Artistic Director",
      image: collinImage,
      bio: "Collin is a talented visual artist and musician. He has worked in the arts industry for several years and is dedicated to promoting emerging artists and diverse art forms.",
    },
    {
      name: "Luke Benedict",
      role: "Co-Artistic Director",
      image: lukeImage,
      bio: "Luke is a writer and filmmaker who is passionate about storytelling. He has written and directed several award-winning films and is committed to promoting the arts as a means of bringing people together.",
    },
  ];

  return (
    <div className="container mx-auto mt-60">
      <h1 className="text-4xl font-bold mb-8">About</h1>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
        <p className="text-lg">
          At our organization, we are dedicated to promoting the arts and
          providing a platform for artists to showcase their work. We believe
          that the arts play a vital role in our society and have the power to
          inspire, challenge, and bring people together.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Staff/Founders</h2>

        <div className="flex flex-wrap justify-center">
          {staff.map((member) => (
            <div
              key={member.name}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8"
            >
              <div className="bg-gray-100 rounded-lg p-4 h-full flex flex-col justify-between">
                <div>
                  <img
                    src={
                      member.image
                        ? member.image
                        : `https://via.placeholder.com/500x500?text=${member.name}`
                    }
                    alt={member.name}
                    className="w-full rounded-lg mb-2 h-52 object-cover"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-base">{member.role}</p>
                </div>
                {member.bio && (
                  <div>
                    <h4 className="text-base font-bold mt-4 mb-2">Bio:</h4>
                    <p className="text-sm">{member.bio}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
