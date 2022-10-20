module.exports = () => {
  test("#1", () => {
    this.foo = "bar";

    const x = {
      foo: "foo",
      callMe: function () {
        return this.foo;
      },
    };
    expect(x.callMe()).toBe("foo");
    expect(x.callMe.call({ foo: "fou?" })).toBe("fou?"); // call() redefines the context
  });

  test("#2", () => {
    this.foo = "bip";
    const x = {
      foo: "foo",
      callMe: () => {
        return this.foo;
      },
      callMeInstead: () => {
        this.foo = "bar";
        return this.foo;
      },
    };

    expect(x.callMe()).toBe("bip"); // Anonymous functions don't have contexts, only the global one
    expect(x.callMeInstead()).toBe("bar");
  });
};
