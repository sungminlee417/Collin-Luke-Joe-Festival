import Button from "react-bootstrap/Button";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-content">
        <header className="header-title">Long Lake Music Festival</header>
        <div className="header-links-container">
          <Button className="header-button"variant="custom">Tickets</Button>{" "}
          <Button variant="secondary">Donate</Button>{" "}
          <Button variant="success">Sign up for emails</Button>{" "}
          <Button variant="warning">Contact</Button>
          {/* <button className="header-link">Tickets</button>
          <button className="header-link">Donate</button>
          <button className="header-link">Sign up for emails</button>
          <button className="header-link">Contact</button> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
