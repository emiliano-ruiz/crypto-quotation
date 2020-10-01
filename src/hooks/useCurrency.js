import currencies from "../data/currencies";
import useSelector from "./useSelector";

export default function useCurrency() {
  return useSelector("Currency", currencies);
}
