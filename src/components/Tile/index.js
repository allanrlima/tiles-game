import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.color};
  color: #fff;
  width: 100%;
  padding-top: 100%;
`;

export const Tile = ({ color }) => {
  return <Wrapper color={color} />;
};
