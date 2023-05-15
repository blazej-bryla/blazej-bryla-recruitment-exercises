const secretCode = [
  "i",
  "n",
  "j",
  "e",
  "c",
  "t",
  "s",
  "3",
  "s",
  "e",
  "c",
  "r",
  "e",
  "t",
  "s",
];
let secretCodeCount = 0;
let secretCodeTimer = 0;
const maxTimeBetweenKeyPress = 5000;
const secretDataMaxShowTime = 15000;

const nothingSpecial = document.querySelector("#nothing_special");
nothingSpecial.style.display = "none";

function hideData() {
  nothingSpecial.style.display = "none";
}

function handleKeyDown(event) {
  const { key } = event;

  if (key === secretCode[secretCodeCount]) {
    secretCodeCount++;

    if (secretCodeCount === secretCode.length) {
      activateSecretData();
      nothingSpecial.style.display = "block";

      setTimeout(hideData, secretDataMaxShowTime);
      resetSecretCode();
    }

    clearTimeout(secretCodeTimer);
    secretCodeTimer = setTimeout(resetSecretCode, maxTimeBetweenKeyPress);
  }

  if (key === "Escape") {
    resetSecretCode();
  }
}

function handleKeyPress(event) {
  const { key } = event;

  if (key === secretCode[secretCodeCount]) {
    secretCodeCount++;

    if (secretCodeCount === secretCode.length) {
      activateSecretData();
      resetSecretCode();
    }

    clearTimeout(secretCodeTimer);
    secretCodeTimer = setTimeout(resetSecretCode, maxTimeBetweenKeyPress);
  }
}

function activateSecretData() {
  console.log("Konami Code was correct!");
}

function resetSecretCode() {
  secretCodeCount = 0;
}

document.addEventListener("keypress", handleKeyPress);
document.addEventListener("keydown", handleKeyDown);
