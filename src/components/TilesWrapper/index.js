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

export const TilesWrapper = ({ tiles, handleTileClick }) => {
  return (
    <Wrapper
      gridTemplateColumns={getTilesGridTemplateColumnsStyle(tiles) || "auto"}
      id="tiles-wrapper"
    >
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          onClick={() => handleTileClick(tile.unique)}
          color={tile.color}
        />
      ))}
    </Wrapper>
  );
};
