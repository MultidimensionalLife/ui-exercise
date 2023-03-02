import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  background-color: #57636d;
  border: 1px solid #76828c;
  border-radius: 3px;
  padding: 0.4em;
  display: flex;
`;

export const StyledInput = styled.input`
  background-color: #57636d;
  border-width: 0;
  padding: 0;
  margin: 0;
  outline: none;
  color: white;
  width: 100%;
  ::placeholder {
    color: #9ea7ae;
  }
`;
