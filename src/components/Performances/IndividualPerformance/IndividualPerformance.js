import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import "./IndividualPerformance.css";

const IndividualPerformance = ({ image }) => {
  return (
    <Col>
      <Card className="individual-performance-container">
        <Card.Img variant="top" bs-prefix="card-img" src={image} />
        <Card.Body>
          <Card.Text className="individual-performance-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default IndividualPerformance;
