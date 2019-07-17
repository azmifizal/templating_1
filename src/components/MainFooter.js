import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import thumbImg from "../assets/images/no_image.jpg";
import map from "../assets/images/World_map_dots.svg";

const mainFooter = () => {
  return (
    <React.Fragment>
      <Jumbotron className="footer">
        <img className="mapImg" src={map} alt="map" />
        <Container>
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <Row>
                <Col md="6">
                  <Row>
                    <Col className="point" xs="3" sm="6">
                      <h5>Company</h5>
                      <ul>
                        <li>About</li>
                        <li>Approach</li>
                        <li>Sustainability</li>
                        <li>Carers</li>
                        <li>News</li>
                      </ul>
                    </Col>
                    <Col className="point" xs="3" sm="6">
                      <h5>Company</h5>
                      <ul>
                        <li>About</li>
                        <li>Approach</li>
                        <li>Sustainability</li>
                        <li>Carers</li>
                        <li>News</li>
                      </ul>
                    </Col>
                    <Col className="point" xs="3" sm="6">
                      <h5>Company</h5>
                      <ul>
                        <li>About</li>
                        <li>Approach</li>
                        <li>Sustainability</li>
                        <li>Carers</li>
                        <li>News</li>
                      </ul>
                    </Col>
                    <Col className="point" xs="3" sm="6">
                      <h5>Company</h5>
                      <ul>
                        <li>About</li>
                        <li>Approach</li>
                        <li>Sustainability</li>
                        <li>Carers</li>
                        <li>News</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <Row>
                    <Col xs="3" sm="6">
                      <img
                        className="thumbImg mb-4"
                        src={thumbImg}
                        alt="thumbImg"
                      />
                    </Col>
                    <Col xs="3" sm="6">
                      <img
                        className="thumbImg mb-4"
                        src={thumbImg}
                        alt="thumbImg"
                      />
                    </Col>
                    <Col xs="3" sm="6">
                      <img
                        className="thumbImg mb-4"
                        src={thumbImg}
                        alt="thumbImg"
                      />
                    </Col>
                    <Col xs="3" sm="6">
                      <img
                        className="thumbImg mb-4"
                        src={thumbImg}
                        alt="thumbImg"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid className="copyright">
        <Row>
          <Col sm="12">
            <p style={{ marginBottom: 0 }}>
              &copy; 2022 Theme by psdfreebies.com
              &nbsp;&nbsp;&bull;&nbsp;&nbsp; Privacy
              &nbsp;&nbsp;&bull;&nbsp;&nbsp; Terms of Use
              &nbsp;&nbsp;&bull;&nbsp;&nbsp; Site Map
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default mainFooter;
