describe("addOne", () => {
  beforeEach(function (done) {
    // Create dummy DOM elements for testing
    const dummyContainer = document.createElement("div");
    dummyContainer.classList.add("color-container");

    const dummyButton = document.createElement("button");
    dummyButton.id = "btn-red";

    // Set up the test environment by appending the dummy elements to the document
    document.body.appendChild(dummyContainer);
    document.body.appendChild(dummyButton);
    loadScript(done);
  });
  it("should turn red when red button clicked", () => {
    const redButton = document.getElementById("btn-red");
    const container = document.querySelector(".color-container");
    const initalColour = container.style.backgroundColor;
    redButton.click();
    expect(container.style.backgroundColor).toEqual("red");
    expect(initalColour).not.toEqual("red");
  });
});

function loadScript(done) {
  const testScript = document.createElement("script");
  testScript.src = "./src/test.js";
  // Append the script to the document head to execute its contents
  document.head.appendChild(testScript);
  // Wait for the script to load and execute before proceeding with the test
  testScript.onload = function () {
    done();
  };
}
