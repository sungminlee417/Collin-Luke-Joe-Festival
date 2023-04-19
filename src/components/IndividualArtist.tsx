import { useParams } from "react-router";
import { lineup } from "../artistData";

const IndividualArtist = () => {
  const { artistId } = useParams();
  const artist = lineup[Number(artistId)];

  return (
    <section className="flex md:flex-row flex-col gap-14 py-52 px-10">
      <ul
        className={`grid ${
          artist.images.length < 2 ? "" : "grid-cols-2 h-208 overflow-hidden"
        } md:w-128 gap-4`}
      >
        {artist.images.map((image) => {
          return (
            <li
              className="h-full hover:opacity-80 transition overflow-hidden"
              key={image}
            >
              <img
                src={image}
                className="h-full w-full hover:scale-105 object-cover transition"
                alt={artist.name}
              />
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col gap-6 lg:w-336 md:w-224">
        <h2 className="text-4xl font-bold">{artist.name}</h2>
        <div className="flex flex-col gap-4 text-2xl">{artist.biography}</div>
      </div>
    </section>
  );
};

export default IndividualArtist;
