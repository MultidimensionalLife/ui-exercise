// @flow

import React from "react";

import AppBarActions from "../../molecules/AppBarActions";

import Input from "../../atoms/Input";

import { Container } from "./Styled";
import { DividerVertical } from "../../molecules/AppBarActions/Styled";

import type { AppBarActionsPropTypes } from "../../molecules/AppBarActions/types";

function NavBar({ ...actionProps }: AppBarActionsPropTypes): React$Node {
  return (
    <Container>
      <AppBarActions {...actionProps} />
      <DividerVertical />
      <Input placeholder="Search..." />
    </Container>
  );
}

export default NavBar;
