import React, { Component } from "react";

class MyName extends Component {
  static defaultProps = {
    name: "기본값"
  };
  render() {
    return (
      <div>
        안녕하세요 <b>{this.props.name}</b>입니다
      </div>
    );
  }
}

// MyName.defaultProps = {
//   name: "velopert"
// };

export default MyName;
