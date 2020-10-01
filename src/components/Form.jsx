import React, { useState } from "react";
import Error from "../components/Error";
import styled from "@emotion/styled";
import useCrypto from "../hooks/useCrypto";
import useCurrency from "../hooks/useCurrency";

const SubmitButton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color #fff;
  transition: background-color .3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

export default function Form({ onSubmit }) {

  const [currency, CurrencySelector] = useCurrency();
  const [crypto, CryptoSelector] = useCrypto();
  const [error, setError] = useState(null);

  const quoteCurrency = (e) => {
    e.preventDefault();

    if (!currency || !crypto) {
      setError("All fields are required");
      return;
    }

    onSubmit({ currency, crypto });
    setError(null);
  };

  return (
    <form onSubmit={(e) => quoteCurrency(e)}>
      <CurrencySelector />
      <CryptoSelector />
      <SubmitButton type="submit" value="Calculate" />
      <Error message={error} />
    </form>
  );
}
