const alphaArr = [
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
];

const alphaCapsArr = [
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

const word = "HeLLo";
const offset = 3;

// testing functions
const wordEncrypted = encryptWord(word, 3);
wordEncrypted;

// encrypt word using offset
function encryptWord(word, num) {
  // takes a word, converts it to an array
  // and offsets each letter by the num attribute
  
}

function decryptWord(word, num) {
  return 0;
}

function filterCaps(word) {
  return [...word]
    .map((char, index) => {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return index;
      }
    })
    .filter((index) => index != undefined);
}
