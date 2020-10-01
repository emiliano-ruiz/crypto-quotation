import React, { useState } from "react";
import styled from "@emotion/styled";

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearence: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

export default function useSelector(label, data) {
  const [selection, setSelection] = useState("");

  function Selector() {
    return (
      <>
        <Label>{label}</Label>
        <Select
          onChange={(e) => setSelection(e.target.value)}
          value={selection}
        >
          <option value="">- Select -</option>
          {data.map((curr) => (
            <option key={curr.key} value={curr.key}>
              {curr.value}
            </option>
          ))}
        </Select>
      </>
    );
  }

  return [selection, Selector];
}
