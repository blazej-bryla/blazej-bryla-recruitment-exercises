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
  "S",
];
let secretCodeCount = 0;
let secretCodeTimer = 0;
const maxTimeBetweenKeyPress = 5000;
const secretDataMaxShowTime = 15000;

const nothingSpecialElement = document.querySelector("#nothing_special");

function hideData() {
  nothingSpecialElement.style.display = "none";
}

function handleKeyDown(event) {
  const { key } = event;

  if (key === secretCode[secretCodeCount]) {
    secretCodeCount++;

    if (secretCodeCount === secretCode.length) {
      activateSecretData();
      nothingSpecialElement.style.display = "block";

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

function activateSecretData() {
  console.log("Konami Code was correct!");
}

function resetSecretCode() {
  secretCodeCount = 0;
}

document.addEventListener("keydown", handleKeyDown);
