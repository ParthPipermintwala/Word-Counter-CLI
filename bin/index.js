#!/usr/bin/env node

import { readFile } from "fs/promises";
const [, , filePath, wordToFind] = process.argv;

if (!filePath) {
  console.log("-----------------------------------------------------------------");
  console.error("file path is required");
  console.error("Usage: wordtool <filePath> [wordToFind]");
  console.log("-----------------------------------------------------------------");
  process.exit(1);
}

let fileContent;
try {
  fileContent = await readFile(filePath, "utf-8");
} catch (error) {
  console.log("-----------------------------------------------------------------");
  console.error(`❌ Error reading file`);
  console.log("-----------------------------------------------------------------");
  process.exit(1);
}

const words = fileContent
  .toLowerCase()
  .split(/\W+/)
  .filter((w) => /^[a-z]+$/.test(w));

let wordCounter = {};
words.forEach((w) => {
  if (w in wordCounter) {
    wordCounter[w] = wordCounter[w] + 1;
  } else {
    wordCounter[w] = 1;
  }
});

if (wordToFind) {
  console.log("-----------------------------------------------------------------");
  wordCounter[wordToFind.toLowerCase()]
    ? console.log(
        `The word "${wordToFind}" appears ${
          wordCounter[wordToFind.toLowerCase()]
        } times.`
      )
    : console.log(`The word "${wordToFind}" does not appear in the text.`);
  console.log("-----------------------------------------------------------------");
} else {
  console.log("-----------------------------------------------------------------");
  console.log(wordCounter);
  console.log("-----------------------------------------------------------------");
  let totalWords = words.length;
  console.log(`Total words: ${totalWords}`);
  console.log("-----------------------------------------------------------------");
}
