const fs = require("fs");

const rainbowTableFile = "rainbow_table.txt";
const md5Password = "c8e095e2a26f8540afabb36dcdaee3b1";
const outputFile = "results.txt";

function searchPassword(rainbowTableFile, md5Password) {
  const data = fs.readFileSync(rainbowTableFile, "utf8");

  const lines = data.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    const [word, hashedMd5] = line.split(" ");
    if (hashedMd5 === md5Password) {
      fs.writeFileSync(outputFile, word, "utf8");
    }
  }
}

searchPassword(rainbowTableFile, md5Password);
