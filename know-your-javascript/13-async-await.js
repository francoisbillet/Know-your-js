module.exports = () => {
  test("", async () => {
    const somethingAsync = async () => {
      return "hello, world !";
    };

    expect(somethingAsync()).toBeInstanceOf(Promise);
    expect(await somethingAsync()).toEqual("hello, world !");
  });
};
