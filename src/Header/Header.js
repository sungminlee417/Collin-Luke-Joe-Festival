import Button from "react-bootstrap/Button";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-content">
        <header>Long Lake Music Festival</header>
        <div className="header-links-container">
          <Button variant="outline-primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
          <Button variant="success">Success</Button>{" "}
          <Button variant="warning">Warning</Button>{" "}
          <Button variant="danger">Danger</Button>{" "}
          <Button variant="info">Info</Button>{" "}
          <Button variant="light">Light</Button>{" "}
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
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
