// @flow

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonContainer } from "./Styled";

import type { IconButtonPropTypes } from "./types";

function IconButton({ iconName, ...others }: IconButtonPropTypes): React$Node {
  return (
    <ButtonContainer {...others}>
      <FontAwesomeIcon icon={iconName} />
    </ButtonContainer>
  );
}

export default IconButton;
