beforeEach(() => {
  resetDOM();
  setListner();
});

it("should not have a initial color ", () => {
  const initalColour = container.style.backgroundColor;
  expect(container.style.backgroundColor).toEqual("");
  expect(initalColour).notToEqual("red");
});

it("should turn red when red button clicked", () => {
  const initalColour = container.style.backgroundColor;
  redButton.click();
  expect(container.style.backgroundColor).toEqual("red");
  expect(initalColour).notToEqual("red");
});
