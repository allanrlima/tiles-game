import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input/index";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  background-color: #000;
  width: 100%;
  height: 100%;
  font-size: 32px;
  color: #fff;
  padding: 16px;
`;

const Title = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-indent: 0.7rem;
  font-weight: 300;
  white-space: nowrap;
  letter-spacing: 0.7rem;
`;

export const GameOver = ({ onSubmit, onChangeName }) => (
  <Wrapper>
    <Title>Game over ):</Title>
    <form onSubmit={onSubmit}>
      <Input
        label="Insert your name and press enter, to register your record"
        onChange={onChangeName}
      />
    </form>
  </Wrapper>
);
