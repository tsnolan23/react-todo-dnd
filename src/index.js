import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Instructions from "./Instructions";
import Todos from "./Todos";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Instructions />
        <Todos />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
