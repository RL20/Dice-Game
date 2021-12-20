import "../style/App.css";
import Player from "./Player";
import React from "react";
import Buttons from "./Buttons";
import Dice from "./Dice";
import Inputs from "./Inputs";

class App extends React.Component {
  state = {
    p1: { name: "Player 1", cur: 0, total: 0, active: true, winnerStyle: "" },
    p2: { name: "Player 2", cur: 0, total: 0, active: false, winnerStyle: "" },
    dices: [0, 0],
    winScore: 100,
    disable: false,
    interval: "",
    thereIsWinner: false,
    firstTimeThrow: true,
  };

  handleHold = () => {
    this.setState((prevState) => ({
      p1: { ...prevState.p1, active: !prevState.p1.active },
      p2: { ...prevState.p2, active: !prevState.p2.active },
    }));
  };
  handleDice = () => {
    const newState = {};
    const { p1, p2, winScore, thereIsWinner } = this.state;
    if (!thereIsWinner) {
      const [diceA, diceB] = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
      let currentScore = diceA + diceB;

      newState.dices = [diceA, diceB];
      newState.disable = true;

      // this.setState({ dices: [diceA, diceB], disable: true });

      let activeP = this.activePlayer();

      console.log("p1.total", p1.total);
      let playerWon = (p1.total + currentScore >= winScore && "p1") || (p2.total + currentScore >= winScore && "p2");
      currentScore !== 12 ? this.updatPlayerScore([activeP], currentScore) : this.resetPlayerScore([activeP]);

      if (playerWon) {
        console.log("**************************", playerWon);
        console.log(this.state[playerWon].total);
        // this.setState({ thereIsWinner: true });

        newState[playerWon] = {
          ...this.state[playerWon],
          winnerStyle: "visible",
        };
        newState.thereIsWinner = true;

        newState[activeP].total = this.state[activeP].total + currentScore;
        // this.setState((prevState) => ({
        //   [playerWon]: {
        //     ...prevState[playerWon],
        //     winnerStyle: "visible",
        //   },
        //   thereIsWinner: true,
        // }));
        // return;
      }
    }
    this.setState(newState);
  };
  // //!--------------------------------------------
  updatPlayerScore = (player, curentScore) => {
    this.setState((prevState) => ({ [player]: { ...prevState[player], cur: curentScore, total: (prevState[player].total += curentScore) } }));
  };
  // //!--------------------------------------------
  resetPlayerScore = (player) => {
    this.setState((prevState) => ({ [player]: { ...prevState[player], cur: 0, total: 0 } }));
    this.handleHold();
  };
  // //!--------------------------------------------
  resetGame = () => {
    this.setState((prevState) => ({
      p1: { ...prevState.p1, cur: 0, total: 0, active: true, winnerStyle: "" },
      p2: { ...prevState.p2, cur: 0, total: 0, active: false, winnerStyle: "" },
      dice1: 0,
      dice2: 0,
      winScore: 100,
      thereIsWinner: false,
    }));
  };
  //!--------------------------------------------
  activePlayer = () => {
    const { p1 } = this.state;
    return p1.active ? "p1" : "p2";
  };
  //!--------------------------------------------
  setWinScore = (childData) => {
    this.setState({ winScore: childData });
  };
  //!--------------------------------------------
  // winnerPresentation = (player) => {
  //   console.log("uuuuuuuuuuuu", player);
  //   let interval = setInterval(() => {
  //     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //     this.setState((prevState) => ({
  //       [player]: {
  //         ...prevState[player],
  //         winnerStyle: `#${randomColor}`,
  //       },
  //     }));
  //   }, 500);
  // };

  render() {
    const { p1, p2, dices, disable } = this.state;
    console.log("active", p1.winnerStyle);
    console.log("win", this.state.winScore);
    return (
      <div className="App">
        <Player name={p1.name} cur={p1.cur} total={p1.total} active={p1.active} winnerStyle={p1.winnerStyle} />
        <div className="main-game-logic">
          <Buttons text="NEW GAME" parentCallback={this.resetGame} img="new_small" />
          <Dice text={dices[0]} />
          <Dice text={dices[1]} />
          <Buttons text="ROLL DICE" parentCallback={this.handleDice} img="dice_small" />
          <Buttons text="HOLD" parentCallback={this.handleHold} img="hold_small" />
          <Inputs placeholder="Winning score" parentCallback={this.setWinScore} disable={disable} />
        </div>

        <Player name={p2.name} cur={p2.cur} total={p2.total} active={p2.active} winnerStyle={p2.winnerStyle} />
      </div>
    );
  }
}

export default App;
