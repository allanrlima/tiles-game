import React from "react";
import randomColor from "randomcolor";
import { lighten } from "polished";

import { Container } from "../../components/Container";
import { TilesWrapper } from "../../components/TilesWrapper";
import { shuffleArray } from "../../services/helper";
import { Title, Step } from "./styles";
import { Header } from "../../components/Header";
import { GameOver } from "../../components/GameOver";

class Game extends React.Component {
  state = {
    step: 1,
    isGameOver: false,
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
        isGameOver: true,
        step: 1
      });
    }
  };

  onChangeName = event => {
    const { value: name } = event.target;
    this.setState({ name });
  };

  onSubmitName = event => {
    event.preventDefault();
    this.setState({
      isGameOver: false
    });
  };

  render() {
    const { step, isGameOver } = this.state;
    return (
      <Container>
        <Header>
          <Title>Tiles Game</Title>
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
      </Container>
    );
  }
}

export default Game;
