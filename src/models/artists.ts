export interface Artist {
  id: number;
  name: string;
  biography: JSX.Element | string;
  images: string[];
}

export interface ArtistInterface {
  [key: number]: Artist;
}

export interface IndividualArtistProps {
  artist: Artist;
}
