import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";

const contact = () => {
  return (
    <Jumbotron className="contact">
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <div>
              <h1 className="display-2">Need Help?</h1>
              <h5 className="">Don't Forget to Contact With Us</h5>
              <p className="desc">
                Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet.
              </p>
            </div>
            <div>
              <Form>
                <Row form>
                  <Col md="5">
                    <FormGroup className="mb-2">
                      <Input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input-contact"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="5">
                    <FormGroup className="mb-2">
                      <Input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input-contact"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Button className="btn-contact" color="primary" size="md">
                        Submit
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default contact;
