function textEdit() {
  //create consts for placeholder element and input create
  const placeholder = document.querySelector("#placeholder");
  const input = document.createElement("input");

  //set input value as placeholder text
  input.value = placeholder.innerHTML;

  //event listener for placeholder when blur
  input.addEventListener("blur", () => {
    //set placeholder text as input value
    placeholder.innerHTML = input.value;

    //change visibillity to show placeholder
    placeholder.style.display = "block";
    input.style.display = "none";
  });

  //same event listener as above, but works on keydown
  input.addEventListener("keydown", (e) => {
    if (e === "ENTER") {
      placeholder.innerHTML = input.value;
      placeholder.style.display = "block";
      input.style.display = "none";
    }
  });
}
