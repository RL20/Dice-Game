import React from "react";
import new_24 from "../images/new-24.png";
import new_48 from "../images/new-48.png";
import hold_32 from "../images/hold-32.png";
import hold_48 from "../images/hold-48.png";
import dice_32 from "../images/dice-32.png";
import dice_48 from "../images/dice-48.png";

import "../style/Buttons.css";
class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.images = {
      new_small: new_24,
      new_large: new_48,
      hold_small: hold_32,
      hold_large: hold_48,
      dice_small: dice_32,
      dice_large: dice_48,
    };
  }

  onTrigger = () => {
    this.props.parentCallback();
  };
  render() {
    const { text, img, disable } = this.props;
    return (
      <button className="button-container" onClick={this.onTrigger} disabled={disable}>
        <img className="button-image--small" src={this.images[img]} alt={text} />
        <span className="button-label">{text}</span>
      </button>
    );
  }
}

export default Buttons;
