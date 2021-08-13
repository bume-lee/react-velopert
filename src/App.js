import React, { Component } from "react";
import "./App.css";
import Study01 from "./Study01";
import MyName from "./Study02";
import MyNameFunc from "./MyNameFunc";

import Counter from "./Study04";
import LifeCycle from "./Study05";

class App extends Component {
  state = {
    counter: 1,
    error: false
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   console.log(this.myDiv.getBoundingClientRect().height);
  // }
  //<div ref={(ref) => (this.myDiv = ref)}>

  handleClick = () => {
    console.log("click!!!");
    this.setState({
      counter: this.state.counter + 1
    });
  };

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) {
      return <div>에러가 났소!!!!</div>;
    }
    return (
      <div>
        {this.state.counter < 10 && <LifeCycle cnt={this.state.counter} />}
        <button onClick={this.handleClick}>click</button>
        <hr />
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
