import React, { Component } from "react";
import randomColor from "randomcolor";
import { lighten } from "polished";

import { Container } from "../../components/Container/index";
import { TilesWrapper } from "../../components/TilesWrapper/index";
import { shuffleArray } from "../../services/helper";
import { Title, Step } from "./styles";

class Game extends Component {
  state = {
    step: 1
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

  setNextStep = isUnique => {
    const { step } = this.state;
    if (isUnique) {
      this.setState({ step: step + 1 });
    }
  };

  render() {
    const { step } = this.state;
    return (
      <Container>
        <Title>Tiles Game</Title>
        <Step>Step: {step}</Step>
        <TilesWrapper setNextStep={this.setNextStep} tiles={this.getTiles()} />
      </Container>
    );
  }
}

export default Game;
