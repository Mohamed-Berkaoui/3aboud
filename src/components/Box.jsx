import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Box({ element }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={element.image}  height={150}/>
      <Card.Body>
        <Card.Title>{element.title} </Card.Title>
        <Card.Text>{element.category}</Card.Text>
        <Button variant="primary">add to favorite</Button>
      </Card.Body>
    </Card>
  );
}

export default Box;
