import React, { Component } from "react";

class Lifecycle extends Component {
  state = {
    value: 0
  };
  constructor(props) {
    super(props);
    console.log("Lifecycle constructor!!!");
  }

  componentDidMount() {
    console.log("Lifecycle componentDidMount!!!");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    for (let key in nextProps) {
      console.log("nextProps key: " + key + " / " + nextProps[key]);
    }
    for (let key in prevState) {
      console.log("prevState key: " + key + " / " + prevState[key]);
    }

    if (prevState.value !== nextProps.cnt) {
      return {
        value: nextProps.cnt
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    //false를 return 할 경우 값은 변하지만 rendering을 하지 않는다
    if (nextProps.cnt > 10) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.cnt !== prevProps.value) {
      console.log("value 값이 바뀌었다", this.props.cnt);
    }
  }

  componentWillUnmount() {
    console.log("Good bye~ ");
  }

  render() {
    return (
      <div>
        {this.props.missing.asis}
        <p>props : {this.props.cnt}</p>
        <p>state : {this.state.value}</p>
      </div>
    );
  }
}

export default Lifecycle;
