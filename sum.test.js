const sum = require("./sum");

it("add 3 + 4 to be 7", () => {
  expect(sum(3, 4)).toBe(7);
});
