const path = require("path");
const fs = require("fs");

const templatePath = path.join(process.cwd(), "src/index.html");
const template = fs.readFileSync(templatePath).toString();

describe("addOne", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.write(template);
    require("../src/test");
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
