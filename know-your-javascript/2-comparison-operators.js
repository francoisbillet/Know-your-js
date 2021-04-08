module.exports = () => {
  test("#1", () => {
    expect(5 > 2).toBe(_);
    expect(5 >= 5).toBe(_);
    expect(5 <= 4).toBe(_);
  });

  test("#2", () => {
    expect("foo" === "bar").toBe(_);
    expect(2 == "2").toBe(_);
    expect(5 !== "5").toBe(_);
    expect(5 != "5").toBe(_);
    expect(8 === "8").toBe(_);
  });

  test("Bonus", () => {
    expect(undefined == null).toBe(_);
  });
};
