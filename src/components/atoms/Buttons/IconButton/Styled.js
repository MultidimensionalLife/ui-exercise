import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.5em;
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 3px;

  :active {
    position: relative;
    top: 1px;
  }

  :disabled {
    position: unset;
    cursor: default;
  }
`;
