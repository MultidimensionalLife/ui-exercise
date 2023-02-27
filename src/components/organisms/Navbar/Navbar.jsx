// @flow

import AppBarActions from "../../molecules/AppBarActions";

import Input from "../../atoms/Input";

import { Container } from "./Styled";
import { DividerVertical } from "../../molecules/AppBarActions/Styled";

function NavBar(): React$Node {
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
