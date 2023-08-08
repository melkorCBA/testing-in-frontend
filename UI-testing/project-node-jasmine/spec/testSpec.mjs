import path from "path";
import fs from "fs";

const templatePath = path.join(process.cwd(), "src/index.html");
const template = fs.readFileSync(templatePath).toString();

describe("addOne", () => {
  beforeEach(async () => {
    document.body.innerHTML = "";
    document.write(template);
    // require("../src/test.mjs");
    await import("../src/test.mjs");
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
