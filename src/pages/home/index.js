import React from "react";
import "./style.css";

import Intro from "./intro";
import ProductExplain from "./productExplain";
import Achievement from "./achievement";
import Motivate from "./motivate";
import GraphicDesign from "./graphicDesign";
import RecentWork from "./recentWork";
import Partner from "./partner";
import Testimoni from "./testimoni";
import Contact from "./contact";
import Social from "./social";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actTabProduct: "1",
      actTabWork: "1"
    };
  }

  toggleProduct = tab => {
    if (this.state.actTabProduct !== tab) {
      this.setState({
        actTabProduct: tab
      });
    }
  };

  toggleWork = tab => {
    if (this.state.actTabWork !== tab) {
      this.setState({
        actTabWork: tab
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Intro />
        <ProductExplain
          activeTab={this.state.actTabProduct}
          toggleFunc={this.toggleProduct}
        />
        <Achievement />
        <Motivate />
        <GraphicDesign />
        <RecentWork
          activeTab={this.state.actTabWork}
          toggleFunc={this.toggleWork}
        />
        <Partner />
        <Testimoni />
        <Contact />
        <Social />
      </React.Fragment>
    );
  }
}
