import { Container, Row, Col } from "reactstrap";
import "./SectionBiographies.css";

const SectionBiographies = () => {
  return (
    <Container className="container">
      <div className="title">
        <h3>Biographies</h3>
        <div className="biographies-container">
          <div className="single-biography">
            <img
              alt="..."
              className="img-circle img-no-padding img-responsive single-biography-image"
              src={require("assets/img/faces/kaci-baum-2.jpg")}
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              accusamus quis fugit eaque assumenda explicabo adipisci ipsam
              harum facere omnis, aliquid, ratione ipsum! Magni maiores expedita
              tenetur officiis et amet.
            </div>
          </div>
          <div className="single-biography middle-biography">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              accusamus quis fugit eaque assumenda explicabo adipisci ipsam
              harum facere omnis, aliquid, ratione ipsum! Magni maiores expedita
              tenetur officiis et amet.
            </div>
            <img
              alt="..."
              className="img-circle img-no-padding img-responsive single-biography-image"
              src={require("assets/img/faces/kaci-baum-2.jpg")}
            />
          </div>
          <div className="single-biography">
            <img
              alt="..."
              className="img-circle img-no-padding img-responsive single-biography-image"
              src={require("assets/img/faces/kaci-baum-2.jpg")}
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              accusamus quis fugit eaque assumenda explicabo adipisci ipsam
              harum facere omnis, aliquid, ratione ipsum! Magni maiores expedita
              tenetur officiis et amet.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionBiographies;
