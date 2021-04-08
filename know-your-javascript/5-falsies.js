module.exports = () => {
  test("#1", () => {
    // Replace each _ by a different falsy value
    // BONUS: Can you find a 7th falsy value ?
    const falsyValues = [_, _, _, _, _, _];
    falsyValues.forEach((value) => expect(value).toBeFalsy());
  });
};
