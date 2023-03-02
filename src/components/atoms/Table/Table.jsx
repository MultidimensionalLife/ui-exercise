// @flow

import React from "react";
import { useEffect, useRef, useState } from "react";

import { StyledTableContainer, StyledTable } from "./Styled";

type TableData = Array<{ [string]: any }>;

type TablePropTypes = {
  data: TableData,
  refKey: string,
};

function Table({ data, refKey = "id" }: TablePropTypes): React$Node {
  const dataCheckboxRef = useRef();

  const [tableHeader, setTableHeader] = useState([]);

  const [isSelectAllEnabled, setSelectAllEnable] = useState<boolean>(false);

  const [isChecked, setChecked] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const firstRow = data[0];

      setTableHeader(Object.keys(firstRow));
    }
  }, [data]);

  useEffect(() => {
    if (dataCheckboxRef.current) {
      dataCheckboxRef.current.checked = isSelectAllEnabled;
    }
  }, [isSelectAllEnabled]);

  const handOnCheckAll = (e: SyntheticInputEvent<HTMLInputElement>) => {
    setSelectAllEnable(!isSelectAllEnabled);

    setChecked(data.map((row) => row[refKey]));

    if (isSelectAllEnabled) {
      setChecked([]);
    }
  };

  const handleOnRowCheck = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setChecked([...isChecked, id]);
    if (!checked) {
      setChecked(isChecked.filter((ref) => ref !== id));
      setSelectAllEnable(false);
    }
  };

  if (data.length === 0) return <></>;

  return (
    <StyledTableContainer>
      <StyledTable border={1}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="checkall"
                checked={isSelectAllEnabled}
                onChange={handOnCheckAll}
              />
            </th>
            {tableHeader.length > 0 &&
              tableHeader.map((row) => <th key={row}>{row}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  ref={dataCheckboxRef}
                  type="checkbox"
                  id={row[refKey]}
                  checked={isChecked.includes(row[refKey])}
                  onChange={handleOnRowCheck}
                />
              </td>
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
