const convertBtn = document.getElementById("convertBtn");
const fromAmountInput = document.getElementById("fromAmount");
const usdAmountCell = document.getElementById("usdAmount");
const euroAmountCell = document.getElementById("euroAmount");

const handleConvert = () => {
  const lkrAmount = parseFloat(fromAmountInput.value);

  if (!isNaN(lkrAmount)) {
    const usdConverted = (lkrAmount / 200).toFixed(2);
    const euroConverted = (lkrAmount / 230).toFixed(2);

    usdAmountCell.textContent = `$ ${usdConverted}`;
    euroAmountCell.textContent = `€ ${euroConverted}`;

    convertBtn.textContent = "Clear";
  }
};

const handleClear = () => {
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
  handleClear();
  $event.preventDefault();
});
