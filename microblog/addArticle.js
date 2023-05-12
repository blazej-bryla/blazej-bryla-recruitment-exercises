const articleForm = document.querySelector("#new_article_form");
const createArticleButton = document.querySelector("#create_article_button");
const wrapper = document.getElementById("posts_list_wrapper");

articleForm.style.display = "none";

function showArticleForm() {
  articleForm.style.display = "flex";
  createArticleButton.style.display = "none";
}

function addArticle() {
  const authorInputValue = document.querySelector("#author_input").value;
  const titleInputValue = document.querySelector("#title_input").value;
  const contentInputValue = document.querySelector("#content_input").value;

  const date = new Date();
  const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const div = document.createElement("div");
  div.classList.add("single_article");
  div.innerHTML = `
    <div class="article_createdAt">Created at: ${currentDate}</div>
    <div class="article_author">Author: ${authorInputValue}</div>
    <h3 class="article_title">${titleInputValue}</h3>
    <div class="article_content">${contentInputValue}</div>
    <div class="vote_wrapper">
      <button class="vote_button vote_up">+</button>
      <div class="votes_display">Votes: 0</div>
      <button class="vote_button vote_down">-</button>
    </div>
    <button class="delete_article_button">REMOVE ARTICLE</button>
  `;
  wrapper.appendChild(div);

  const deleteButton = div.querySelector(".delete_article_button");
  deleteButton.addEventListener("click", () => {
    div.remove();
  });

  const voteUp = div.querySelector(".vote_up");
  const voteDown = div.querySelector(".vote_down");
  const votesDisplay = div.querySelector(".votes_display");
  let articleVotes = 0;

  voteUp.addEventListener("click", () => {
    if (articleVotes >= 5) {
      return;
    }
    articleVotes++;
    updateVotes();
  });

  voteDown.addEventListener("click", () => {
    if (articleVotes <= -10) {
      return;
    }
    articleVotes--;
    updateVotes();
  });

  function updateVotes() {
    votesDisplay.textContent = `Votes: ${articleVotes}`;
  }

  articleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    articleForm.reset();
    articleForm.style.display = "none";
    createArticleButton.style.display = "block";
    const snackbar = document.querySelector("#snackbar");
    snackbar.classList.add("show");
    setTimeout(() => {
      snackbar.classList.remove("show");
    }, 3000);
  });
}

