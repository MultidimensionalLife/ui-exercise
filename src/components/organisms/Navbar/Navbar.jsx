// @flow

import React from "react";

import { useDispatch } from "react-redux";

import AppBarActions from "../../molecules/AppBarActions";

import Input from "../../atoms/Input";

import { Container } from "./Styled";
import { DividerVertical } from "../../molecules/AppBarActions/Styled";

import { create } from "../../../redux/slices/users";

import type { User } from "../../../redux/slices/users/types";

function NavBar(): React$Node {
  const dispatch = useDispatch();

  return (
    <Container>
      <AppBarActions
        onAdd={() => {}}
        onEdit={() => {}}
        onRefresh={() => {}}
        onDelete={() => {}}
      />
      <DividerVertical />
      <Input placeholder="Search..." />
    </Container>
  );
}

export default NavBar;
