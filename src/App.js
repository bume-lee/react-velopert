import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "react";
    const val = 2;
    const style = {
      backgrouundColor: "green",
      padding: "16px",
      color: "red",
      fontSize: "36px"
    };
    return (
      <Fragment>
        <div style={style}>hello~ {name}</div>
        <div>bye~</div>
        <div className="App">{name === "react" && <div> 벨로??</div>}</div>
        <div>
          {(function () {
            if (val === 1) return <div>1이다</div>;
            if (val === 2) return <div>2이다</div>;
            if (val === 3) return <div>3이다</div>;
            return <div>none</div>;
          })()}
        </div>
        <div>
          {(() => {
            if (name === "react") return <div>dddddddd</div>;
          })()}
        </div>
      </Fragment>
    );
  }
}

export default App;
