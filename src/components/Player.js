import React from "react";
import "../style/Player.css";
class Player extends React.Component {
  render() {
    const { name, total, cur, active } = this.props;
    console.log("test", name, total, cur, active);

    return (
      <div className="player">
        <div className="name">{name}</div>
        <div className="total-wrap">
          <div className="total">{total}</div>
        </div>
        <div className="current-wrap">
          <div className="current">{cur}</div>
        </div>

        {/* <h1>{name} </h1>
        <h1>{total} </h1>
        <h1>{cur} </h1> */}
      </div>
    );
  }
}
export default Player;
