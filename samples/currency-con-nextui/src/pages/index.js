import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [lkrAmount, setLkrAmount] = useState(0);
  const [usdAmount, setUsdAmount] = useState(0);
  const [euroAmount, setEuroAmount] = useState(0);
  const [buttonText, setButtonText] = useState("Convert");

  const handleInputChange = (event) => {
    setLkrAmount(event.target.value);
  };

  const handleConvert = () => {
    if (!isNaN(lkrAmount)) {
      const usdConverted = (lkrAmount / 200).toFixed(2);
      const euroConverted = (lkrAmount / 230).toFixed(2);

      setUsdAmount(usdConverted);
      setEuroAmount(euroConverted);
      setButtonText("Clear");
    }
  };
  const handleClear = () => {
    setUsdAmount(0);
    setEuroAmount(0);
    setButtonText("Convert");
  };
  const onClick = () => {
    if (buttonText === "Convert") {
      handleConvert(lkrAmount);
      return;
    }
    handleClear();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Head>
        <title>Currency Converter (Next.js)</title>
      </Head>
      <h1>Currency Converter</h1>
      <div>
        <label htmlFor="fromAmount">From (LKR)</label>
        <input
          type="number"
          id="fromAmount"
          value={lkrAmount}
          onChange={handleInputChange}
          style={{ padding: "5px", width: "100px" }}
        />
        <button onClick={onClick}>{buttonText}</button>
      </div>
      <table
        style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USA Dollar</td>
            <td>{usdAmount && `$ ${usdAmount}`}</td>
          </tr>
          <tr>
            <td>Euro</td>
            <td>{euroAmount && `€ ${euroAmount}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
