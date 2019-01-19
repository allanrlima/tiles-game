import React, { Component } from "react";
import { Container } from "../../components/Container/index";
import styled from "styled-components";
import randomColor from "randomcolor";
import { TilesWrapper } from "../../components/TilesWrapper/index";
import { lighten } from "polished";

const Title = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

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
