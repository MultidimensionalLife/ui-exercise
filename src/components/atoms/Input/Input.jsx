// @flow

import { StyledInput } from "./Styled";

type InputPropTypes = { inputProps?: any };

function Input({ ...inputProps }: InputPropTypes): React$Node {
  return <StyledInput {...inputProps} />;
}

export default Input;
