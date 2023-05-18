function textEdit() {
  //create consts for placeholder element and input create
  const placeholder = document.querySelector("#placeholder");
  const input = document.createElement("input");

  //set input value as placeholder text
  input.value = placeholder.innerText;

  function handleInputOut() {
    placeholder.innerText = input.value;
    placeholder.style.display = "block";
    input.style.display = "none";
  }

  //event listener for placeholder when blur
  input.addEventListener("blur", handleInputOut);

  //same event listener as above, but works on keydown
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleInputOut();
    }
  });

  //change visibility to show input
  placeholder.style.display = "none";
  input.style.display = "block";

  //insert input before placeholder
  placeholder.parentNode.insertBefore(input, placeholder);
}
