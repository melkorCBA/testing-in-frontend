const addOne = require("../src/app.js");

describe("addOne", () => {
  it("should add 1 for given number", () => {
    const givenNumber = 2;
    const result = addOne(givenNumber);
    expect(result).toEqual(givenNumber + 1);
  });
});
