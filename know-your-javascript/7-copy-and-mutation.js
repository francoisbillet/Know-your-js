module.exports = () => {
  test("#1", () => {
    let x = { a: 1, b: 2 };
    let y = { a: 3, b: 4 };
    let z = Object.assign(x, y, { foo: "bar" });

    expect(x).toEqual({ a: 3, b: 4, foo: "bar" });
    expect(z).toEqual({ a: 3, b: 4, foo: "bar" });
  });

  test("#2", () => {
    let y = { a: 3, b: 4 };
    let y2 = Object.assign({}, y, { c: 5 });
    expect(y).toEqual({ a: 3, b: 4 });
    expect(y2).toEqual({ a: 3, b: 4, c:5 });
  });

  test("Bonus", () => {
    let z = Object.assign({}, { a: 1, b: 2 }, { foo: "bar" });
    expect(z).toEqual(expect.objectContaining({a: 1}));
    expect(z).toBe(z);
  });
};
