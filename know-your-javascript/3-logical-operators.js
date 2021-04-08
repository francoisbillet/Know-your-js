module.exports = () => {
  const x = "Hello, world!";
  const y = 3.14;

  test("#1", () => {
    let a;
    if (typeof y === "number" && typeof x === "string") {
      a = "Sweet !";
    } else {
      a = "salty...";
    }
    expect(a).toBe(_);
  });

  test("#2", () => {
    expect(x.toLowerCase() === "hello, world!" && y > 3 ? "bip" : "boop").toBe(
      _
    );
  });

  test("#3", () => {
    expect(y && "hey").toBe(_);
    expect(y - 3.14 || x).toBe(_);
  });
};
