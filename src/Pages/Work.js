import React from "react";
import { Container, Div, Col, Row } from "react-bootstrap";
import Commercial from "../Components/Commercial/Commercial";
import Legacy from "../Components/LegacyFilms/Legacy";

function Work() {
  return (
    <Container>
      <Row>
        <Col>
          <Commercial></Commercial>
          <Legacy />
        </Col>
      </Row>
    </Container>
  );
}

export default Work;
