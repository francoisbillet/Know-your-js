module.exports = () => {
  test("#1", (done) => {
    // doSomethingAsync contains errors. Fix them
    // so that the second test becomes successful
    const doSomethingAsync = () => {
      return Promise.resolve("hello, world!");
      };

    // Find the expected value
    expect(doSomethingAsync()).toBeInstanceOf(Promise);

    // Fix doSomethingAsync to make this pass
    doSomethingAsync().then((value) => {
      expect(value).toEqual("hello, world!");
      done();
    });
  });

  test("#2", (done) => {
    console.log = jest.fn();
    const doSomethingAsync = (x) => {
      return new Promise((resolve, reject) => {
        if (x === "pass") {
          resolve("pass");
        } else if (x === "fail") {
          reject("fail");
        } else {
          resolve("unknown");
        }
      });
    };
    const catchSomethingAsync = (x) => {
      return doSomethingAsync(x).catch((error) => {
        console.log(error);
        return "error";
      });
    };

    // Find the expected values
    Promise.all([
      catchSomethingAsync("pass"),
      catchSomethingAsync("hell"),
      catchSomethingAsync("fail"),
    ]).then(([x, y, z]) => {
      expect(x).toEqual("pass");
      expect(y).toEqual("unknown");
      expect(z).toEqual("error");
      expect(console.log.mock.calls[0][0]).toBe("fail"); // First log
      done();
    });
  });
};
