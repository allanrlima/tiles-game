import React, { Component } from "react";
import { Container } from "../../components/Container/index";
import styled from "styled-components";
import { TilesWrapper } from "../../components/TilesWrapper/index";

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

  getTilesQuantityByStep = () => {
    const { step } = this.state;
    const tilesQuantity = Math.pow(step + 1, 2);
    return tilesQuantity;
  };

  getTiles = () => {
    const tilesQuantity = this.getTilesQuantityByStep();

    const tile = {
      color: "black",
      unique: false
    };

    const tiles = Array(tilesQuantity).fill(tile);
    return tiles;
  };

  render() {
    const { step } = this.state;
    return (
      <Container>
        <Title>Tiles Game</Title>
        <Step>Step: {step}</Step>
        <TilesWrapper tiles={this.getTiles()} />
      </Container>
    );
  }
}

export default Game;
