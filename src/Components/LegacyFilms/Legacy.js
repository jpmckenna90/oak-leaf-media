import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Legacy() {
  return (
    <Container style={{ marginTop: "20%" }} id="legacy">
      <Row>
        <Col></Col>
        <Col>
          <h1 className="work-page-header" style={{ textAlign: "right" }}>
            Legacy Film
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </Col>
        <Col>
          <div style={{ padding: "56.25% 0 0 0" }}>
            <iframe
              src="https://player.vimeo.com/video/246511328?title=0&byline=0&portrait=0"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
              title="Parsons"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </Col>
      </Row>
    </Container>
  );
}

export default Legacy;
