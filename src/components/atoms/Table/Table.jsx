// @flow

import React from "react";
import { useEffect, useState } from "react";

import { StyledTableContainer, StyledTable } from "./Styled";

type TableData = Array<{ [string]: any }>;

function Table({ data }: { data: TableData }): React$Node {
  const [tableHeader, setTableHeader] = useState([]);

  useEffect(() => {
    const firstRow = data[0];

    setTableHeader(Object.keys(firstRow));
  }, [data]);

  return (
    <StyledTableContainer>
      <StyledTable border={1}>
        <thead>
          <tr>
            {tableHeader.length > 0 &&
              tableHeader.map((row) => <th key={row}>{row}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {tableHeader.map((header, _index) => (
                <td key={`${index}-${_index}`}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
}

export default Table;
