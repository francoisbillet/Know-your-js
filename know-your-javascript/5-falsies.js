module.exports = () => {
  test("#1", () => {
    // Replace each _ by a different falsy value
    // BONUS: Can you find a 7th falsy value ?
    const falsyValues = [false, 0, null, undefined, "", NaN, 0n];
    falsyValues.forEach((value) => expect(value).toBeFalsy());
  });
};
