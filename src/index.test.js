import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from ".";
import { encryptWord, decryptWord } from "./caeserCypher";

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
  // encryption testing
  expect(encryptWord("a", 1)).toBe("b");
  expect(encryptWord("c", 2)).toBe("e");
  expect(encryptWord("z", 3)).toBe("c");

  expect(encryptWord("zaza", 1)).toBe("abab");
  expect(encryptWord("ZAZA", 2)).toBe("BCBC");
  expect(encryptWord("ZaZa", 3)).toBe("CdCd");

  // decryption testing
  expect(decryptWord("abab", 1, false)).toBe("zaza");
  expect(decryptWord("ABAB", 2, false)).toBe("YZYZ");
  expect(decryptWord("aBaB", 3, false)).toBe("xYxY");
});

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([2, 4, 6, 8, 10])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});
