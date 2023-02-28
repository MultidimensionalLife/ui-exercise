// @flow

import React from "react";

import styled from "styled-components";

const StyledCheckbox = styled.input`
  background-color: red;
`;

type CheckboxPropTypes = {
  onChange: () => void,
};

function Checkbox({ onChange }: CheckboxPropTypes): React$Node {
  return <StyledCheckbox type="checkbox" onChange={onChange} />;
}

export default Checkbox;
