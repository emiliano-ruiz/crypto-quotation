import React, { useState } from "react";
import Form from "./components/Form";
import img from "./cryptoimg.png";
import styled from "@emotion/styled";
import Quotation from "./components/Quotation";
import useQuotation from "./hooks/useQuotation";

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

export default function App() {
  const [conversion, setConversion] = useState({ currency: "", crypto: "" });
  const quotation = useQuotation(conversion.currency, conversion.crypto);

  return (
    <Container>
      <div>
        <Imagen src={img} alt="cryptoimg.png" />
      </div>
      <div>
        <Heading>Real time quotation</Heading>
        <Form onSubmit={(c) => setConversion(c)} />
        <Quotation quotation={quotation} />
      </div>
    </Container>
  );
}
