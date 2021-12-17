import React from "react";
import "../style/Dice.css";
class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

export default Dice;
