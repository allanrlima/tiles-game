import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 8px;
`;

const InputComponent = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-size: 18px;
`;

export const Input = ({ label, onChange }) => (
  <Wrapper>
    <Label>{label}</Label>
    <InputComponent
      type="text"
      onChange={onChange}
      ref={input => input && input.focus()}
    />
  </Wrapper>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
