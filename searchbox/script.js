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

function renderColors() {
  colorListWrapper.innerHTML = "";
  const filteredColors = colorList.filter((color) =>
    color.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  filteredColors.forEach((color) => {
    const colorElement = document.createElement("li");
    colorElement.innerHTML = color;
    colorListWrapper.appendChild(colorElement);
  });
}

inputSearch.addEventListener("input", renderColors)

renderColors();