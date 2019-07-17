import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";

const motivate = () => {
  return (
    <Jumbotron className="motivate">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <p className="lead">Let's Grow Together</p>
            <h1 className="display-2">
              We turn creative ideasinto your business
            </h1>
            <p>
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum.
            </p>
            <p className="lead">
              <Button color="danger">READ MORE</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default motivate;
