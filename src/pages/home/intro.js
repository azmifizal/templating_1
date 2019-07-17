import React from "react";
import { Jumbotron, Container, Button, Row, Col } from "reactstrap";
import programmerImg from "../../assets/images/programmer_2.svg";

const intro = () => {
  return (
    <Jumbotron className="intro">
      <Container>
        <Row>
          <Col md="7">
            <p className="lead">We are best and creative agency</p>
            <h1 className="display-2">
              We turn creative ideas
              <br /> into your business
            </h1>
            <hr className="my-2" />
            <p>
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet.
            </p>
            <p className="lead">
              <Button color="danger">Our story</Button>
              <Button color="primary">Read More</Button>
            </p>
          </Col>
          <Col md="5">
            <img className="programmerImg" src={programmerImg} alt="Intro" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default intro;
