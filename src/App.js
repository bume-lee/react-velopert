import React, { Component } from "react";
import "./App.css";
import Study01 from "./Study01";
import MyName from "./Study02";
import MyNameFunc from "./MyNameFunc";

import Counter from "./Study04";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <Study01 />
        <hr />
        <MyName
          myName="props 테스트" //props 부모가 자식에게 값을 전달
        />
        <MyName />
        <MyNameFunc />
        <hr />
      </div>
    );
  }
}

export default App;
