import IndividualPerformance from "./IndividualPerformance/IndividualPerformance";
import "./Performances.css";

const Performances = () => {
  return (
    <section id="performances-section">
      <div className="performances-container">
        <ul className="performances-list">
          <li>
            <IndividualPerformance />
          </li>
          <li>
            <IndividualPerformance />
          </li>
          <li>
            <IndividualPerformance />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Performances;
