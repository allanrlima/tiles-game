import React from "react";
import styled from "styled-components";
import { media } from "../../services/styles";

const Wrapper = styled.div`
  min-height: 64px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 100px auto 100px;
  ${media.mobile`
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    justify-content: center;
    grid-row-gap: 16px;
  `}
`;

export const Header = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
