import React from "react";
import "./style.css";

import Intro from "./Intro";
import ProductExplain from "./ProductExplain";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actTabProduct: "1"
    };
  }

  toggle = tab => {
    if (this.state.actTabProduct !== tab) {
      this.setState({
        actTabProduct: tab
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Intro />
        <ProductExplain
          activeTab={this.state.actTabProduct}
          toggleFunc={this.toggle}
        />
      </React.Fragment>
    );
  }
}
