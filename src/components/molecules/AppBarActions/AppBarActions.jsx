// @flow

import React from "react";

import IconButton from "../../atoms/Buttons/IconButton/IconButton";
import { Container, DividerVertical } from "./Styled";

import type { AppBarActionsPropTypes } from "./types";

function AppBarActions({
  onAdd,
  onEdit,
  onRefresh,
  onDelete,
}: AppBarActionsPropTypes): React$Node {
  return (
    <Container>
      <IconButton iconName="fa-plus" onClick={onAdd} />
      <DividerVertical />
      <IconButton iconName="fa-edit" onClick={onEdit} />
      <DividerVertical />
      <IconButton iconName="fa-refresh" onClick={onRefresh} />
      <DividerVertical />
      <IconButton iconName="fa-trash" onClick={onDelete} />
    </Container>
  );
}

export default AppBarActions;
