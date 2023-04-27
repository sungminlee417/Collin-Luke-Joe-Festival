export interface Artist {
  id: number;
  name: string;
  biography: JSX.Element | string;
  images: string[];
}

export interface ArtistImageProps {
  image: string;
  artist: Artist;
}

export interface ArtistImageModalProps extends ArtistImageProps {
  onClose: () => void;
}

export interface ArtistInterface {
  [key: number]: Artist;
}

export interface IndividualArtistProps {
  artist: Artist;
  onClose?: () => void;
}

export interface StaffMemberProps {
  member: {
    name: string;
    role: string;
    image?: string;
    bio?: string;
  };
}
