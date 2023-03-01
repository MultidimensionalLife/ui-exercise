// @flow

import React from "react";

import styled from "styled-components";

type PrimaryButtonPropTypes = {
  label: string,
};

const StyledButton = styled.button`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #3a4752;
`;

function PrimaryButton({ label }: PrimaryButtonPropTypes): React$Node {
  return <StyledButton>{label}</StyledButton>;
}

export default PrimaryButton;
