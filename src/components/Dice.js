import React from "react";
import "../style/Dice.css";
import a from "../images/dice-1.png";
import b from "../images/dice-2.png";
import c from "../images/dice-3.png";
import d from "../images/dice-4.png";
import e from "../images/dice-5.png";
import f from "../images/dice-6.png";
class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { text } = this.props;
    const diceList = { 1: a, 2: b, 3: c, 4: d, 5: e, 6: f };
    return (
      <div className="dice">
        <img src={diceList[text]} alt="" />
      </div>
    );
    // return <div>{text}</div>;
  }
}

export default Dice;
