test("accepted test: hello string", () => {
  const greeting = "hello";
  expect(greeting).toBe("hello");
});

test("wrong test: hello should be world", () => {
  const greeting = "hello";
  expect(greeting).toBe("world");
});
