xdescribe('parent suite', () => {
  const suite = 'parent';
  beforeAll(() => {
    console.log(`beforeAll:${suite}`);
  });
  afterAll(() => {
    console.log(`afterAll:${suite}`);
  });
  beforeEach(() => {
    console.log(`beforeEach:${suite}`);
  });
  afterEach(() => {
    console.log(`afterEach:${suite}`);
  });
  describe('child suite', () => {
    const suite = 'child';
    beforeAll(() => {
      console.log(`beforeAll:${suite}`);
    });
    afterAll(() => {
      console.log(`afterAll:${suite}`);
    });
    beforeEach(() => {
      console.log(`beforeEach:${suite}`);
    });
    afterEach(() => {
      console.log(`afterEach:${suite}`);
    });
    describe('grand-child suite', () => {
      const suite = 'grand-child';
      beforeAll(() => {
        console.log(`beforeAll:${suite}`);
      });
      afterAll(() => {
        console.log(`afterAll:${suite}`);
      });
      beforeEach(() => {
        console.log(`beforeEach:${suite}`);
      });
      afterEach(() => {
        console.log(`afterEach:${suite}`);
      });
      it(`spec:${suite}`, () => {
        console.log(`spec 1:${suite}`);
      });
    });
  });
});
