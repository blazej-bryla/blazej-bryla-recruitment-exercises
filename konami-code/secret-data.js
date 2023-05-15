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
  const nothingSpecial = document.querySelector("#nothing_special");
  data.map((secretData, i) => {
    const div = document.createElement("div");
    div.classList.add("secretData");
  });

  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add("secretData");

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = `Author: ${data[i].user.login}`;
    div.appendChild(author);

    const issueName = document.createElement("div");
    issueName.classList.add("issueName");
    issueName.textContent = `Issue name: ${data[i].title}`;
    div.appendChild(issueName);
    nothingSpecial.appendChild(div);
  }
}
