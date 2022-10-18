module.exports = () => {
  test("#1", () => {
    expect(2 + 3).toBe(5);
    expect(10 - 4).toBe(6);
    expect(2 * 3).toBe(6);
    expect(10 % 3).toBe(1);
  });

  test("#2", () => {
    let myNumber = 2;

    expect(++myNumber).toBe(3);
    expect(--myNumber).toBe(2);
    expect(myNumber++).toBe(2);
  });
};
