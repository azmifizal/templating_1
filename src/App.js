import React from "react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import MainContent from "./components/MainContent";

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <MainHeader />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default App;
