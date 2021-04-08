module.exports = () => {
  test("", async () => {
    const somethingAsync = async () => {
      return "hello, world !";
    };

    expect(_).toBeInstanceOf(Promise);
    expect(_).toEqual("hello, world !");
  });
};
