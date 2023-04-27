import { render, screen } from "@testing-library/react";
import ArtistImage from "./ArtistImage";

const mockImage = "https://example.com/image.jpg";
const mockArtist = {
  id: 1,
  name: "John Doe",
  biography: "John Doe is a famous artist...",
  images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
};

describe("ArtistImage component", () => {
  test("should render image and artist name", () => {
    render(<ArtistImage image={mockImage} artist={mockArtist} />);

    expect(screen.getByAltText(mockArtist.name)).toBeInTheDocument();
    expect(
      screen.getByLabelText(`View ${mockArtist.name}'s information`)
    ).toBeInTheDocument();
  });
});
