module.exports = () => {
  test("", () => {
    console.log = jest.fn();
    const hoist = () => {
      try {
        console.log(foo);
        console.log(bar);
        var foo = 1;
        let bar = 2;
      } catch (error) {
        console.log("Error");
      }
    };

    hoist();

    expect(console.log.mock.calls[0][0]).toBe(undefined); // First log
    expect(console.log.mock.calls[1][0]).toBe("Error"); // Second Log
  });
};
