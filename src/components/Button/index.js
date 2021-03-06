import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  background-color: #fff;
  width: 100%;
  min-width: 160px;
  display: block;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: "#FFF";
  color: 000;
  transition: background-color 0.3s;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 14;
  text-transform: uppercase;
  &:hover && :focus {
    background-color: #27ae60;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(236, 240, 241, 0.3);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  :active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
`;

export const Button = ({ onClick, title }) => (
  <ButtonComponent onClick={onClick}>{title}</ButtonComponent>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
