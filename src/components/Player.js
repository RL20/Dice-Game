import React from "react";
import "../style/Player.css";
class Player extends React.Component {
  componentDidUpdate(prevprops) {
    if (prevprops.winnerStyle !== this.props.winnerStyle) {
      // console.log("diffrent", this.props.winnerStyle);
      // console.log("diffrent", prevprops.winnerStyle);
    }
  }
  render() {
    const { name, total, cur, active, winnerStyle } = this.props;
    // console.log("test", name, total, cur, active);
    // console.log("winnerStyle", winnerStyle);
    return (
      // <div className="player" style={{ backgroundColor: winnerStyle }}>

      <div className="player">
        <div className="name">{name}</div>
        <div className="total-wrap">
          <div className="total">{total}</div>
          <h1 className="hidden" style={{ visibility: `${winnerStyle}` }}>
            You Won
          </h1>
        </div>
        <div className="current-wrap">
          <div className="current">{cur}</div>
        </div>
      </div>
    );
  }
}
export default Player;
