import React from "react";
import classnames from "classnames";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const productExplain = props => {
  return (
    <Jumbotron className="productExplain">
      <Container>
        <Row>
          <Col md="5">
            <p className="lead">Dream Big Inspire The World</p>
            <h1 className="display-2">
              We turn creative ideas
              <br /> into your business
            </h1>

            <div>
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
                      <p>
                        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <p>
                        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <p>
                        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>

            <p className="lead">
              <Button color="danger">Read More</Button>
            </p>
          </Col>
          <Col sm={{ size: "auto", offset: 1 }} />
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default productExplain;
