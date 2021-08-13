import React, { Component } from "react";

class Counter extends Component {
  state = {
    cNum: 0
  };

  constructor(props) {
    super(props);
    this.numIncrease = this.numIncrease.bind(this);
  }

  /*
    state는 컴포넌트 내부 Data Structure같은 거임
    state변경은 setState를 통해서 함
  */
  numIncrease() {
    //this.state.cNum += 1;
    console.log(this);
    this.setState({
      cNum: this.state.cNum + 1
    });
  }
  numDecrease = () => {
    console.log(this);
    this.setState({
      cNum: this.state.cNum - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div> 값 : {this.state.cNum} </div>
        <button onClick={this.numIncrease}>+</button>
        <button onClick={this.numDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
