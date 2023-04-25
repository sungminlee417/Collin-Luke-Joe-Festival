export interface Artist {
  id: number;
  name: string;
  biography: JSX.Element | string;
  images: string[];
}

export interface Image {
  image: string;
  artist: Artist;
  onClose?: () => void;
}

export interface ArtistInterface {
  [key: number]: Artist;
}

export interface IndividualArtistProps {
  artist: Artist;
  onClose?: () => void;
}
