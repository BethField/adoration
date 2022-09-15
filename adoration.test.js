const each = require("jest-each").default;

const { showHowMuchILoveYou } = require("./adoration.js");

describe("showHowMuchILoveYou", () => {
  it("Exists", () => {
    expect(showHowMuchILoveYou).toBeDefined;
  });

  it("is a function", () => {
    expect(showHowMuchILoveYou instanceof Function).toEqual(true);
  });

  /*
 it("returns a string with the correct number of 'i's", () => {
    expect(showHowMuchILoveYou(5)).toBe("I love you thiiiiis much!");
  });
  */

  /* each([]).test("", () => {
    expect()
  })
  */

  each([
    ["I love you thiiiiis much!", 5],
    ["I love you thiiis much!", 3],
  ]).test("Returns %s when passed %s", (expected, amount) => {
    expect(showHowMuchILoveYou(amount)).toBe(expected);
  });

  it("Throws an error when passed a string", () => {
    expect(() => {
      showHowMuchILoveYou("with all my heart");
    }).toThrow(new Error("I'm really sorry; you're just not my type"));
  });
});
