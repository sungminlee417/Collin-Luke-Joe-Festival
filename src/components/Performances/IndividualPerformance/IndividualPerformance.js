import Card from "react-bootstrap/Card";

import image1 from "../../../images/image1.jpg";
import image2 from "../../../images/image2.webp";

import "./IndividualPerformance.css";

const IndividualPerformance = () => {
  return (
    <>
      <Card className="individual-performance-container">
        <Card.Img variant="top" bs-prefix="card-img" src={image1} />
        <Card.Body>
          <Card.Text className="individual-performance-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default IndividualPerformance;
