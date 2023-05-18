fetch("https://api.github.com/repos/elixir-lang/elixir/issues")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    appendData(data);
  })
  .catch((err) => console.log(err));

function appendData(data) {
  data.sort((a, b) => b.created_at - a.created_at);
  const nothingSpecialElement = document.querySelector("#nothing_special");

  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add("secretData");

    const author = document.createElement("div");
    author.classList.add("author");
    author.innerText = `Author: ${data[i].user.login}`;
    div.appendChild(author);

    const issueName = document.createElement("div");
    issueName.classList.add("issueName");
    issueName.innerText = `Issue name: ${data[i].title}`;
    div.appendChild(issueName);
    nothingSpecialElement.appendChild(div);
  }
}
