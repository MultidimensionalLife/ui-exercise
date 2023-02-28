import styled from "styled-components";

export const StyledTableContainer = styled.div`
  background-color: #3a4752;
  padding: 0.5em;
  border-radius: 3px;
  margin: 1em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
`;

export const StyledTable = styled.table`
  border-collapse: : collapse;
  width: 100%;

  td, th {
    border: 1px solid #76828c;
    padding: 0.5em;
  }

  td {
    color: #abb7c4;
  }

  th {
    padding: 0.5em;
    text-align: left;
    background-color: #5c6c83;
    color: #abb7c4;
  }
`;
