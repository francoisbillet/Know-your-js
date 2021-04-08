module.exports = () => {
  const x = { a: 1, b: 2, c: 3 };

  test("#1", () => {
    const { a, ...z } = x;

    expect(a).toEqual(_);
    expect(z).toEqual(_);
  });

  test("#2", () => {
    let arr = [];
    arr.push(...Object.keys(x));
    const [result1, result2, result3] = arr;
    expect(result1).toEqual(_);
    expect(result2).toEqual(_);
    expect(result3).toEqual(_);
  });
};
