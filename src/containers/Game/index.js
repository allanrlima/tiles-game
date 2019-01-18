import React, { Component } from "react";
import { Container } from "../../components/Container/index";
import styled from "styled-components";

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

  render() {
    const { step } = this.state;
    return (
      <Container>
        <Title>Tiles Game</Title>
        <Step>Step: {step}</Step>
      </Container>
    );
  }
}

export default Game;
