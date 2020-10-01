import { useEffect, useState } from "react";
import axios from "axios";

export default function useQuotation(currency, crypto) {
  const [conversion, setConversion] = useState({});

  useEffect(() => {
    if (!currency || !crypto) return;

    const formData = new FormData();
    formData.append("fsyms", crypto);
    formData.append("tsyms", currency);

    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?${new URLSearchParams(
          formData
        )}`
      )
      .then((r) => setConversion(r.data.DISPLAY[crypto][currency]));
  }, [currency, crypto]);

  return conversion;
}
