import React from "react";
import "../style/Inputs.css";
class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onTrigger = (event) => {
    console.log("from inputs", event.target.value);
    this.props.parentCallback(event.target.value);
  };
  render() {
    let { placeholder, disable } = this.props;
    return (
      <div>
        <input type="text" placeholder={placeholder} onChange={this.onTrigger} disabled={disable} />
      </div>
    );
  }
}

export default Inputs;
