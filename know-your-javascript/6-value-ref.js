module.exports = () => {
  function changeSomething(something) {
    if (typeof something === "string") {
      something += "bar";
    } else if (typeof something === "object") {
      something.foo = "bar";
    }

    return something;
  }

  test("#1", () => {
    const x = "foo";
    const z = changeSomething(x);

    expect(x).toEqual(_);
    expect(z).toEqual(_);
  });

  test("#2", () => {
    const y = { foo: "foo" };
    const b = changeSomething(y);
    expect(y).toEqual(_);
    expect(b).toEqual(_);
  });
};
