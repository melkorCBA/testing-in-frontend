const redButton = document.getElementById("btn-red");
const container = document.querySelector(".color-container");
redButton.addEventListener("click", () => {
  makeContainerRed(container);
});

const makeContainerRed = (container) => {
  container.style.backgroundColor = "red";
};
