import natalieImage from "../images/natalie-peng.jpg";
import matthewImage from "../images/matthew_payne.jpg";
import katherineImage from "../images/katherine-krebs.jpeg";
import bfc1 from "../images/bfc4.jpg";
import bfc2 from "../images/bfc2.jpg";
import bfc3 from "../images/bfc3.jpg";
import bfc4 from "../images/bfc1.jpg";
import bfc5 from "../images/bfc5.jpg";
import bfc6 from "../images/bfc6.jpg";
import muse1 from "../images/muse1.jpg";
import muse2 from "../images/muse2.jpg";
import muse3 from "../images/muse3.jpg";
import muse4 from "../images/muse4.jpg";
import muse5 from "../images/muse5.jpg";
import muse6 from "../images/muse6.jpg";
import joeHagen from "../images/joehagen.jpeg";
import inNomineImage from "../images/innomine.jpeg";
import samSmith from "../images/sam-smith.jpg";
import { ArtistInterface } from "../models/interfaces";

export const artistsData: ArtistInterface = {
  1: {
    id: 1,
    name: "The Muse Duo",
    instruments: "Guitarist and Pianist",
    biography: (
      <>
        <div>
          Originally formed at the Eastman School of Music, the Muse Duo is a
          one-of-a-kind ensemble in the world of classical music. Comprised of
          the award-winning guitarist Collin Holloway and the dynamic
          pianist/composer Luke Benedict, the guitar and piano duo brings music
          that is eclectic and accessible to modern audiences. Just months after
          playing together for the first time, the duo embarked on a tour
          throughout the United States. Since then, the Muse Duo has performed
          in various venues and festivals, including a tour of the United
          States, the “Lynn New Music Festival” and the “Shellpoint Young Artist
          Series”.
        </div>
        <div>
          The Muse Duo strives to champion new compositions for the unique
          ensemble. Their repertoire primarily consists of Luke’s original
          works, where he composes music tailored for the duo. In July of 2022,
          the Duo traveled to New York to record their debut album, entitled
          “Experiments”. The album consists of entirely original music, composed
          by Luke. These works are melodically focused and neo-classically
          inspired, while engaging audiences through it’s modernistic rhythmic
          drive. “Experiments” will be released April 8th, 2023.
        </div>
        Through unique instrumentation, a convincing blend of musical
        personalities, and music which is experimental and accessible, the Muse
        Duo brings an exciting new perspective to chamber music.
      </>
    ),
    images: [muse1, muse2, muse3, muse4, muse5, muse6],
  },
  2: {
    id: 2,
    name: "Berwick Fiddle Consort",
    instruments: "Fiddle Consort",
    biography: (
      <>
        <div>
          Comprised of conservatory-trained violinists with deep roots in both
          historical performance practice and traditional folk styles, the
          Berwick Fiddle Consort (BFC), founded by Lydia Becker, Julia Connor,
          and Sarah Douglass, performs historical folk music on period
          instruments. The ensemble strives to approach fiddle tunes from a
          multi-faceted perspective, combining baroque violin technique,
          aurally-learned regional fiddling traditions, and study of historical
          manuscripts. Drawing on these sources, BFC creates period-instrument
          arrangements of traditional folk music that experiment with various
          aspects of historical performance, always bringing their own
          creativity to bear.
        </div>
        <div>
          BFC concerts offer an exciting counterpoint to the traditional canon
          of historical repertoire and the classical music experience. Audience
          members are encouraged to tap their feet to the music, cheer after
          tune changes, or get up and dance. This relaxed, welcoming performance
          atmosphere allows listeners to to personally connect with the music
          and band members.
        </div>
        <div>
          BFC was formed in the summer of 2018 at the Oregon Bach Festival when
          Lydia, Julia, and Sarah began a nightly tradition of meeting after
          rehearsals to play fiddle tunes on baroque violins well into the
          night. At these nocturnal jam sessions, they quickly found that
          performing 17th and 18th century music from the British Isles and
          Canada on the kinds of instruments that were used at that time opened
          up new dimensions of sound, rhythm, and musical expression. BFC
          presented their debut concert at the 2019 Boston Early Music Festival
          Fringe, and have since been featured as Pegasus Rising Artists and NYS
          Baroque Young Artists, as well as the Society for Historically
          Informed Performance (SoHIP) Summer Concert season in both 2020 and
          2021. Other performances include appearances at the Beacon Hill
          Friends House in Boston, the Sudbury Historical Society, and the
          Shutesbury Athletic Club. BFC has also been an ensemble-in-residence
          at Avaloch Farm in Boscawen, NH.
        </div>
      </>
    ),
    images: [bfc1, bfc2, bfc3, bfc4, bfc5, bfc6],
  },
  3: {
    id: 3,
    name: "Natalie Pang",
    instruments: "Pianist",
    biography: (
      <>
        <div>
          Natalie Pang is a recent graduate from the Eastman School of Music,
          where she completed her MM in Piano Performance and MA in Music Theory
          Pedagogy. She received her Bachelor of Music in Piano Performance and
          Music Theory from Eastman, and is a member of the music society Pi
          Kappa Lambda.
        </div>
        <div>
          As a pianist, Natalie has been first prizewinner of competitions such
          as the Canadian Music Competition and Montreal Classical Music
          Festival, and has given solo recitals in venues across the United
          States and Canada. Natalie is an active collaborative pianist,
          performing with chamber ensembles at Eastman and accompanying for
          public events, including the University of Rochester Schwartz Memorial
          Service and Black History Month at Eastman Recital.
        </div>
        <div>
          As a music theorist, she has conducted research on topic theory and
          music semiology, Schenkerian analysis, and underrepresented composers
          in performance and pedagogy, and presented her paper, “Performing the
          Flight Topic in Scriabin’s Fourth Sonata” at the 150th Anniversary of
          Scriabin Conference. Natalie is also an avid songwriter, and recently
          was a winner of the songwriting contest “If All of Rochester Wrote the
          Same Song”, with her song featured on radio shows Open Tunings with
          Scott Regan and Connections with Evan Dawson, and in performance at
          the JCC Centerstage in Rochester, NY.
        </div>
        <div>
          In her spare time, Natalie loves running, learning the theremin, and
          baking in an experimental fashion using generously approximate
          measurements.
        </div>
      </>
    ),
    images: [natalieImage],
  },
  4: {
    id: 4,
    name: "Matthew Payne",
    instruments: "Baritone",
    biography: (
      <>
        <div>
          Featured, both as an educator and singer by The Today Show and Boston
          Globe, Matthew Payne recently received his Master’s degree from the
          University of Maryland as a part of their prestigious Maryland Opera
          Studio. He has also received Bachelors degrees in vocal performance
          and in biology from Oberlin Conservatory and College.
        </div>
        <div>
          During the 2022/23 season, Mr. Payne served as Toledo Opera’s baritone
          resident artist. While there he sang the role of the Pirate King in
          their outreach production of The Pirates of Penzance, Vicomte Cascada
          in The Merry Widow, starred in their 2023 Gala, and sang with the
          Toledo Symphony in the Celebrazione del Coro.
        </div>
        <div>
          During the 2021/22 season he portrayed Papageno in Die Zauberflöte
          (Maryland Opera Studio), premiered the role of Aaron in Nailah
          Nombeko’s new opera Sunder (Annapolis Opera and Maryland Opera
          Studio), and portrayed Joe Harland in John Musto’s Later the Same
          Evening (Maryland Opera Studio).
        </div>

        <div>
          Mr. Payne has previously been a young artist with Central City Opera
          (2021), baritone fellow at the Tanglewood Music Center (2019), an
          artist at the Chautauqua Opera Company and Conservatory (2018), and a
          young artist with Opera Neo (2016 and 2017). His previous roles
          include: Billy Bigelow (Carousel), Marullo (Rigoletto), Mr. Gobineau
          (The Medium), and Massetto (Don Giovanni).
        </div>
        <div>
          As a soloist, Mr. Payne has performed in concerts with the French
          Embassy, Mid-Atlantic Symphony Orchestra, the Washington Opera
          Society, Chautauqua Symphony Orchestra, the Oberlin Conservatory
          Orchestra, the Society for New Music, and the Oberlin Baroque
          Ensemble. Matthew is also the co-founder of re-sound, a classical
          experience producer looking to re-shape and re-sound the way classical
          musicians present and perform in the 21st century. Educationally,
          Matthew is the founding voice teacher at Virtu. Academy, a
          high-quality online lesson provider. In his free time, Payne is also a
          published photographer.
        </div>
      </>
    ),
    images: [matthewImage],
  },
  5: {
    id: 5,
    name: "Katherine Krebs",
    instruments: "Soprano",
    biography: (
      <>
        <div>
          Katherine Krebs recently received her master’s degree from
          Northwestern studying under Stephen Smith. She is an alumnus of
          Oberlin College and Conservatory where she received her bachelor's
          degree in vocal performance and psychology. At Northwestern, Krebs was
          a recipient of the Eckstein Scholarship and the Emily Boettcher and
          Yule Bogue Endowed Award. Past credits include Selena in If I Were You
          (Northwestern Opera Theater), Monica in The Medium (Northwestern Opera
          Theater), Mustardseed in A Midsummer Night’s Dream (Chautauqua
          Institution), Helena in A Midsummer Night’s Dream, Littler Daughter in
          Proving Up, Soprano Trio Member in Trouble in Tahiti (Oberlin Opera
          Theater), Johanna in Sweeney Todd, Eileen Sherwood in Wonderful Town
          (College Light Opera Company), Bellina in Le astuzie femminili
          (Oberlin in Italy), and Fredrika in A Little Night Music (Syracuse
          Opera).
        </div>
      </>
    ),
    images: [katherineImage],
  },
  6: {
    id: 6,
    name: "In Nomine",
    biography: (
      <>
        <div>
          Hailing from The Juilliard School, In Nomine Ensemble has recently
          joined the historical-performance scene along the East Coast. Because
          of their unique instrumentation of Baroque violin, Baroque flute,
          Baroque bassoon, and harpsichord, they offer a distinct interpretation
          to the pieces they perform, mostly written during the
          seventeenth-eighteenth centuries, and usually not for their
          instrumental combination. This perspective allows the ensemble to
          experiment with various improvisation, transpositions, and textures
          that would not be possible with a standard Baroque instrumentation of
          violins, cello, and harpsichord. Hanbyeol Lee, Morgan Davison, Mei
          Stone, and Jimmy Drancsak make up the ensemble, Drancsak being a
          Skaneateles native himself. Having first performed together in various
          groups in New York City, The Netherlands, and Germany, they decided to
          form In Nomine Ensemble and bring their passion of
          historically-informed performance to various audiences.
        </div>
      </>
    ),
    images: [inNomineImage],
  },
  7: {
    id: 7,
    name: "Joe Hagen",
    instruments: "Violist/Composer",
    biography: (
      <>
        <div>
          Joe Hagen is the executive director and a founding member of the Off
          The Dock Chamber Festival. As a multi-instrumentalist, music producer,
          composer, and music entrepreneur, Joe is currently based in Los
          Angeles, CA, running his music production studio Joe Hagen Music, LLC
          for a number of clients in the classical, pop, and film music genres.
          He has been creating and producing music for over 15 years and has a
          deep passion for organizing music events that feature his talented
          colleagues.
        </div>
        <div>
          Being raised in Skaneateles, NY, he was a frequent concertgoer and
          volunteer for the world-renowned Skaneateles Festival which sparked
          his love and passion for classical music. He went on to get his
          bachelor's degree from the Eastman School of Music in Rochester, NY,
          studying viola performance with Grammy Award-winning violist Philip
          Ying (a former Skaneateles Festival Artistic Director), and audio
          engineering with Grammy award-winning audio engineer Stephen Roessner.
          He continued to complete his master's degree at Eastman's Beal
          Institute studying Producing/Composing for Film and Media with
          internationally recognized jazz composer Dave Rivello, Emmy
          award-winning film composer Mark Watters, and 6-time Emmy
          Award-winning film composer Jeff Beal.
        </div>
        <div>
          Since moving to Los Angeles, Joe's recordings, productions, and
          compositions have been heard over 100 million times. After being used
          in a Mr. Beast video, Joe's recording and mastering of several
          classical music favorites for world-famous YouTube personalities and
          streamers Ludwig and Jschlatt's Music Emporium have accumulated over
          70 million total plays. These recordings continue to be a source of
          professional quality copyright-free recordings available for YouTubers
          and streamers to use in their content for free. His orchestral
          mini-musicals written for the viral Tik Tok channel "Pixel Playhouse"
          have been played over 30 million times online and continue to be
          played nearly 1 million times per month.
        </div>
        <div>
          In collaboration with "Garret's Space," a suicide prevention and
          mental health center based near Detroit, Michigan, Joe's 24hr live
          stream music concert series "HS Sessions," was able to raise over
          $140,000 for the foundation. With this funding, the center was able to
          purchase a massive new property and wellness center working to reduce
          suicides and improve mental health in young adults.
        </div>
        <div>
          Joe has composed for, recorded as a viola soloist, mixed, and mastered
          a feature documentary called A Castle for Kyiv, directed by Madison
          Kinsella. A Castle for Kyiv follows the story of refugees who were
          fortunate to escape Ukraine at the advent of the Russian invasion in
          early 2022 and find refuge in a beautiful Castle in Tuscany, Italy.
          The documentary will premiere this summer.
        </div>
        <div>
          Joe's life is centered around bringing people together around the
          creation, love, and culture of beautiful music. Whether he is
          composing, producing, or performing, Joe's work embodies the power of
          music, promoting talented artists while serving the many diverse
          communities in which he is involved. Looking to the future, he plans
          to continue expanding Off The Dock's reach, promoting even more
          emerging artists, spreading the love of classical music, and touching
          the hearts of all who come to listen.
        </div>
      </>
    ),
    images: [joeHagen],
  },
  8: {
    id: 8,
    name: "Sam Smith",
    biography: (
      <div>
        Samuel Smith is a composer, arranger, and a very sought after bassist
        based in Boston, MA. He has gained such an insight on the bass that the
        AuburnPub said that "watching Smith play, the line between bassist and
        bass blurs." The young bassist looks to always improve himself as an
        individual musician, as well as with the music that is brought to him by
        other artists. Smith constantly plays local in the Greater Boston area,
        and has brought his expertise around the world from the USA to China,
        playing as a sideman and bandleader for many musical projects. The
        bassist has played at esteemed venues such as Dizzy's Club, Wally's Cafe
        Jazz Club, and Smalls Jazz Club and has played and/or recorded with the
        likes of Cassandra Wilson, Ron Blake, Stefon Harris, Joe Magnarelli,
        Jesus Molina, Aaron Parks, Jazzmeia Horn, and Terri Lyne Carrington.
      </div>
    ),
    images: [samSmith],
  },
};
