import lukeImage from "../images/luke.jpg";
import collinImage from "../images/collin.jpg";
import natalieImage from "../images/natalie-peng.jpg";
import { useState } from "react";
import StaffMember from "./StaffMember";

interface Staff {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: JSX.Element | string;
}

const About = () => {
  const staff: Staff[] = [
    {
      id: 1,
      name: "Natalie Pang",
      role: "Co-Artistic Director",
      image: natalieImage,
      bio: "Natalie is a passionate advocate for the arts and has been involved in various community arts programs for over a decade. She holds a degree in Fine Arts and has exhibited her work in galleries across the country.",
    },
    {
      id: 2,
      name: "Collin Holloway",
      role: "Co-Artistic Director",
      image: collinImage,
      bio: (
        <>
          <div>
            Classical guitarist Collin Holloway began playing at the age of nine
            in his hometown of Oklahoma City. Recognized as a burgeoning talent
            from an early age (his first solo recital was met with two standing
            ovations) he pursued his higher education at the Eastman School of
            Music with Thomas Viloteau and Nicholas Goluses. Upon graduation
            with his undergraduate degree, he obtained his master’s degree with
            Dieter Hennings at the University of Kentucky College of Fine Arts
            and was selected to study privately with the renowned musician
            Angelo Gilardino in Vercelli, Italy.
          </div>
          <div>
            Collin's performing experience is extensive. He has toured across
            much of America and Spain as a soloist and as a part of various
            ensembles in festivals such as “Austin City Limits”, “CHAMBERart
            Madrid”, the “Celedonio Romero Guitar institute”. Highlights of his
            career include winning the Haire Guitar Competition, two consecutive
            first place finishes at the National Brownsville Guitar Duet
            Competition, and was recognized as a “Rising Young Artist” by the
            Opera Club of the Villages. Most recently, Collin was chosen as a
            soloist to premiere the work “Malagueña de Jotron” at the Armstrong
            Theater with the internationally renowned Los Romeros Guitar
            Quarter.
          </div>
          <div>
            As a musician, Collin strives to bring to life the intimate nature
            and inherent poetry of the guitar through a beautiful tone and a
            sensitive touch. This can be heard on throughout his debut album “A
            Musical Portrait”, where he performs rare works by Angelo Gilardino
            and Graciela Agudelo, amongst other more seminal compositions.
          </div>
          <div>
            An adamant performer of chamber music, Collin is one half of The
            Muse Duo. This guitar and piano duo was formed at the Eastman School
            of Music with the pianist and composer, Robert Benedict. Just months
            after playing together for the first time, The Muse Duo toured parts
            of the United States. Currently, the Muse Duo is championing new
            music for this rare setting of instruments through the composition
            of new works by Robert, as well as the premiere performances of
            these compositions. Their debut album “Experiments”, will be
            released in April 2023, accompanied by a tour of the United States.
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: "Luke Benedict",
      role: "Co-Artistic Director",
      image: lukeImage,
      bio: (
        <>
          <div>
            Luke Benedict is a pianist and composer born in 1996, who studied
            piano performance at Eastman School of Music and Boston Conservatory
            of Music, where he studied under Rebecca Penneys and Michael Lewin.
            He also earned degrees in music composition at Lynn University under
            the tutelage of Thomas McKinley. As a pianist, Luke has had a
            variety of experiences ranging from orchestral and chamber settings
            to soloistic performances. He is a commonly commissioned composer in
            the South Florida area, and has performed his own music across the
            United States both as a soloist, and as a part of a chamber group
            consisting of himself and a classical guitarist, ‘The Muse Duo’,
            touring locations such as New York, South Carolina, Florida, New
            Hampshire, Tennessee, and Oklahoma.
          </div>
          <div>
            Luke combines the musical languages of the past and present to evoke
            several different idioms while still maintaining accessibility and
            originality. These languages range from the Baroque and Classical
            periods, to the more modern sensibilities of Rock, Serialism, and
            Minimalism. Rhythmic drive is also a prominent force in his works
            and takes center stage alongside unique and coloristic
            instrumentation, pointed motivic direction, and memorable melodic
            content. Alongside maintaining accessibility for audiences, a
            primary motivation of his compositional process lies in the
            enjoyment of the performers who present his works. Not only does
            Luke facilitate a musical experience that will appeal to a variety
            of audiences, but he also ensures his music will be gratifying for
            the performer to execute.
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto mt-60 px-10 mb-24">
      <h1 className="text-6xl font-bold mb-20">About Us</h1>

      <div className="mb-20">
        <h2 className="text-4xl font-bold mb-8">Mission Statement</h2>
        <p className="text-2xl">
          At our organization, we are dedicated to promoting the arts and
          providing a platform for artists to showcase their work. We believe
          that the arts play a vital role in our society and have the power to
          inspire, challenge, and bring people together.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-20">Staff/Founders</h2>

        <div className="flex flex-wrap justify-center gap-16">
          {staff.map((member) => (
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
