import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const NFT = () => {
  const mintNFT = () => {
    window.location.href = "/Mint";
  };
  return (
    <Container className="mt-3">
      <Button className="shadow-lg hover" onClick={mintNFT}>Mint NFT</Button>
      <Row className="mt-3">
        <Col sm={4}>
          <Card className="shadow-lg" style={{ width: "18rem" }}>
            <Card.Img src="images/fullastro.png"/>
            <Card.Body>
              <Card.Title>Astronaut #54</Card.Title>
              <Card.Text>
                Frontal illustration of an astronaut 
              </Card.Text>
              <Button variant="btn btn-outline-primary">Buy NFT</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="shadow-lg" style={{ width: "18rem" }}>
            <Card.Img src="images/halfastro.png"/>
            <Card.Body>
              <Card.Title>Astronaut #76</Card.Title>
              <Card.Text>
                Side illustration of an astronaut 
              </Card.Text>
              <Button variant="btn btn-outline-primary">Buy NFT</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="shadow-lg" style={{ width: "18rem" }}>
            <Card.Img src="images/dune.png"/>
            <Card.Body>
              <Card.Title>dune #14</Card.Title>
              <Card.Text>
                Illustration of cosmic sand dunes
              </Card.Text>
              <Button variant="btn btn-outline-primary">Buy NFT</Button>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default NFT;
