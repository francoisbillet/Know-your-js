module.exports = () => {
  test("#1", () => {
    let x = { a: 1, b: 2 };
    let y = { a: 3, b: 4 };
    let z = Object.assign(x, y, { foo: "bar" });

    expect(x).toEqual(_);
    expect(z).toEqual(_);
  });

  test("#2", () => {
    let y = { a: 3, b: 4 };
    let y2 = Object.assign({}, y, { c: 5 });
    expect(y).toEqual(_);
    expect(y2).toEqual(_);
  });

  test("Bonus", () => {
    let z = Object.assign({}, { a: 1, b: 2 }, { foo: "bar" });
    expect({ ...z }).toEqual(_);
    expect(z).toBe(_);
  });
};
