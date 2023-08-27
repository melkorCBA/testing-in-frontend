const TEST_COUNTS = {
  passed: 0,
  faild: 0,
};

const beforeEachFuns = [];

const beforeEach = (callback) => {
  beforeEachFuns.push(callback);
};
const it = (testCase, testCallback) => {
  try {
    beforeEachFuns.forEach((callback) => callback());
    testCallback();
    console.log(`%cTEST_CASE: ${testCase} Passed`, "color:green");
    TEST_COUNTS.passed++;
  } catch (err) {
    console.log(`%cTEST_CASE: ${testCase} faild`, "color:red");
    console.error(err);
    TEST_COUNTS.faild++;
  }
};

const expect = (firstValue) => {
  return {
    toEqual: (secondValue) => {
      if (firstValue !== secondValue)
        throw new Error(`${secondValue} expected to be ${firstValue}`);
    },
    notToEqual: (secondValue) => {
      if (firstValue === secondValue)
        throw new Error(`${secondValue} not expected to be ${firstValue}`);
    },
  };
};
