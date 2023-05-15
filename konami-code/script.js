const secretCode = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "s",
  "e",
  "L",
  "L",
  "e",
  "o",
];
let secretCodeCount = 0;
let secretCodeTimer = 0;
const maxTimeBetweenKeyPress = 5000;

function handleKeyPress(event) {
  const { key } = event;

  if (key === secretCode[secretCodeCount]) {
    if (key === "Escape") {
      resetSecretCode();
    }
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

document.addEventListener("keydown", handleKeyPress);
