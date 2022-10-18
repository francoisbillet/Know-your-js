module.exports = () => {
  test("#1", () => {
    let result;
    (function foo(a) {
      return (function bar(b) {
        result = a;
      })(1);
    })(0);

    expect(result).toBe(0);
  });

  test("#2", () => {
    const createSumFunction = x => y => x + y
    const addThree = createSumFunction(3);
    const addFive = createSumFunction(5);

    expect(addThree(10)).toBe(13);
    expect(addFive(10)).toBe(15);
  });

  test("Bonus", async (done) => {
    console.log = jest.fn();
    jest.useFakeTimers();

    const arr = [10, 12, 15];
    for (var i = 0; i < arr.length; i++) {
      setTimeout(function () {
        console.log("Index: " + i + ", element: " + arr[i]);
      }, 3000);
    }

    jest.runAllTimers();

    expect(console.log.mock.calls[0][0]).toBe("Index: 3, element: undefined"); // First log
    expect(console.log.mock.calls[1][0]).toBe("Index: 3, element: undefined"); // Second Log
    expect(console.log.mock.calls[2][0]).toBe("Index: 3, element: undefined"); // Second Log
    done();
  });
};
