import React from "react";

import "../style/Buttons.css";
class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onTrigger = () => {
    this.props.parentCallback();
  };
  render() {
    const { text, img, classN, onTrigger } = this.props;
    return <button onClick={this.onTrigger}>{text}</button>;
  }
}

export default Buttons;
