import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

const social = () => {
  return (
    <Jumbotron className="social">
      <Container>
        <Row>
          <Col xs="12">
            <a href="https://www.facebook.com" target="blank">
              facebook
            </a>
            <a href="https://www.twitter.com" target="blank">
              twitter
            </a>
            <a href="https://www.linkedin.com" target="blank">
              linkedin
            </a>
            <a href="https://www.instagram.com" target="blank">
              instagram
            </a>
            <a href="https://www.behance.net" target="blank">
              behance
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default social;
