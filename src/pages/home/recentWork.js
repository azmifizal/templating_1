import React from "react";
import classnames from "classnames";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button
} from "reactstrap";

import dummyImg from "../../assets/images/no_image.jpg";

const recentWork = props => {
  return (
    <Jumbotron className="recentWork">
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Row>
              <Col sm="12" md={{ size: 10, offset: 1 }}>
                <h1 className="display-2">Our Recent Work</h1>
                <p className="desc">
                  Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                  sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem
                  ipsum dolor sit amet lorem ipsum.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: props.activeTab === "1"
                      })}
                      onClick={() => props.toggleFunc("1")}
                    >
                      WEB DESIGN
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: props.activeTab === "2"
                      })}
                      onClick={() => props.toggleFunc("2")}
                    >
                      MOBILE APP
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: props.activeTab === "3"
                      })}
                      onClick={() => props.toggleFunc("3")}
                    >
                      BRANDING
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={props.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <Row>
                          <Col xs="12" sm="6" md="4">
                            <img
                              className="img-thumb"
                              src={dummyImg}
                              alt="dummyImg"
                            />
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <img
                              className="img-thumb"
                              src={dummyImg}
                              alt="dummyImg"
                            />
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <img
                              className="img-thumb"
                              src={dummyImg}
                              alt="dummyImg"
                            />
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <img
                              className="img-thumb"
                              src={dummyImg}
                              alt="dummyImg"
                            />
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <img
                              className="img-thumb"
                              src={dummyImg}
                              alt="dummyImg"
                            />
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <img
                              className="img-thumb"
                              src={dummyImg}
                              alt="dummyImg"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col xs="12" sm="6" md="4">
                        <img
                          className="img-thumb"
                          src={dummyImg}
                          alt="dummyImg"
                        />
                      </Col>
                      <Col xs="12" sm="6" md="4">
                        <img
                          className="img-thumb"
                          src={dummyImg}
                          alt="dummyImg"
                        />
                      </Col>
                      <Col xs="12" sm="6" md="4">
                        <img
                          className="img-thumb"
                          src={dummyImg}
                          alt="dummyImg"
                        />
                      </Col>
                      <Col xs="12" sm="6" md="4">
                        <img
                          className="img-thumb"
                          src={dummyImg}
                          alt="dummyImg"
                        />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col xs="12" sm="6" md="4">
                        <img
                          className="img-thumb"
                          src={dummyImg}
                          alt="dummyImg"
                        />
                      </Col>
                      <Col xs="12" sm="6" md="4">
                        <img
                          className="img-thumb"
                          src={dummyImg}
                          alt="dummyImg"
                        />
                      </Col>
                      <Col xs="12" sm="6" md="4">
                        <img
                          className="img-thumb"
                          src={dummyImg}
                          alt="dummyImg"
                        />
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
                <Button color="danger">Read More</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default recentWork;
