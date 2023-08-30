const convertBtn = document.getElementById("convertBtn");
const fromAmountInput = document.getElementById("fromAmount");
const usdAmountCell = document.getElementById("usdAmount");
const euroAmountCell = document.getElementById("euroAmount");

const handleConvert = () => {
  const lkrAmount = parseFloat(fromAmountInput.value);

  if (!isNaN(lkrAmount)) {
    const usdConverted = convertFromLKR(lkrAmount, "USD");
    const euroConverted = convertFromLKR(lkrAmount, "EURO");

    usdAmountCell.textContent = `$ ${usdConverted}`;
    euroAmountCell.textContent = `€ ${euroConverted}`;

    convertBtn.textContent = "Clear";
  }
};

const handleclear = () => {
  fromAmountInput.value = "";
  usdAmountCell.textContent = "";
  euroAmountCell.textContent = "";
  convertBtn.textContent = "Convert";
};

convertBtn.addEventListener("click", function ($event) {
  if (convertBtn.textContent === "Convert") {
    handleConvert();

    $event.preventDefault();
    return;
  }
  clearHandler();
  $event.handleclear();
});
