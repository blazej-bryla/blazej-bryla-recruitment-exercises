colorList = [
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

const colorListWrapper = document.querySelector("#list_wrapper");
const inputSearch = document.querySelector("#input_search");
const buttonClear = document.querySelector("#button_clear");

function renderColors() {
  colorListWrapper.innerHTML = "";
  const filteredColors = colorList.filter((color) =>
    color.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  document.title = filteredColors[0];
  filteredColors.forEach((color) => {
    const colorElement = document.createElement("li");
    colorElement.innerHTML = color;
    colorListWrapper.appendChild(colorElement);
  });
}

function clearInputSearch() {
  inputSearch.value = "";
  renderColors();
}

inputSearch.addEventListener("input", renderColors);
buttonClear.addEventListener("click", clearInputSearch);
renderColors();
