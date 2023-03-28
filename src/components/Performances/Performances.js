import IndividualPerformance from "./IndividualPerformance/IndividualPerformance";
import image1 from "../../images/image1.jpg";

import "./Performances.css";

const Performances = () => {
  return (
    <section className="performances-section">
      <h3>Season Line Up</h3>
      <div className="performances-list">
        <IndividualPerformance image={image1} />
        <IndividualPerformance image={image1} />
        <IndividualPerformance image={image1} />
      </div>
    </section>
  );
};

export default Performances;
