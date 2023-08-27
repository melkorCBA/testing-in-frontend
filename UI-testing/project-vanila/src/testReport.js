const TOTAL = TEST_COUNTS.passed + TEST_COUNTS.faild;

console.log(
  `%c Passed : ${TEST_COUNTS.passed}/${TOTAL}  %c Faild: ${TEST_COUNTS.faild}/${TOTAL}`,
  "color:green",
  "color:red"
);
setTestResult();

function setTestResult() {
  const totalP = document.createElement("p");
  totalP.textContent = `total: ${TOTAL}`;
  const passedP = document.createElement("p");
  passedP.textContent = `passed: ${TEST_COUNTS.passed}`;
  passedP.style.color = "green";

  const failedP = document.createElement("p");
  failedP.textContent = `faild: ${TEST_COUNTS.faild}`;
  failedP.style.color = "red";

  const testResultContainer = document.querySelectorAll(
    ".test-results-container"
  )[0];

  testResultContainer.appendChild(totalP);
  testResultContainer.appendChild(passedP);
  testResultContainer.appendChild(failedP);
}
