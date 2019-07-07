import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";

const jumbotron = () => {
  return (
    <Jumbotron className="intro">
      <Container>
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
      </Container>
    </Jumbotron>
  );
};

export default jumbotron;
