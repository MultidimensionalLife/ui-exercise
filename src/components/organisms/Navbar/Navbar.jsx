// @flow

import React from "react";

import AppBarActions from "../../molecules/AppBarActions";

import Input from "../../atoms/Input";

import { Container } from "./Styled";
import { DividerVertical } from "../../molecules/AppBarActions/Styled";

import type { AppBarActionsPropTypes } from "../../molecules/AppBarActions/types";

type NavBarPropTypes = AppBarActionsPropTypes & {
  onSearch?: (e: SyntheticInputEvent<HTMLInputElement>) => void,
};

function NavBar({
  onSearch = () => {},
  ...actionProps
}: NavBarPropTypes): React$Node {
  return (
    <Container>
      <AppBarActions {...actionProps} />
      <DividerVertical />
      <Input placeholder="Search..." onChange={onSearch} />
    </Container>
  );
}

export default NavBar;
