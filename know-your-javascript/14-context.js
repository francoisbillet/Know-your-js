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
    expect(x.callMe.call({ foo: "fou?" })).toBe("fou?");
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

    expect(x.callMe()).toBe("bip"); // Nani ? line 11 ?
    expect(x.callMeInstead()).toBe("bar");
  });
};
