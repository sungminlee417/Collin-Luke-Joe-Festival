import { IndividualArtistProps } from "../models/artists";

const IndividualArtistModal = ({ artist }: IndividualArtistProps) => {
  return (
    <section className="flex md:flex-row flex-col bg-white p-10 gap-10 h-208 lg:w-336 md:w-272 m-10 rounded-md overflow-auto">
      <ul
        className={` basis-1/3 grid ${
          artist.images.length < 2 ? "" : "grid-cols-2"
        } gap-4`}
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
      <div className="basis-2/3 flex flex-col gap-6">
        <h2 className="text-4xl font-bold">{artist.name}</h2>
        <div className="flex flex-col gap-4 text-2xl overflow-auto">
          {artist.biography}
        </div>
      </div>
    </section>
  );
};

export default IndividualArtistModal;
