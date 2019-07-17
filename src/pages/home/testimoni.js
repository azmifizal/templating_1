import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import usersImg from "../../assets/images/users.svg";

const testiomoni = () => {
  return (
    <Jumbotron className="testimoni">
      <Container>
        <Row>
          <Col xs="12" md={{ size: 10, offset: 1 }}>
            <Row>
              <Col md="6">
                <p className="lead">Our Happy Client</p>
                <h1 className="display-2">Testimonials</h1>
                <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                    sit amet.
                  </p>
                  <ul className="ratting">
                    <li key={1}>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li key={2}>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li key={3}>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li key={4}>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li key={5}>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                  </ul>
                  <h6>Jhon Doe</h6>
                </div>
              </Col>
              <Col md="6">
                <img className="usersImg" src={usersImg} alt="testimonialImg" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default testiomoni;
