const colorList = [
  "black",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "pink",
  "brown",
  "orange",
];

const colorListWrapperElement = document.querySelector("#list_wrapper");
const inputSearchElement = document.querySelector("#input_search");
const buttonClearElement = document.querySelector("#button_clear");

function renderColors() {
  colorListWrapperElement.innerText = "";
  const filteredColors = colorList.filter((color) =>
    color.toLowerCase().includes(inputSearchElement.value.toLowerCase())
  );
  document.title = filteredColors[0];
  filteredColors.forEach((color) => {
    const colorElement = document.createElement("li");
    colorElement.innerText = color;
    colorListWrapperElement.appendChild(colorElement);

    colorElement.addEventListener("click", () => {
      colorElement.style.color = "green";
    });
  });
}

function clearInputSearch() {
  inputSearchElement.value = "";
  renderColors();
}

inputSearchElement.addEventListener("input", renderColors);
buttonClearElement.addEventListener("click", clearInputSearch);
renderColors();
