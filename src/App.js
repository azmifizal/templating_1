import React from "react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import MainContent from "./components/MainContent";
import MainFooter from "./components/MainFooter";

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <MainHeader />
        <MainContent />
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default App;
