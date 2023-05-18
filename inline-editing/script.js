function textEdit() {
  //create consts for placeholder element and input create
  const placeholder = document.querySelector("#placeholder");
  const input = document.createElement("input");

  //set input value as placeholder text
  input.value = placeholder.innerText;

  //event listener for placeholder when blur
  input.addEventListener("blur", () => {
    //set placeholder text as input value
    placeholder.innerText = input.value;

    //change visibillity to show placeholder
    placeholder.style.display = "block";
    input.style.display = "none";
  });

  //same event listener as above, but works on keydown
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      placeholder.innerText = input.value;
      placeholder.style.display = "block";
      input.style.display = "none";
    }
  });

  //change visibility to show input
  placeholder.style.display = "none";
  input.style.display = "inline";

  //insert input before placeholder
  placeholder.parentNode.insertBefore(input, placeholder);
}
