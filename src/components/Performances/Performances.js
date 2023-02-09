import IndividualPerformance from "./IndividualPerformance/IndividualPerformance";

import Row from "react-bootstrap/Row";

import image1 from "../../images/image1.jpg";

import "./Performances.css";

const Performances = () => {
  return (
    <section className="performances-section">
      <Row xs={1} md={2} className="g-4 performances-list">
        <IndividualPerformance image={image1} />
        <IndividualPerformance image={image1} />
        <IndividualPerformance image={image1} />
        <IndividualPerformance image={image1} />
      </Row>
    </section>
  );
};

export default Performances;
