fetch("./articles.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => appendData(data))
  .catch((err) => console.log(err));

function appendData(data) {
  data = data.articles;
  const wrapper = document.getElementById("posts_list_wrapper");
  data.map((article, i) => {
    const div = document.createElement("div");
    div.classList.add("single_article");

    const createdAt = document.createElement("div");
    createdAt.classList.add("article_createdAt");
    createdAt.textContent = `Created at: ${article.createdAt}`;
    div.appendChild(createdAt);

    const author = document.createElement("div");
    author.classList.add("article_author");
    author.textContent = `Author: ${article.author}`;
    div.appendChild(author);

    const title = document.createElement("h3");
    title.classList.add("article_title");
    title.textContent = article.title;
    div.appendChild(title);

    const content = document.createElement("div");
    content.classList.add("article_content");
    content.textContent = article.content;
    div.appendChild(content);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_article_button");
    deleteButton.textContent = "REMOVE ARTICLE";
    deleteButton.addEventListener("click", () => {
      div.remove();
    });
    div.appendChild(deleteButton);

    wrapper.appendChild(div);

    const voteWrapper = document.createElement("div");
    voteWrapper.classList.add("vote_wrapper");
    div.appendChild(voteWrapper);

    const voteUp = document.createElement("button");
    voteUp.classList.add("vote_button", "vote_up");
    voteUp.textContent = "+";
    voteUp.addEventListener("click", () => {
      if (article.votes >= 5) {
        return;
      } else {
        article.votes++;
      }
      updateVotes();
    });
    voteWrapper.appendChild(voteUp);

    const votesDisplay = document.createElement("div");
    votesDisplay.classList.add("votes_display");
    article.votes = 0;
    votesDisplay.textContent = `Votes: ${article.votes}`;
    voteWrapper.appendChild(votesDisplay);

    const voteDown = document.createElement("button");
    voteDown.classList.add("vote_button", "vote_down");
    voteDown.textContent = "-";
    voteDown.addEventListener("click", () => {
      if (article.votes <= -10) {
        return;
      }
      article.votes--;
      updateVotes();
    });
    voteWrapper.appendChild(voteDown);

    function updateVotes() {
      votesDisplay.textContent = `Votes: ${article.votes}`;
    }
  });


}
