import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="none" dark expand="md">
          <NavbarBrand href="/">BlueRex</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#">Reviews</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#">Faq</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
