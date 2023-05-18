let dataToDisplay = [];

fetch("./articles.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dataToDisplay = data.articles;
    render();
  })
  .catch((err) => console.log(err));

const wrapperElement = document.getElementById("posts_list_wrapper");
const articleFormElement = document.querySelector("#new_article_form");
const createArticleButtonElement = document.querySelector(
  "#create_article_button"
);
const articleCountElement = document.querySelector("#article_count");

articleFormElement.style.display = "none";

function showArticleForm() {
  articleFormElement.style.display = "flex";
  createArticleButtonElement.style.display = "none";
}

function render() {
  wrapperElement.innerHTML = "";
  articleCountElement.innerText = `All articles: ${dataToDisplay.length}`;
  appendData(dataToDisplay);
}

function removeArticle(idToRemove) {
  console.log(idToRemove);
  dataToDisplay = dataToDisplay.filter(({ id }) => id !== idToRemove);
  render();
}

function addArticle() {
  articleFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(articleFormElement);
    const author = formData.get("author_input");
    const title = formData.get("title_input");
    const content = formData.get("content_input");
    const id = Date.now();

    const createdAt = new Date();

    dataToDisplay.push({ id, author, createdAt, title, content });
    articleFormElement.reset();
    articleFormElement.style.display = "none";
    createArticleButtonElement.style.display = "block";
    const snackbar = document.querySelector("#snackbar");
    snackbar.classList.add("show");
    setTimeout(() => {
      snackbar.classList.remove("show");
    }, 3000);
    render();
  });
}

function createArticleElement(articleData) {
  const articleElement = document.createElement("article");

  const titleElement = document.createElement("h3");
  titleElement.textContent = articleData.title;
  articleElement.appendChild(titleElement);

  const createdAtElement = document.createElement("h5");
  createdAtElement.textContent = `Created at: ${formatDate(
    articleData.createdAt
  )}`;
  articleElement.appendChild(createdAtElement);

  const authorElement = document.createElement("h5");
  authorElement.textContent = `Author: ${articleData.author}`;
  articleElement.appendChild(authorElement);

  const contentElement = document.createElement("p");
  contentElement.textContent = articleData.content;
  articleElement.appendChild(contentElement);

  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.textContent = "REMOVE ARTICLE";
  deleteButtonElement.addEventListener("click", () => {
    removeArticle(articleData.id);
  });
  articleElement.appendChild(deleteButtonElement);

  const voteWrapperElement = document.createElement("div");
  articleElement.appendChild(voteWrapperElement);

  const votesDisplay = document.createElement("div");
  let votes = 0;
  votesDisplay.textContent = `Votes: ${votes}`;
  voteWrapperElement.appendChild(votesDisplay);

  const voteUp = document.createElement("button");
  voteUp.textContent = "+";
  voteUp.addEventListener("click", () => {
    if (votes >= 5) {
      return;
    } else {
      votes++;
    }
    updateVotes();
  });
  voteWrapperElement.appendChild(voteUp);

  const voteDown = document.createElement("button");
  voteDown.textContent = "-";
  voteDown.addEventListener("click", () => {
    if (votes <= -10) {
      return;
    }
    votes--;
    updateVotes();
  });
  voteWrapperElement.appendChild(voteDown);

  function updateVotes() {
    votesDisplay.textContent = `Votes: ${votes}`;
  }

  return articleElement;
}

function appendData(data) {
  data.map((articleData, i) => {
    const listItemElement = document.createElement("li");
    const article = createArticleElement(articleData);

    listItemElement.appendChild(article);
    wrapperElement.appendChild(listItemElement);
  });
}

function formatDate(dateToFormat) {
  const date = new Date(dateToFormat);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
