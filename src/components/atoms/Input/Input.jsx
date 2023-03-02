// @flow

import React from "react";

import { StyledInputWrapper, StyledInput } from "./Styled";

type InputPropTypes = { inputProps?: any };

function Input({ ...inputProps }: InputPropTypes): React$Node {
  return (
    <StyledInputWrapper>
      <StyledInput {...inputProps} />
    </StyledInputWrapper>
  );
}

export default Input;
