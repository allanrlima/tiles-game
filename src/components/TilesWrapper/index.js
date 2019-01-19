import React from "react";
import styled from "styled-components";
import { Tile } from "../Tile";

const Wrapper = styled.div`
  margin-top: 8px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${props => props.gridTemplateColumns};
`;

const getTilesGridTemplateColumnsStyle = (tiles = []) => {
  const sliceQuantity = Math.sqrt(tiles.length);
  const gridTemplateColumns = tiles.slice(0, sliceQuantity).map(() => "auto ");
  return gridTemplateColumns;
};

export const TilesWrapper = ({ tiles, setNextStep }) => {
  return (
    <Wrapper
      gridTemplateColumns={getTilesGridTemplateColumnsStyle(tiles) || "auto"}
    >
      {tiles.map(tile => (
        <Tile onClick={() => setNextStep(tile.unique)} color={tile.color} />
      ))}
    </Wrapper>
  );
};
