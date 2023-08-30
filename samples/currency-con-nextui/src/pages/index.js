import CurrencyInput from "@/components/CurrencyInput";
import CurrencyTable from "@/components/CurrencyTable";
import { convertFromLKR } from "@/services/conversion.service";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [usdAmount, setUsdAmount] = useState("");
  const [euroAmount, setEuroAmount] = useState("");
  const [buttonText, setButtonText] = useState("Convert");

  const handleConvert = (lkrAmount) => {
    if (!isNaN(lkrAmount)) {
      const usdConverted = convertFromLKR(lkrAmount, "USD");
      const euroConverted = convertFromLKR(lkrAmount, "EURO");

      setUsdAmount(usdConverted);
      setEuroAmount(euroConverted);
      setButtonText("Clear");
    }
  };
  const handleClear = () => {
    setUsdAmount("");
    setEuroAmount("");
    setButtonText("Convert");
  };
  const onClick = (lkrAmount) => {
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
      <CurrencyInput onClick={onClick} buttonText={buttonText} />
      <CurrencyTable usdAmount={usdAmount} euroAmount={euroAmount} />
    </div>
  );
}
