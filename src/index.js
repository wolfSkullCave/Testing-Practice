console.log("Hello Webpack Template!");

export function capitalize(words) {
  const cap = words.charAt(0).toUpperCase();
  words = cap + words.substr(1);
  return words;
}

export function reverseString(word) {
  const wordArr = word.split("");
  return wordArr.reverse().toString().replaceAll(",", "");
}

export const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtr(num1, num2) {
    return num1 - num2;
  },
  mult(num1, num2) {
    return num1 * num2;
  },
  div(num1, num2) {
    return num1 / num2;
  },
};

export function caesarCipher(word, offset) {
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // const alphaDict = {
  //   1: ["a", "A"],
  //   2: ["b", "B"],
  //   3: ["c", "C"],
  //   4: ["d", "D"],
  //   5: ["e", "E"],
  //   6: ["f", "F"],
  //   7: ["g", "G"],
  //   8: ["h", "H"],
  //   9: ["i", "I"],
  //   10: ["j", "J"],
  //   11: ["k", "K"],
  //   12: ["l", "L"],
  //   13: ["m", "M"],
  //   14: ["n", "N"],
  //   15: ["o", "O"],
  //   16: ["p", "P"],
  //   17: ["q", "Q"],
  //   18: ["r", "R"],
  //   19: ["s", "S"],
  //   20: ["t", "T"],
  //   21: ["u", "U"],
  //   22: ["v", "V"],
  //   23: ["w", "W"],
  //   24: ["x", "X"],
  //   25: ["y", "Y"],
  //   26: ["z", "Z"],
  // };

  // 1. split the word into an array
  const wordArr = word.split("");
  console.log(wordArr);
  // 2. match the letters of the new array to the alpha array indexes and store them in a new array
  const indexArr = [];
  const wordEncrypted = [];

  wordArr.forEach((letter) => {
    let index = alpha.indexOf(letter);
    indexArr.push(index);
  });

  console.log(indexArr);

  // 3. add the offset variable to the new array
  for (let i; (i = 0); i < indexArr.length) {
    wordEncrypted.push(indexArr[i] + offset);
  }

  console.log(wordEncrypted);
  // 4. construct a new word by pulling from the alpha array using the offest array
  // 5. remove commas from the new word
  // 6. return the new word

  return 0;
}

const answer = caesarCipher("hello", 3);
console.log(answer);
