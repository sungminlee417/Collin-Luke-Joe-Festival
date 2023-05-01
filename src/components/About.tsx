import joeImage from "../images/joehagen.jpeg";
import lukeImage from "../images/luke.jpg";
import collinImage from "../images/collin.jpg";
import natalieImage from "../images/natalie-peng.jpg";
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
      name: "Joe Hagen",
      role: "Director",
      image: joeImage,
      bio: (
        <>
          <div>
            Joe Hagen is the executive director and a founding member of the Off
            The Dock Chamber Festival. As a multi-instrumentalist, music
            producer, composer, and music entrepreneur, Joe is currently based
            in Los Angeles, CA, running his music production studio Joe Hagen
            Music, LLC for a number of clients in the classical, pop, and film
            music genres. He has been creating and producing music for over 15
            years and has a deep passion for organizing music events that
            feature his talented colleagues.
          </div>
          <div>
            Being raised in Skaneateles, NY, he was a frequent concertgoer and
            volunteer for the world-renowned Skaneateles Festival which sparked
            his love and passion for classical music. He went on to get his
            bachelor's degree from the Eastman School of Music in Rochester, NY,
            studying viola performance with Grammy Award-winning violist Philip
            Ying (a former Skaneateles Festival Artistic Director), and audio
            engineering with Grammy award-winning audio engineer Stephen
            Roessner. He continued to complete his master's degree at Eastman's
            Beal Institute studying Producing/Composing for Film and Media with
            internationally recognized jazz composer Dave Rivello, Emmy
            award-winning film composer Mark Watters, and 6-time Emmy
            Award-winning film composer Jeff Beal.
          </div>
          <div>
            Since moving to Los Angeles, Joe's recordings, productions, and
            compositions have been heard over 100 million times. After being
            used in a Mr. Beast video, Joe's recording and mastering of several
            classical music favorites for world-famous YouTube personalities and
            streamers Ludwig and Jschlatt's Music Emporium have accumulated over
            70 million total plays. These recordings continue to be a source of
            professional quality copyright-free recordings available for
            YouTubers and streamers to use in their content for free. His
            orchestral mini-musicals written for the viral Tik Tok channel
            "Pixel Playhouse" have been played over 30 million times online and
            continue to be played nearly 1 million times per month.
          </div>
          <div>
            In collaboration with "Garret's Space," a suicide prevention and
            mental health center based near Detroit, Michigan, Joe's 24hr live
            stream music concert series "HS Sessions," was able to raise over
            $140,000 for the foundation. With this funding, the center was able
            to purchase a massive new property and wellness center working to
            reduce suicides and improve mental health in young adults.
          </div>
          <div>
            Joe has composed for, recorded as a viola soloist, mixed, and
            mastered a feature documentary called A Castle for Kyiv, directed by
            Madison Kinsella. A Castle for Kyiv follows the story of refugees
            who were fortunate to escape Ukraine at the advent of the Russian
            invasion in early 2022 and find refuge in a beautiful Castle in
            Tuscany, Italy. The documentary will premiere this summer.
          </div>
          <div>
            Joe's life is centered around bringing people together around the
            creation, love, and culture of beautiful music. Whether he is
            composing, producing, or performing, Joe's work embodies the power
            of music, promoting talented artists while serving the many diverse
            communities in which he is involved. Looking to the future, he plans
            to continue expanding Off The Dock's reach, promoting even more
            emerging artists, spreading the love of classical music, and
            touching the hearts of all who come to listen.
          </div>
        </>
      ),
    },
    {
      id: 2,
      name: "Natalie Pang",
      role: "Co-Artistic Director",
      image: natalieImage,
      bio: (
        <>
          <div>
            Natalie Pang is a recent graduate from the Eastman School of Music,
            where she completed her MM in Piano Performance and MA in Music
            Theory Pedagogy. She received her Bachelor of Music in Piano
            Performance and Music Theory from Eastman, and is a member of the
            music society Pi Kappa Lambda.
          </div>
          <div>
            As a pianist, Natalie has been first prizewinner of competitions
            such as the Canadian Music Competition and Montreal Classical Music
            Festival, and has given solo recitals in venues across the United
            States and Canada. Natalie is an active collaborative pianist,
            performing with chamber ensembles at Eastman and accompanying for
            public events, including the University of Rochester Schwartz
            Memorial Service and Black History Month at Eastman Recital.
          </div>
          <div>
            As a music theorist, she has conducted research on topic theory and
            music semiology, Schenkerian analysis, and underrepresented
            composers in performance and pedagogy, and presented her paper,
            “Performing the Flight Topic in Scriabin’s Fourth Sonata” at the
            150th Anniversary of Scriabin Conference. Natalie is also an avid
            songwriter, and recently was a winner of the songwriting contest “If
            All of Rochester Wrote the Same Song”, with her song featured on
            radio shows Open Tunings with Scott Regan and Connections with Evan
            Dawson, and in performance at the JCC Centerstage in Rochester, NY.
          </div>
          <div>
            In her spare time, Natalie loves running, learning the theremin, and
            baking in an experimental fashion using generously approximate
            measurements.
          </div>
        </>
      ),
    },
    {
      id: 3,
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
      id: 4,
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
