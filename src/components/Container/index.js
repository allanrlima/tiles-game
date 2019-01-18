import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
