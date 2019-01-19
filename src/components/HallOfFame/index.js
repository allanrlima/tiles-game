import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { getTopTenRecords } from "../../services/records/index";

import { media } from "../../services/styles";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: 64px auto 64px;
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
  ${media.mobile`
    text-indent: inherit;
    letter-spacing: inherit;
  `}
`;

const PositionsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(5, 72px [col-start]);
  margin-top: 32px;
  ${media.mobile`
    font-size: 18px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
  `}
`;

export const HallOfFame = ({ hideHallOfFame }) => {
  const records = getTopTenRecords();
  console.log(records.length);
  return (
    <Wrapper>
      <Title>
        Hall Of Fame (: {records.length === 0 && " - No Records yet"}
      </Title>
      <PositionsWrapper>
        {records.map((record, index) => {
          const { name, step } = record;
          const position = index + 1;
          return (
            <div>
              <div>
                {position}. {name === "" ? "Anonymous" : name} - Record: {step}
              </div>
            </div>
          );
        })}
      </PositionsWrapper>
      <Button title="Back to the game" onClick={hideHallOfFame} />
    </Wrapper>
  );
};
