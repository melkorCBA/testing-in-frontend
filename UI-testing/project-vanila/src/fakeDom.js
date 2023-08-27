function resetDOM() {
  const containerTest = {
    style: {
      backgroundColor: "",
    },
  };
  const fakeDocument = {
    getElementById: () => {
      return {
        click: () => {},
        addEventListener: function (type, callback) {
          this.click = callback;
        },
      };
    },
    querySelector: () => {
      return containerTest;
    },
  };

  document.__proto__.getElementById = fakeDocument.getElementById;
  document.__proto__.querySelector = fakeDocument.querySelector;
}

resetDOM();
