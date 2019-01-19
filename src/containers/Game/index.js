import React from "react";
import randomColor from "randomcolor";
import { lighten } from "polished";

import { Container } from "../../components/Container";
import { TilesWrapper } from "../../components/TilesWrapper";
import { shuffleArray } from "../../services/helper";
import { Title, Step, HallOfFameButton } from "./styles";
import { Header } from "../../components/Header";
import { GameOver } from "../../components/GameOver";
import { HallOfFame } from "../../components/HallOfFame";
import { Button } from "../../components/Button";
import { setRecord } from "../../services/records";

class Game extends React.Component {
  state = {
    step: 1,
    isGameOver: false,
    showHallOfFame: false,
    name: ""
  };

  getTilesNumberByStep = () => {
    const { step } = this.state;
    const tilesNumber = Math.pow(step + 1, 2);
    return tilesNumber;
  };

  changeColorAndUniqueOfFirstElementInTheArray = tiles => {
    const oldColor = tiles[0].color;
    const color = lighten(0.2, oldColor);
    const uniqueTile = { color, unique: true };
    tiles = [uniqueTile, ...tiles.splice(1)];
    return tiles;
  };

  getTiles = () => {
    const tilesNumber = this.getTilesNumberByStep();
    const color = randomColor();

    const tile = {
      color,
      unique: false
    };

    let tiles = Array(tilesNumber).fill(tile);
    tiles = this.changeColorAndUniqueOfFirstElementInTheArray(tiles);
    tiles = shuffleArray(tiles);
    return tiles;
  };

  handleTileClick = isUnique => {
    const { step } = this.state;
    if (isUnique) {
      this.setState({ step: step + 1 });
    } else {
      this.setState({
        isGameOver: true
      });
    }
  };

  onChangeName = event => {
    const { value: name } = event.target;
    this.setState({ name });
  };

  onSubmitName = event => {
    event.preventDefault();
    const { name, step } = this.state;
    setRecord({ name, step });
    this.setState({
      isGameOver: false,
      step: 1
    });
  };

  showHallOfFame = () => this.setState({ showHallOfFame: true });

  hideHallOfFame = () => this.setState({ showHallOfFame: false });

  render() {
    const { step, isGameOver, showHallOfFame } = this.state;
    return (
      <Container>
        <Header>
          <Title>Tiles Game</Title>
          <HallOfFameButton>
            <Button title={"See Hall Of Fame"} onClick={this.showHallOfFame} />
          </HallOfFameButton>
          <Step>Step: {step}</Step>
        </Header>
        <TilesWrapper
          handleTileClick={this.handleTileClick}
          tiles={this.getTiles()}
        />
        {isGameOver && (
          <GameOver
            onSubmit={this.onSubmitName}
            onChangeName={this.onChangeName}
          />
        )}
        {showHallOfFame && <HallOfFame hideHallOfFame={this.hideHallOfFame} />}
      </Container>
    );
  }
}

export default Game;
