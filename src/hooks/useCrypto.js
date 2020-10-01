import { useEffect, useState } from "react";
import axios from "axios";
import useSelector from "./useSelector";

export default function useCrypto() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get( "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")
      .then((r) => {
        const newCryptos = r.data.Data.map((c) => {
          return {
            key: c.CoinInfo.Name,
            value: c.CoinInfo.FullName,
          };
        });
        setCryptos(newCryptos);
      });
  }, []);

  return useSelector("Crypto", cryptos);
}
