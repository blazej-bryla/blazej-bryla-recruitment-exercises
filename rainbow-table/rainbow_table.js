const fs = require("fs");
const md5 = require("js-md5");

const inputFile = "pan_tadeusz.txt";
const wordListFile = "word_list.txt";
const rainbowTableFile = "rainbow_table.txt";

function getUniqueWords(inputFile, outputFile) {
  const data = fs.readFileSync(inputFile, "utf-8");

  // removes special characters
  const sanitizedData = data.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

  const words = sanitizedData.split(" ");

  const uniqueWords = [...new Set(words)];

  const outputData = uniqueWords.join("\n");
  fs.writeFileSync(outputFile, outputData, "utf-8");
}

function createRainbowTable(inputFile, outputFile) {
  const data = fs.readFileSync(inputFile, "utf-8");

  const words = data.split("\n");

  const rainbowTable = words.map((word) => `${word} ${md5(word)}`);
  const outputData = rainbowTable.join("\n");
  fs.writeFileSync(outputFile, outputData, "utf8");
}

getUniqueWords(inputFile, wordListFile);
createRainbowTable(wordListFile, rainbowTableFile);
