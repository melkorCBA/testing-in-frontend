import { useState } from "react";

const CurrencyInput = ({ onClick, buttonText }) => {
  const [lkrAmount, setLkrAmount] = useState("");

  const handleInputChange = (event) => {
    setLkrAmount(event.target.value);
  };

  return (
    <div>
      <label htmlFor="fromAmount">From (LKR)</label>
      <input
        type="number"
        id="fromAmount"
        value={lkrAmount}
        onChange={handleInputChange}
        style={{ padding: "5px", width: "100px" }}
      />
      <button onClick={() => onClick(lkrAmount)}>{buttonText}</button>
    </div>
  );
};

export default CurrencyInput;
