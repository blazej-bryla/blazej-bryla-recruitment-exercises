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
    const containerElement = document.createElement("div");
    containerElement.classList.add("secretData");

    const authorElement = document.createElement("div");
    authorElement.classList.add("author");
    authorElement.innerText = `Author: ${data[i].user.login}`;
    containerElement.appendChild(authorElement);

    const issueNameElement = document.createElement("div");
    issueNameElement.classList.add("issueName");
    issueNameElement.innerText = `Issue name: ${data[i].title}`;
    containerElement.appendChild(issueNameElement);
    nothingSpecialElement.appendChild(containerElement);
  }
}
