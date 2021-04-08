module.exports = () => {
  test("#1", () => {
    console.log = jest.fn();
    const arr = ["One", "Two", "Three"];

    // Write missing code so that the test passes

    expect(console.log.mock.calls[0][0]).toBe("One"); // First log
    expect(console.log.mock.calls[1][0]).toBe("Two"); // Second Log
    expect(console.log.mock.calls[2][0]).toBe("Three"); // Second Log
  });

  test("#2", () => {
    const arr = [
      { name: "John", age: 10 },
      { name: "Jane", age: 31 },
      { name: "Neo", age: 25 },
    ];

    // Write the code required for the test to pass
    const upsideDownAdults = _;

    // Hint to reverse names:
    // a javascript array has the .reverse() function available...
    expect(upsideDownAdults).toEqual([
      { eman: "enaJ", age: 31 },
      { eman: "oeN", age: 25 },
    ]);
  });

  test("#3", () => {
    const arr = [
      { name: "Paul", country: "France" },
      { name: "Philip", country: "USA" },
      { name: "Camille", country: "France" },
      { name: "Louis", country: "France" },
      { name: "Mary", country: "USA" },
      { name: "Maya", country: "Spain" },
    ];

    const result = _;

    expect(result).toEqual({
      france: ["Camille", "Louis", "Paul"],
      usa: ["Mary", "Philip"],
      spain: ["Maya"],
    });
  });
};
