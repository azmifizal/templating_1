import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faUserTie,
  faGlobeAmericas
} from "@fortawesome/free-solid-svg-icons";

const achievement = props => {
  return (
    <div className="achievement">
      <Jumbotron>
        <Container>
          <Row>
            <Col className="motivate-point" md="4">
              <FontAwesomeIcon className="icon" icon={faProjectDiagram} />
              <h2>500+</h2>
              <h5>
                Successfully <br />
                <small>completed projects</small>
              </h5>
              <p>
                lorem ipsum dolor sitamet lorem ipsum dolor sitamet lorem ipsum
                dolor sitamet lorem ipsum dolor sitamet lorem ipsum dolor sit
                amet
              </p>
            </Col>
            <Col className="motivate-point purple" md="4">
              <FontAwesomeIcon className="icon" icon={faUserTie} />
              <h2>254+</h2>
              <h5>
                Highly &nbsp;
                <small>
                  specialized <br />
                  employees
                </small>
              </h5>
              <p>
                lorem ipsum dolor sitamet lorem ipsum dolor sitamet lorem ipsum
                dolor sitamet lorem ipsum dolor sitamet lorem ipsum dolor
                sitamet lorem ipsum dolor sitamet
              </p>
            </Col>
            <Col className="motivate-point" md="4">
              <FontAwesomeIcon className="icon" icon={faGlobeAmericas} />
              <h2>45+</h2>
              <h5>
                Awards <br />
                <small>around the world</small>
              </h5>
              <p>
                lorem ipsum dolor sitamet lorem ipsum dolor sitamet lorem ipsum
                dolor sitamet lorem ipsum dolor sitamet lorem ipsum dolor
                sitamet lorem ipsum dolor sitamet
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default achievement;
