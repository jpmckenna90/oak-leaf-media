import React from "react";
import { Container, Div, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <video autoPlay muted loop id="mainVideo">
        <source
          src={require("../Assets/Videos/demo.mp4")}
          type="video/ogg"
        ></source>
      </video>
      <Container>
        <Row className="my-4">
          <Col className="text-center animate__animated animate__fadeIn">
            <h1>Attention is hard to capture.</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h3>Brands that capture attention will:</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
