module.exports = () => {
  test("#1", () => {
    expect(2 + 3).toBe(_);
    expect(10 - 4).toBe(_);
    expect(2 * 3).toBe(_);
    expect(10 % 3).toBe(_);
  });

  test("#2", () => {
    let myNumber = 2;
    expect(++myNumber).toBe(_);
    expect(--myNumber).toBe(_);
    expect(myNumber++).toBe(_);
  });
};
