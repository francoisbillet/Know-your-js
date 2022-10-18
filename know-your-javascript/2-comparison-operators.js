module.exports = () => {
  test("#1", () => {
    expect(5 > 2).toBe(true);
    expect(5 >= 5).toBe(true);
    expect(5 <= 4).toBe(false);
  });

  test("#2", () => {
    expect("foo" === "bar").toBe(false);
    expect(2 == "2").toBe(true);
    expect(5 !== "5").toBe(true);
    expect(5 != "5").toBe(false);
    expect(8 === "8").toBe(false);
  });

  test("Bonus", () => {
    expect(undefined == null).toBe(true);
  });
};
