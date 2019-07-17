import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import noImg from "../../assets/images/no_image.jpg";

const graphicDsign = () => {
  return (
    <Jumbotron className="graphicDesign">
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Row>
              <Col md="6">
                <p className="lead">We are best and creative agency</p>
                <h1 className="display-2">
                  We turn creative ideas
                  <br /> into your business.
                </h1>
                <p className="desc">
                  Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                  sit amet.
                </p>

                <Row>
                  <Col sm="6" className="card-dsign">
                    <FontAwesomeIcon className="icon" icon={faComments} />
                    <h6>Graphic Dsinger</h6>
                    <p className="card-point">
                      Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                      lorem ipsum dolor sit amet lorem ipsum dolor
                    </p>
                    <Button color="danger">Read More</Button>
                  </Col>
                  <Col sm="6" className="card-dsign">
                    <FontAwesomeIcon className="icon" icon={faBullhorn} />
                    <h6>Graphic Dsinger</h6>
                    <p className="card-point">
                      Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                      lorem ipsum dolor sit amet lorem ipsum dolor
                    </p>
                    <Button color="danger">Read More</Button>
                  </Col>
                </Row>
              </Col>
              <Col md="6">
                <img className="graphImg" src={noImg} alt="graphDsign" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default graphicDsign;
