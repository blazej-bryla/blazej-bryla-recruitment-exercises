colorList = ["black", "white", "red", "green", "blue", "yellow", "purple", "pink","brown", "orange"];

const colorListWrapper = document.querySelector("#list_wrapper");

colorList.forEach(color => {
    const colorElement = document.createElement("li");
    colorElement.innerHTML = color
    colorListWrapper.appendChild(colorElement);
});
