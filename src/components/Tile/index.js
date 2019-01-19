import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.color};
  color: #fff;
  width: 100%;
  padding-top: 100%;
  cursor: pointer;
`;

export const Tile = ({ color, onClick }) => {
  return <Wrapper color={color} onClick={onClick} />;
};
