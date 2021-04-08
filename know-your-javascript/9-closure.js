module.exports = () => {
  test("#1", () => {
    let result;
    (function foo(a) {
      return (function bar(b) {
        result = a;
      })(1);
    })(0);

    expect(result).toBe(_);
  });

  test("#2", () => {
    const createSumFunction = () => {
      // Implement createSumFunction so that the tests become valid
    };
    const addThree = createSumFunction(3);
    const addFive = createSumFunction(5);

    expect(addThree(10)).toBe(13);
    expect(addFive(10)).toBe(15);
  });

  test("Bonus", async (done) => {
    console.log = jest.fn();
    jest.useFakeTimers();
    expect.assertions(3);
    const arr = [10, 12, 15];
    for (var i = 0; i < arr.length; i++) {
      setTimeout(function () {
        console.log("Index: " + i + ", element: " + arr[i]);
      }, 3000);
    }
    jest.runAllTimers();

    expect(console.log.mock.calls[0][0]).toBe(_); // First log
    expect(console.log.mock.calls[1][0]).toBe(_); // Second Log
    expect(console.log.mock.calls[2][0]).toBe(_); // Second Log
    done();
  });
};
