const convertFromLKR = (lkrAmount, toCurrency) => {
  if (isNaN(lkrAmount)) throw new Error("Invalid Amount");
  if (toCurrency === "USD") return (lkrAmount / 200).toFixed(2);
  if (toCurrency === "EURO") return (lkrAmount / 230).toFixed(2);
  throw new Error("Unknown Currency");
};

export { convertFromLKR };
