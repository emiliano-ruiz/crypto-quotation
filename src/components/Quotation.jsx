import React from "react";
import styled from "@emotion/styled";

const Result = styled.div`
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 30px;
`;

export default function Quotation({quotation}) {

  if (Object.keys(quotation).length === 0)
    return null;

  return (
    <Result>
      <Price>Price is: <b>{quotation.PRICE}</b></Price>
      <Info>Max today: {quotation.HIGHDAY}</Info>
      <Info>Min today: {quotation.LOWDAY}</Info>
      <Info>Change 24hs: {quotation.CHANGEPCT24HOUR}%</Info>
      <Info>Updated: {quotation.LASTUPDATE}</Info>
    </Result>
  );
}
