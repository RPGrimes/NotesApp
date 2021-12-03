const notePreview = require("../notePreview");

test("Shows only the first 20 characters from a long word", () => {
  let noteText = "test1test2test3test4test5test6";
  expect(notePreview(noteText)).toBe("test1test2test3test4");
});

test("Shows the first 20 characters from a string of words", () => {
  let noteText = "This is the test sentence to see if this shows only the preview";
  expect(notePreview(noteText)).toBe("This is the test sen");
});

test("Shows the whole string if it is less than 20 characters", () => {
  let noteText = "test";
  expect(notePreview(noteText)).toBe("test");
});