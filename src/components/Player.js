import React from "react";

class Player extends React.Component {
  render() {
    const { name, total, cur, active } = this.props;
    console.log("test", name, total, cur, active);

    return (
      <div>
        <h1>{name} </h1>
        <h1>{total} </h1>
        <h1>{cur} </h1>
      </div>
    );
  }
}
export default Player;
