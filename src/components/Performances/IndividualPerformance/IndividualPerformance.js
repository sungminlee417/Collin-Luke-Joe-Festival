import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../../../images/pexels-photo-220453.webp";

// const IndividualPerformance = () => {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={image1} />
//       <Card.Body>
//         <Card.Title>Collin Holloway</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// import Card from 'react-bootstrap/Card';

const IndividualPerformance = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default IndividualPerformance;
