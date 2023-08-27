let redButton;
let container;
const setListner = () => {
  redButton = document.getElementById("btn-red");
  container = document.querySelector(".color-container");
  redButton.addEventListener("click", () => {
    makeContainerRed(container);
  });

  const makeContainerRed = (container) => {
    container.style.backgroundColor = "red";
  };
};

setListner();
