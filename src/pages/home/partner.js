import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

import Cisco from "../../assets/images/cisco.png";
import Adidas from "../../assets/images/adidas.png";
import Lenovo from "../../assets/images/lenovo.png";
import Disney from "../../assets/images/disney.png";
import Amazon from "../../assets/images/amazon.png";
import Puma from "../../assets/images/puma.png";
import Apple from "../../assets/images/apple.png";
import Mini from "../../assets/images/mini.png";

const partner = () => {
  return (
    <Jumbotron className="partner">
      <Container>
        <Row>
          <Col xs="12" md={{ size: 10, offset: 1 }}>
            <Row>
              <Col xs="6" md="3">
                <img className="img-partner" src={Cisco} alt="Cisco" />
              </Col>
              <Col xs="6" md="3">
                <img className="img-partner" src={Adidas} alt="Adidas" />
              </Col>
              <Col xs="6" md="3">
                <img className="img-partner" src={Lenovo} alt="Lenovo" />
              </Col>
              <Col xs="6" md="3">
                <img className="img-partner" src={Disney} alt="Disney" />
              </Col>
              <Col xs="6" md="3">
                <img className="img-partner" src={Amazon} alt="Amazon" />
              </Col>
              <Col xs="6" md="3">
                <img className="img-partner" src={Puma} alt="Puma" />
              </Col>
              <Col xs="6" md="3">
                <img className="img-partner" src={Apple} alt="Apple" />
              </Col>
              <Col xs="6" md="3">
                <img className="img-partner" src={Mini} alt="Mini" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default partner;
