import { capitalize, reverseString, calculator, caesarCipher } from ".";

test("Capitalizes the first character in a string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
});

test("Take a string and reverse it", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
});

test("Perform basic addition, subtraction, multiplication and division with 2 numbers", () => {
  expect(calculator.add(10, 2)).toBe(12);
  expect(calculator.add(20, 4)).toBe(24);
  expect(calculator.subtr(10, 5)).toBe(5);
  expect(calculator.subtr(20, 5)).toBe(15);
  expect(calculator.mult(20, 5)).toBe(100);
  expect(calculator.mult(16, 20)).toBe(320);
  expect(calculator.div(10, 2)).toBe(5);
  expect(calculator.div(200, 16)).toBe(12.5);
});

test("Caesar Cipher ", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
  expect(caesarCipher("World", 5)).toBe("Btwqi");
});
